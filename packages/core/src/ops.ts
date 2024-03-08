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
