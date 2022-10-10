import "dotenv-flow/config" // contains secret keys ~ never push to GIT!
import "common/global.js" // contains secret keys ~ never push to GIT!
import import_localstorage from "node-localstorage"
import all_tlds from "data/domains/all.js"

let { LocalStorage } = import_localstorage
let localStorageSupported = new LocalStorage("tmp/localStorage-supportedTLDs")
let localStorageUnsupported = new LocalStorage("tmp/localStorage-unsupportedTLDs")

let DEBUG1 = false
;(async function () {
  for (let tld in all_tlds) {
    let whoisYes = localStorageSupported.getItem(tld)
    if (whoisYes) {
      if (whoisYes < 2000) {
        cconsole.info(tld, "whois", whoisYes)
      } else {
        cconsole.warn(tld, "whois", whoisYes)
      }
    }
    let whoisNo = localStorageUnsupported.getItem(tld)
    if (whoisNo) {
      cconsole.error(tld, "whois", whoisNo)
    }
  }
})()
