import { optimize } from "svgo";
import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import { JSX_OUTPUT_DIR } from "./constants";

export const optimizeSvg = (svg: string) => {
  return optimize(svg, {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  }).data;
};

export const normalizeComponentName = (filename: string): string => {
  // handle 0x prefix
  const has0xPrefix = filename.startsWith("0x");
  const nameWithoutPrefix = has0xPrefix ? filename.slice(2) : filename;

  // replace hyphens and spaces with underscores, make all letters lowercase
  const name = nameWithoutPrefix.replace(/[- ]+/g, "_").toLowerCase();

  // convert to PascalCase
  const pascalCaseName = toPasCalCase(name);

  return has0xPrefix ? `0x${pascalCaseName}` : pascalCaseName;
};

const toCamelCase = (str: string) => {
  return str.replace(/[-_]+(.)?/g, (match, chr) =>
    chr ? chr.toUpperCase() : ""
  );
};

const toPasCalCase = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toUpperCase() : word.toLowerCase()
    )
    .replace(/\s+/g, "")
    .replace(/_/g, "");
};

const readyForJSX = (svgRaw: string): string => {
  const $ = cheerio.load(svgRaw, { xmlMode: true });

  $("*").each((_, el) => {
    if (el.type !== "tag") return;

    const element = $(el);
    Object.entries(el.attribs).forEach(([attrKey, attrValue]) => {
      if (attrKey && attrKey.includes("-")) {
        element.attr(toCamelCase(attrKey), attrValue).removeAttr(attrKey);
      }
      if (attrKey === "class") {
        element.attr("className", attrValue).removeAttr(attrKey);
      }
    });
  });

  return $("svg").html() || "";
};

export const transformSvg = (optimizedSvg: string) => {
  const $ = cheerio.load(optimizedSvg, { xmlMode: true });
  $("*").each((_, el) => {
    if (el.type !== "tag") return;
    Object.keys(el.attribs).forEach((attrKey) => {
      if (attrKey === "class") {
        $(el).attr("className", el.attribs[attrKey]).removeAttr(attrKey);
      }
    });
  });
  return $("svg").attr("props", "...").attr("ref", "forwardedRef").toString();
};

export const generateTypesFile = () => {
  const fileContent = `export interface IconComponentProps {
    size?: number | string;
    color?: string;
    className?: string;
  }`;
  fs.writeFileSync(path.join(JSX_OUTPUT_DIR, "types.ts"), fileContent);
};

export const generateBaseIconComponent = () => {
  const fileContent = `
import React, { SVGProps } from 'react';

export interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number;
}

const BaseIcon: React.FC<BaseIconProps> = ({ size = 24, children, ...props }) => {
  const svgSize = typeof size === 'number' ? \`\${size}px\` : size;
  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;`;

  console.log(`Generated BaseIcon component`);
  fs.writeFileSync(path.join(JSX_OUTPUT_DIR, "BaseIcon.tsx"), fileContent);
};

type IconComponentOptions = {
  baseName: string;
  optimizedSvg: string;
};

export const generateReactComponent = async ({
  optimizedSvg,
  baseName,
}: IconComponentOptions) => {
  const jsxSvgContent = readyForJSX(optimizedSvg);
  const name = normalizeComponentName(baseName);

  const componentContent = `
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const Icon${name} = forwardRef<SVGSVGElement, IconComponentProps>((props, forwardedRef) => (
  <BaseIcon {...props} ref={forwardedRef}>
    ${jsxSvgContent}
  </BaseIcon>
));

Icon${name}.displayName = '${name}';

export default Icon${name};
`;

  console.log(`Generated ${name} component`);
  fs.writeFileSync(path.join(JSX_OUTPUT_DIR, `${name}.tsx`), componentContent);
};
