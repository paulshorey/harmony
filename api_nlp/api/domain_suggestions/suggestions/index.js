// import {objects_merge} from "@twodashes/universal/esm/objects.js";
import nlp from "./nlp"
import phrase_lists from "./this.phrase_lists"
import tlds from "./this.tlds"
import domains_dict from "./this.domains_dict"
import domains_mix from "./this.domains_mix"
import domains_lists from "./this.domains_lists"
import phrases from "./this.phrases"
import word_hacks from "./this.word_hacks"
import phrase_hacks from "./this.phrase_hacks"
import { syllable_count } from "@twodashes/universal/esm/words"

const rate_word = function (key, dict) {
  if (key && dict[key] && !this.chunks_dicts[key]) {
    this.chunks_dicts[key] = dict[key]
    this.chunks_dicts[key][15] = syllable_count(key)
    let rating = 20
    let pos = this.chunks_dicts[key][11] || this.chunks_dicts[key][9]
    if (pos === "adj") {
      rating = 50
    } else if (pos === "nou") {
      rating = 40
    } else if (pos === "ver" || pos === "adv") {
      rating = 30
    }
    rating = Math.max(Math.round(rating / (this.chunks_dicts[key][15] || 3)), 2) // treat syllables 1 and 2 the same
    this.word_ratings[key] = rating
  }
}
/**
 * Suggestions
 * @param {object} options - object of optional options { length_vs_relevance: 2.5, tlds_limit: 10, ...etc }
 * @param {array} tlds_user - favorited by user
 * @param {array} tlds_unchecked - previously checked, but unchecked by user
 * @returns {object} - see variable `that`
 */
let DEBUG0 = false
let DEBUG1 = false
export default async function (
  string_original,
  string,
  tld,
  chunks_keys, // will be flattened into chunks_keys
  chunks_rows,
  options = {},
  tlds_user = [],
  tlds_unchecked = [],
  bing_alts = []
) {
  /*
   *
   * OUTPUT is referred to as
   * "this" (in other modules, ex: this.phrases.js), because other modules are all bound functions
   * "that" (in this module), because I don't want to add lots of code just to keep a variable name consistent
   *
   */
  let that = {
    /*
     * output - will be permanent response to user API
     */
    string_original: string_original,
    string: string,
    tld: tld, // user's choice tld
    tlds: [], // ext suggestions, number limited by user
    tlds_extra: [], // other ext suggestions which were not made into names
    domains_lists: { mix:[], com: [], name: [], tld: [] }, // object of lists of strings
    // ^- each key is the name of the collection, each value is an array of domain name strings (phrase + ' .' + tld)

    /*
     * output for development on FE
     */
    phrase_lists: {
      original: [] // work in progress dictionary of lists
    },
    phrases: [], // flat list, with unique strings, from phrase_lists
    word_hacks: [],
    phrase_hacks: [],
    syl_count: syllable_count(string_original),
    is_name: false,
    is_brand: false,
    is_tech: false,
    is_food: false,

    /*
     * temporary properties - (modified) input from user, not output
     */
    best_keys: [],
    domains_dict: {}, // key is domain name string, value is name of list which domain goes into
    chunks_dicts: {}, // row.dict aggregated from every chunk
    options: options, // refer to here as `options`, in child scripts as `this.options`
    tlds_user: tlds_user,
    tlds_unchecked: tlds_unchecked,
    tld_chunk: chunks_rows[tld] || {},
    chunks_keys: [],
    chunks_dict: chunks_rows,
    keys_words: chunks_keys[chunks_keys.length - 1] || [],
    string_nospaces: string.replace(/[^\w\d]+/g, ""),
    string_original_nospaces: string_original.replace(/[^\w\d]+/g, ""),
    bing_alts: bing_alts
  }
  if (that.string_nospaces === that.string_original_nospaces) {
    that.string_original = that.string
  }
  // chunks_keys = flattened chunks_keys,
  // but remove old keys before adding, so add new keys to the end
  for (let group of chunks_keys) {
    for (let word of group) {
      let iword = that.chunks_keys.indexOf(word)
      if (iword !== -1) {
        that.chunks_keys.splice(iword, 1)
      }
      that.chunks_keys.push(word)
    }
  }
  // add domain as if it was a word
  if (that.keys_words.length === 1 && that.tld.length >= 4 && that.tld_chunk.list_count > 25) {
    that.keys_words.push(that.tld)
  }
  // special case, relies on keys_words - use TLD as last word
  that.keys_words_and_tld = [...that.keys_words, that.tld]
  that.chunks_keys_and_tld = [...that.chunks_keys, that.tld]
  // fix tlds
  if (!tlds_user.includes(tld) && !tlds_unchecked.includes(tld)) {
    tlds_user.unshift(tld)
  }
  if (DEBUG1) cconsole.success("keys_words", that.keys_words)
  if (DEBUG1) cconsole.success("chunks_dict", Object.keys(that.chunks_dict))

  /*
   * aggregate chunks_dicts from each row.dict
   * also, give it a rating, as the i13 item in dict_info
   */
  that.word_ratings = {}
  that.chunks_dicts = {}
  for (let key in that.chunks_dict) {
    let row = that.chunks_dict[key]
    // is_name?
    if (row.name) {
      that.is_name = row.key
    }
    // is_food?
    if (row.food) {
      that.is_food = row.key
    }
    // is_tech?
    if (row.tech) {
      that.is_tech = row.key
    }
    // synonyms
    for (let pos in row.poss) {
      let list = row.poss[pos]
      let rating = 100
      for (let word of list) {
        rating -= 5
        rate_word.bind(that)(word, row.dict)
      }
    }
    // derivations
    rate_word.bind(that)(row.key, row.dict)
    rate_word.bind(that)(row.singular, row.dict)
    rate_word.bind(that)(row.plural, row.dict)
    rate_word.bind(that)(row.root, row.dict)
    rate_word.bind(that)(row.acronym, row.dict)
    if (row.abbreviation) {
      for (let word of row.abbreviation.split(",")) {
        rate_word.bind(that)(word.trim(), row.dict)
      }
    }
  }

  /*
   * is plural ?
   */
  that.key_first = that.keys_words[0]
  that.key_last = that.keys_words.length > 1 ? that.keys_words[that.keys_words.length - 1] : ""
  if (that.key_last) {
    that.key_last_plural = !!that.chunks_dict[that.key_last].singular
  }

  /*
   * is_name? is_brand? is_(iterrogat)ive?
   */
  let is_about = false
  // is brand name if could not get meaning for one of the words
  let length_diff = that.string_original_nospaces.length - that.string_nospaces.length
  if (length_diff >= 4) {
    that.is_brand = true
    if (DEBUG1) cconsole.error(`is_brand because length_diff >=4 (${length_diff})`)
    if (DEBUG1) cconsole.error(`that.string_original_nospaces="${that.string_original_nospaces}"`)
    if (DEBUG1) cconsole.error(`that.string_nospaces="${that.string_nospaces}"`)
  }
  // (or for all the words)
  if (that.keys_words.length === 1) {
    let row = that.chunks_dict[that.keys_words[0]]
    // detect that parsed row is not a real row from DB
    if (!row || !row.list_count || (!row.name && row.pos1 === "etc" && row.list_count < 10 && row.key.length >= 3)) {
      // not enough points, maybe brand name ? gibberish ?
      that.is_brand = that.string_original_nospaces
      if (DEBUG1) cconsole.error(`is_brand because !row for key="${that.keys_words[0]}"`)
    } else if (row.brand) {
      // brand
      that.is_brand = row.key
      if (DEBUG1) cconsole.error(`is_brand because row.brand key="${row.key}"`)
    } else {
      // phrase is interrogative
      if (
        row.pos1 === "ive" ||
        (row.pos1 === "adv" && row.aux) ||
        ((row.pos1 === "ver" || (row.pos1 === "etc" && row.pos2 === "ver")) && row.aux)
      ) {
        is_about = true
      }
      // word follows interrogative, and is noun/verb
      if (is_about) {
        if (row.pos1 === "nou" && !row.aux) {
          that.is_about_nou = row.key
        } else if (row.pos1 === "ver" && !row.mod && !row.aux && row.key.length >= 4) {
          that.is_about_ver = row.key
        }
      }
    }
    // not about anything
    if (!that.is_name && !is_about && row.list_count < 10) {
      that.is_brand = string
      if (DEBUG1) cconsole.error(`is_brand because one low list_count word "${that.is_brand}"`)
    }
  }
  if (DEBUG0 && that.is_name) cconsole.error("that.is_name", that.is_name)
  if (DEBUG0 && that.is_brand) cconsole.error("that.is_brand", that.is_brand)
  if (DEBUG0 && is_about) cconsole.error("is_about: nou, ver", that.is_about_nou, that.is_about_ver)

  /*
   *
   * Best 123
   *
   */
  let bphrases = []
  let bnouns = []
  let bverbs = []
  let badjvs = []
  for (let key of that.chunks_keys_and_tld) {
    let row = that.chunks_dict[key]
    if (row && row.list_count) {
      // if greater than 10 = if not stopword or nonsense
      if (row.list_count > 10 || (row.tlds && row.tlds[0].length)) {
        if (row.pos1 === "nou" || row.pos1 === "int") {
          if (key.split(" ").length >= 2) {
            // noun phrase
            bphrases.push(key)
          } else {
            // regular noun
            bnouns.push(key)
          }
        } else if (row.pos1 === "ver") {
          bverbs.push(key)
        } else if (row.pos1 === "adj" || row.pos1 === "adv") {
          badjvs.push(key)
        }
      }
    }
  }
  let best1 = bphrases.pop() || bnouns.pop() || bverbs.pop() || badjvs.pop()
  let best2 = bphrases.pop() || bnouns.pop() || bverbs.pop() || badjvs.pop()
  let best3 = bphrases.pop() || bnouns.pop() || bverbs.pop() || badjvs.pop()
  if (!best1) {
    let bestA = ["", 0]
    let bestB = ["", 0]
    for (let key of that.keys_words) {
      if (key.length < 3) continue
      let row = that.chunks_dict[key]
      if (key.length === 3 && row.list_count < 25) continue
      if (row.list_count > bestA[1]) {
        bestA = [row.key, row.list_count]
      } else if (row.list_count > bestB[1]) {
        bestB = [row.key, row.list_count]
      }
    }
    best1 = bestA[0]
    best2 = bestB[0]
  }
  if (best1) that.best_keys.push(best1)
  if (best2) that.best_keys.push(best2)
  if (best3) that.best_keys.push(best3)

  /*
   *
   * DEFAULT OPTIONS
   *
   */
  if (!options.length_vs_relevance) options.length_vs_relevance = 5
  if (!options.ext_suggestions_num) options.ext_suggestions_num = 30

  /*
   *
   * SYNONYM BASED
   *
   */
  /*
   * nlp
   */
  nlp.call(that)
  /*
   * tlds
   */
  await tlds.call(that)
  /*
   * phrase lists
   */
  phrase_lists.call(that)
  /*
   * combine ${phrase_lists} into flat ${phrases}
   */
  phrases.call(that)

  /*
   *
   * HACKS
   *
   */
  if (options.use_word_hacks !== false) {
    word_hacks.call(that)
  }
  if (options.use_phrase_hacks !== false) {
    phrase_hacks.call(that)
  }

  /*
   *
   * DOMAINS
   *
   */
  domains_dict.call(that)
  domains_lists.call(that)
  domains_mix.call(that)

  /*
   *
   * Output
   *
   */
  delete that.domains_dict
  return that
}
