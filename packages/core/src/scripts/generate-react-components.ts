import fs from "fs";
import path from "path";
import { generateReactComponent } from "@token-icons/core";
import { JSX_OUTPUT_DIR, SVG_OUTPUT_DIR } from "../constants";

if (!fs.existsSync(JSX_OUTPUT_DIR)) {
  fs.mkdirSync(JSX_OUTPUT_DIR);
}

const svgFiles = fs.readdirSync(SVG_OUTPUT_DIR);

if (svgFiles.length === 0) {
  console.info("No optimized SVGs found, optimizing SVGs...");
  const optimizeSvgScriptPath = path.join(__dirname, "./optimize-svgs.ts");
  const optimizeSvgScript = `bun run ${optimizeSvgScriptPath}`;
  require("child_process").execSync(optimizeSvgScript);
}

// generate react components
svgFiles.forEach((svg) => {
  if (path.extname(svg) === ".svg") {
    const svgFilePath = path.join(SVG_OUTPUT_DIR, svg);
    generateReactComponent({
      name: path.basename(svg, ".svg"),
      optimizedSvg: fs.readFileSync(svgFilePath, "utf-8"),
      outputDir: JSX_OUTPUT_DIR,
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
