/*
 * Dependencies
 */
import dict_info from "api/data.words/function/dict_info.js"
import row_tlds from "api/data.words/promise/row_tlds.js"
import row_poss from "api/data.words/function/row_poss.js"
import row_pos_short from "api/data.words/function/row_pos_short.js"
// import { data_word_get_parsed } from "api/data.words/pgdb.js"
import str_row from "./str_row"

/**
 * Get DB row, add domains
 * @params key {string} - keyword string
 * @resolves {object} row - DB row {key, pos1, root, etc}
 */

const thisModule = async function (key, pos = "etc", synonyms = []) {
  return new Promise(async (resolve) => {
    /*
     * Make new row
     */
    let row = await str_row(key) // DB row or new default model
    if (row.pos === "etc" && pos !== "etc") {
      row.pos = pos
    }

    /*
     * Add synonyms
     */
    for (let syn of synonyms) {
      let srow = await str_row(syn) // DB row or new default model
      if (srow && srow.list_count) {
        row.dict[syn] = dict_info(srow, "", true) // add to list
      }
    }

    /*
     * Build
     */
    row = row_pos_short(row)
    row = await row_tlds(row)
    row = await row_poss(row)

    /*
     * Done
     */
    resolve(row)
  })
}
export default thisModule
