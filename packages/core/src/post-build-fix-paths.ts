// import * as path from 'path'
// import fs from 'fs'

// // fix paths in index.js
// const indexPath = path.join(__dirname, '..', 'dist', 'index.d.ts')

// let indexContent = fs.readFileSync(indexPath, 'utf8')
// indexContent = indexContent.replace(/\.\.\/dist\/svgs\//g, './svgs/')
// fs.writeFileSync(indexPath, indexContent)

// // fs.readdir(path.join(__dirname, '..', 'dist'), (err, files) => {
// //   if (err) {
// //     console.error(err)
// //     return
// //   }

// //   files.forEach((file) => {
// //     if (file.endsWith('.svg')) {
// //       console.log('deleting', file)
// //   fs.rmSync(file)
// //     }
// //   })
// // })

// // fix paths in svg-module.js
// // const svgModulePath = path.join(__dirname, '..', 'dist', 'svg-module.d.ts')

// // let svgModuleContent = fs.readFileSync(svgModulePath, 'utf8')
// // svgModuleContent = svgModuleContent.replace(/\.\.\/dist\/svgs\//g, './svgs/')
// // fs.writeFileSync(svgModulePath, svgModuleContent)
