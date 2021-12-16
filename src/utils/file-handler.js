import fs from 'fs/promises'
import path from 'path'

import { ROOT_PATH } from '../config/globals.js'

export const getFile = async (filename) => {
  const filePath = path.join(ROOT_PATH, 'data', filename)
  const fileBuffer = await fs.readFile(filePath)
  const fileContent = fileBuffer.toString()

  const data = JSON.parse(fileContent)

  return data
}
