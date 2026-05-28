import {dirname, resolve} from "path"
import { fileURLToPath } from "url"

export const getAbsoluteFilePath = (fileUrl, relativePath) => {
    const filePath = fileURLToPath(fileUrl)
    const _dirName = dirname(filePath)

    return resolve(_dirName, relativePath)

}