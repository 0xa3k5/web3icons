import { SVG_OUTPUT_DIR, SVG_SOURCE_DIR } from "../src/constants";
import { optimizeSvg } from "../src/ops";
import path from "path";
import fs from "fs";

if (!fs.existsSync(SVG_OUTPUT_DIR)) {
  fs.mkdirSync(SVG_OUTPUT_DIR);
}

if (!fs.existsSync(path.join(SVG_OUTPUT_DIR, "branded"))) {
  fs.mkdirSync(path.join(SVG_OUTPUT_DIR, "branded"));
}

if (!fs.existsSync(path.join(SVG_OUTPUT_DIR, "mono"))) {
  fs.mkdirSync(path.join(SVG_OUTPUT_DIR, "mono"));
}

const rawSVGs = {
  branded: fs.readdirSync(path.join(SVG_SOURCE_DIR, "branded")),
  mono: fs.readdirSync(path.join(SVG_SOURCE_DIR, "mono")),
};

Object.entries(rawSVGs).forEach(([key, value]) => {
  value.forEach((rawSVG) => {
    const svgFilePath = path.join(SVG_SOURCE_DIR, key, rawSVG);
    const optimizedSVG = optimizeSvg(fs.readFileSync(svgFilePath, "utf-8"));
    console.log("→ optimized:", path.basename(svgFilePath, ".svg"));
    fs.writeFileSync(path.join(SVG_OUTPUT_DIR, key, rawSVG), optimizedSVG);
  });
});
