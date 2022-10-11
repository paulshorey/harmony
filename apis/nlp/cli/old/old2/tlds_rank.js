// import { sleep } from 'pauls-pure-functions/functions/promises.js';
import "../../process.js" // contains secret keys ~ never push to GIT!
import "common/global.js"
import tlds_all from "data/domains/all"
import { data_domain_put } from "api/data.domains/pgdb"

/*
 *
 * GET FIRST SET OF ROWS:
 *
 */
(async function() {
  // each tld
  let rank = Object.keys(tlds_all).length
  for (let key in tlds_all) {

    // update row
    let row = { key, rank }
    let row_updated = await data_domain_put(row)
    if (!row_updated) {
      global.cconsole.warn("!put", row)
    }

    // debug
    console.log(row)

    // next
    rank--
  }

  process.exit()
})()
