import fs from "fs";
import path from "path";
import { JSX_OUTPUT_DIR, SVG_OUTPUT_DIR } from "../src/constants";
import { generateReactComponent } from "../src/ops";

if (!fs.existsSync(SVG_OUTPUT_DIR)) {
  fs.mkdirSync(SVG_OUTPUT_DIR);
}

if (!fs.existsSync(JSX_OUTPUT_DIR)) {
  fs.mkdirSync(JSX_OUTPUT_DIR);
}

const svgFiles = fs.readdirSync(SVG_OUTPUT_DIR);

if (svgFiles.length === 0) {
  console.info("No optimized SVGs found, optimizing SVGs...");
  require("child_process").execSync("bun run optimize-svgs");
  require("child_process").execSync("bun run generate-react-components");
}

// generate react components
svgFiles.forEach((svg) => {
  if (path.extname(svg) === ".svg") {
    const svgFilePath = path.join(SVG_OUTPUT_DIR, svg);
    generateReactComponent({
      name: path.basename(svg, ".svg"),
      optimizedSvg: fs.readFileSync(svgFilePath, "utf-8"),
    });
  }
});

const indexFileContent = svgFiles
  .filter((file) => path.extname(file) === ".svg")
  .map((file) => {
    return `export { default as Icon${path.basename(file, ".svg")} } from "./${path.basename(file, ".svg")}";`;
  })
  .join("\n");

// make index file
fs.writeFileSync(path.join(JSX_OUTPUT_DIR, "index.ts"), indexFileContent);
