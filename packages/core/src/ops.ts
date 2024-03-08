import { optimize } from "svgo";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import * as cheerio from "cheerio";

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
  // Replace hyphens and spaces with underscores, make all letters lowercase
  let name = filename.replace(/[- ]+/g, "_").toLowerCase();

  // Convert to PascalCase
  return name
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toUpperCase() : word.toLowerCase()
    )
    .replace(/\s+/g, "")
    .replace(/_/g, "");
};

const readyForJSX = (svgRaw: string): string => {
  const $ = cheerio.load(svgRaw, { xmlMode: true });

  $("*").each((i, el) => {
    if (el.type !== "tag") return;

    const element = $(el);
    Object.entries(el.attribs).forEach(([attrKey, attrValue]) => {
      if (attrKey === "class") {
        element.attr("className", attrValue).removeAttr(attrKey);
      }
    });
  });

  return (
    $("svg")
      .attr("props", "...")
      .attr("ref", "forwardedRef")
      .toString()
      // .replace(/stroke=['|"]currentColor['|"]/g, "stroke={color}") // todo
      // .replace(/fill=['|"]currentColor['|"]/g, "fill={color}") // todo
      .replace('props="..."', "{...props}")
      .replace('ref="forwardedRef"', "ref={forwardedRef}")
  );
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

type IconComponentOptions = {
  name: string;
  outputDir: string;
  optimizedSvg: string;
};

export const generateReactComponent = async ({
  optimizedSvg,
  outputDir,
  name,
}: IconComponentOptions) => {
  const jsxSvg = readyForJSX(optimizedSvg);
  // const compName = normalizeComponentName(path.basename(svgFilePath, ".svg"));

  const componentContent = `
import React from 'react';
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
  
const Icon${name} = forwardRef<SVGSVGElement, IconComponentProps>((props, forwardedRef) => (
  ${jsxSvg.replace('props="..."', "{...props}").replace('ref="forwardedRef"', "ref={forwardedRef}")}
));

Icon${name}.displayName = '${name}';

export default Icon${name};
`;

  console.log(`Generated ${name} component`);
  writeFileSync(path.join(outputDir, `${name}.tsx`), componentContent);
};
