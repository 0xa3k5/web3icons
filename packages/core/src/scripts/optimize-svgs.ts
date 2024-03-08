import { optimizeSvg } from "@token-icons/core";
import { SVG_OUTPUT_DIR, SVG_SOURCE_DIR } from "../constants";
import path from "path";
import fs from "fs";

if (!fs.existsSync(SVG_OUTPUT_DIR)) {
  fs.mkdirSync(SVG_OUTPUT_DIR);
}

const rawSVGs = fs.readdirSync(SVG_SOURCE_DIR);

rawSVGs.forEach((rawSVG) => {
  const svgFilePath = path.join(SVG_SOURCE_DIR, rawSVG);
  const optimizedSVG = optimizeSvg(fs.readFileSync(svgFilePath, "utf-8"));
  console.log("↳ optimized:", path.basename(svgFilePath, ".svg"));
  fs.writeFileSync(path.join(SVG_OUTPUT_DIR, rawSVG), optimizedSVG);
});

console.log(fs.readdirSync(SVG_OUTPUT_DIR).length, "SVGs optimized");
