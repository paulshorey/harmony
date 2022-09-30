import get_os from "../device/get_os";
import get_utm_source from "./get_utm_source";

/**
 * Get the current marketing attribution variables like pid, c, referralCode, etc.
 * @param {object} queryParamsFromCode - set URL/localStorage query params to these keys/values
 *    instead of using new ones from URL/localStorage, use these params from NextJS /page data
 * @returns {object} - { pid, c, referralCode, ein, source } - marketing attribution variables
 */
export default function (queryParamsFromCode = {}) {
  if (typeof window === "undefined") return {};
  let out = {};

  // INPUT
  // from page
  let qs = { ...queryParamsFromCode } as any; // tsFixMe
  // from url
  if (typeof URLSearchParams !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    if (!qs.referralCode) qs.referralCode = urlParams.get("referralCode") || "";
    if (!qs.pid) qs.pid = (urlParams.get("pid") || "")?.toLowerCase();
    if (!qs.c) qs.c = (urlParams.get("c") || "")?.toLowerCase();
  }
  // from localstorage
  if (!qs.pid && !qs.ein && !qs.referralCode) {
    let cached = JSON.parse(window.localStorage.getItem("attributionParams") || "{}");
    // attribution params are cached for 24 hours. If expired, simply ignore the cache (localStorage).
    if (cached.expires && new Date().getTime() < cached.expires) {
      delete cached.expires;
      for (let key in cached) {
        if (!qs[key]) qs[key] = cached[key];
      }
    }
  }

  // OUTPUT - MUTUALLY EXCLUSIVE GROUPS OF PARAMETERS
  // partner
  if (qs.ein) {
    out = {
      source: "partner",
      ein: qs.ein
    };
  }
  // referral
  else if (qs.referralCode) {
    out = {
      pid: "referral",
      referralCode: qs.referralCode,
      c: `${get_utm_source().toLowerCase()}_${get_os().toLowerCase()}`
    };
  }
  // advertisement
  else if (qs.pid) {
    out = {
      pid: qs.pid,
      c: qs.c
    };
  }
  // organic
  else {
    out = {
      pid: "web_organic"
    };
  }
  // remember previous attribution params in localStorage
  let cache = { ...out };
  cache.expires = new Date().getTime() + 1000 * 60 * 60 * 24; // 24 hours
  window.localStorage.setItem("attributionParams", JSON.stringify(cache));
  // return
  return out;
}
