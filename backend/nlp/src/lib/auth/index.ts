import useCaptcha from "@ps/nlp/src/lib/auth/captcha"

/**
 * Authentication handler
 * @returns {string} error message
 */
export default async function authIndex({ req, auth }): Promise<string> {
  let error = ""
  if (auth) {
    if (auth.includes("captcha")) {
      error = (await useCaptcha(req)) || error
    }
  }
  return error
}
