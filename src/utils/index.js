import * as jwt from 'jose'
import { nanoid } from 'nanoid'
import * as CryptoJS from "crypto-js"


const accessTokenPrivateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY

const refreshTokenPrivateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY

const encryptionKey = process.env.ENCRYPTION_KEY

export const getRefererUrl = (referer, pathname) => {
    const lastChar = referer.substr(referer.length - 1);
    if (lastChar === "/") {
        const _referer = referer.slice(0, -1)
        return `${_referer}${pathname}`
    }
    return `${referer}/${pathname}`
}

export const signJwt = async (payload, isAccessToken = true) => {
    const privateKey = isAccessToken ? accessTokenPrivateKey : refreshTokenPrivateKey
    const expiresIn = isAccessToken ? '5m' : '7d'
    const token = await new jwt.SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setJti(nanoid())
        .setIssuedAt()
        .setExpirationTime(expiresIn)
        .sign(new TextEncoder().encode(privateKey))
    return token
}

export const verifyJwt = async (token, isAccessToken = true) => {
    try {
        const privateKey = isAccessToken ? accessTokenPrivateKey : refreshTokenPrivateKey

        const verified = await jwt.jwtVerify(
            token,
            new TextEncoder().encode(privateKey)
        )
        return { data: verified.payload, isError: false }
    } catch (err) {
        console.log(err.message)
        return { data: null, isError: true }
    }
}

export const decodeJwtToken = async(token) => {
    try {
        const payload = jwt.decodeJwt(token)
        return { error: false, data: payload, message: success }
    } catch (error) {
        return { error: true, data: null, message: error.message }
    }
}

export const encryptValue = (val) => {
    const encrypted = CryptoJS.AES.encrypt(`${val}`, encryptionKey).toString()
    return encrypted
}

export const decryptValue =  (ciphertext) => {
    const decrypted = CryptoJS.AES.decrypt(ciphertext, encryptionKey).toString(CryptoJS.enc.Utf8)
    return decrypted
}

export const registerService = (name, initFn) => {
    if (process.env.NODE_ENV === 'development') {
      if (!(name in global)) {
        global[name] = initFn();
      }
      return global[name];
    }
    return initFn();
  };