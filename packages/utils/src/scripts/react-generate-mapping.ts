import fs from 'fs';
import path from 'path';
import { reactRoot } from '../constants';


const networkIcons = fs.readdirSync(path.join(reactRoot, 'src/icons/networks'));
const tokenIcons = fs.readdirSync(path.join(reactRoot, 'src/icons/tokens'));

const networkPaths = networkIcons
  .filter(file => file.endsWith('.tsx'))
  .map(file => {
    const iconName = path.basename(file, '.tsx');
    return `  ${iconName}: () => import('./icons/networks/${iconName}'),\n`;
  })
  .join('');


const tokenPaths = tokenIcons
  .filter(file => file.endsWith('.tsx'))
  .map(file => {
    const iconName = path.basename(file, '.tsx');
    return `  ${iconName}: () => import('./icons/tokens/${iconName}'),\n`;
  })
  .join('');

const content = `/* Generated */\n// This file maps dynamically importable icon components.

// Type for a single import function that dynamically imports a module
type IconImportFunction = () => Promise<{ default: React.ComponentType<any> }>

// Type for the map containing all network icon import functions
interface IconImportMap {
  [name: string]: IconImportFunction
}

export const NETWORK_ICON_IMPORT_MAP: IconImportMap = {\n${networkPaths}};\n

export const TOKEN_ICON_IMPORT_MAP: IconImportMap  = {\n${tokenPaths}};\n
`;

// Write the TypeScript file
const outputPath = path.join(reactRoot, 'src/icon-import-map.ts');
fs.writeFileSync(outputPath, content);
console.log('✅ import paths has been generated at:', outputPath);



