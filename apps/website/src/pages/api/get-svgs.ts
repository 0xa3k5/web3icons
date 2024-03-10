// pages/api/get-svgs.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import JSZip from 'jszip'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const svgNames = (
    Array.isArray(req.query.name) ? req.query.name : [req.query.name]
  ).filter((n): n is string => !!n)

  if (!svgNames) {
    return
  }

  const svgVariant =
    typeof req.query.variant === 'string' ? req.query.variant : 'branded'

  if (svgNames.length === 0) {
    res.status(400).json({ error: 'No SVG names provided' })
    return
  }
  req.query.variant === 'string' ? req.query.variant : 'branded'

  const zip = new JSZip()
  const filesReadPromises = svgNames.map((svgName) => {
    const filePath = path.resolve(
      process.cwd(),
      `../../packages/core/src/svgs/${svgVariant}/${svgName}.svg`,
    )
    return fs.promises
      .readFile(filePath)
      .then((data) => {
        zip.file(`${svgName}.svg`, data)
      })
      .catch((error) => {
        console.error(`Failed to read SVG: ${svgName}`, error)
        res.status(404).json({ error: `SVG not found: ${svgName}` })
      })
  })

  try {
    await Promise.all(filesReadPromises)

    // If there's only one SVG, send it directly
    if (svgNames.length === 1) {
      const svgName = svgNames[0]!.toUpperCase()
      const svgFile = zip.files[`${svgName}.svg`]

      // Check if the file actually exists in the zip object
      if (!svgFile) {
        res.status(404).send('SVG not found')
        return
      }

      const svgContent = await svgFile.async('nodebuffer')
      res.setHeader('Content-Type', 'image/svg+xml')
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${svgName}.svg"`,
      )
      res.end(svgContent)
    } else {
      // If there are multiple SVGs, send a zip file
      const zipContent = await zip.generateAsync({ type: 'nodebuffer' })
      res.setHeader('Content-Type', 'application/zip')
      res.setHeader(
        'Content-Disposition',
        'attachment; filename="token-icons.zip"',
      )
      res.end(zipContent)
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to process SVG files' })
  }
}
