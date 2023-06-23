import {
  createCipheriv,
  scryptSync,
  createDecipheriv,
  randomBytes,
} from 'crypto'

const algorithm = 'aes-256-cbc'
const inputEncoding = 'utf8'
const outputEncoding = 'base64'

export const encrypt = (
  data: string,
  iv: string,
  password: string,
  salt: string
) => {
  try {
    const key = scryptSync(password, salt, 32)
    const cipher = createCipheriv(
      algorithm,
      key,
      Buffer.from(iv, outputEncoding)
    )
    let cipheredData = cipher.update(data, inputEncoding, outputEncoding)
    cipheredData += cipher.final(outputEncoding)
    return cipheredData
  } catch (error) {
    throw new Error(`encrypt: ${error}`)
  }
}

export const decrypt = (
  data: string,
  iv: string,
  password: string,
  salt: string
) => {
  try {
    const key = scryptSync(password, salt, 32)
    const decipher = createDecipheriv(
      algorithm,
      key,
      Buffer.from(iv, outputEncoding)
    )
    let decipheredData = decipher.update(data, outputEncoding, inputEncoding)
    decipheredData += decipher.final(inputEncoding)
    return decipheredData
  } catch (error) {
    throw new Error(`decrypt: ${error}`)
  }
}

export const generateIv = () => {
  try {
    const iv = randomBytes(16)
    return Buffer.from(iv).toString(outputEncoding)
  } catch (error) {
    throw new Error(`generateIv: ${error}`)
  }
}
