/*
 * IMPORTS
 */
// import { aggregate_req_body_query } from "@twodashes/universal/esm/req"
import spellcheck from "api/lib/spellcheck"
import wordbreak from "api/lib/wordbreak"
import spellcheck_wordbreak from "api/lib/spellcheck-wordbreak"
import spellcheck_wordbreak_wordchunk from "api/lib/spellcheck-wordbreak-wordchunk"
import wordchunk_tokenize from "api/lib/wordchunk-tokenize"

/*
 * API
 */
export default function ({ expressApp, http_response, req_authenticate, req_error }) {
  {
    let req_method = "get"
    let req_endpoint = "/v1/spellcheck"
    expressApp[req_method](req_endpoint, async function (req, res) {
      try {
        let time_start = Date.now()
        await req_authenticate({ req, req_method, req_endpoint, query: req.query })

        let output = await spellcheck(req.query.str)

        http_response(res, 200, output, { time: Date.now() - time_start })
      } catch (err) {
        req_error({ err, req, res, req_method, req_endpoint })
      }
    })
  }
  {
    let req_method = "get"
    let req_endpoint = "/v1/wordbreak"
    expressApp[req_method](req_endpoint, async function (req, res) {
      try {
        let time_start = Date.now()
        await req_authenticate({ req, req_method, req_endpoint, query: req.query })

        let output = await wordbreak(req.query.str)

        http_response(res, 200, output, { time: Date.now() - time_start })
      } catch (err) {
        req_error({ err, req, res, req_method, req_endpoint })
      }
    })
  }
  {
    let req_method = "get"
    let req_endpoint = "/v1/spellcheck-wordbreak"
    expressApp[req_method](req_endpoint, async function (req, res) {
      try {
        let time_start = Date.now()
        let output_arr = await spellcheck_wordbreak(req.query.str)
        http_response(res, 200, output_arr, { time: Date.now() - time_start })
      } catch (err) {
        req_error({ err, req, res, req_method, req_endpoint })
      }
    })
  }
  {
    let req_method = "get"
    let req_endpoint = "/v1/spellcheck-wordbreak-wordchunk"
    expressApp[req_method](req_endpoint, async function (req, res) {
      try {
        let time_start = Date.now()
        let output = await spellcheck_wordbreak_wordchunk(req.query.str)
        http_response(res, 200, output, { time: Date.now() - time_start })
      } catch (err) {
        req_error({ err, req, res, req_method, req_endpoint })
      }
    })
  }
  {
    let req_method = "get"
    let req_endpoint = "/v1/wordbreak-wordchunk"
    expressApp[req_method](req_endpoint, async function (req, res) {
      try {
        let time_start = Date.now()
        let output = await spellcheck_wordbreak_wordchunk(req.query.str, {spellcheck:false})
        http_response(res, 200, output, { time: Date.now() - time_start })
      } catch (err) {
        req_error({ err, req, res, req_method, req_endpoint })
      }
    })
  }
  {
    let req_method = "get"
    let req_endpoint = "/v1/tokenize"
    expressApp[req_method](req_endpoint, async function (req, res) {
      try {
        let time_start = Date.now()
        let output = await spellcheck_wordbreak_wordchunk(req.query.str, {spellcheck:false})
        output = await wordchunk_tokenize(output)
        http_response(res, 200, output, { time: Date.now() - time_start })
      } catch (err) {
        req_error({ err, req, res, req_method, req_endpoint })
      }
    })
  }
  {
    let req_method = "get"
    let req_endpoint = "/v1/spellcheck-tokenize"
    expressApp[req_method](req_endpoint, async function (req, res) {
      try {
        let time_start = Date.now()
        let output = await spellcheck_wordbreak_wordchunk(req.query.str)
        output = await wordchunk_tokenize(output)
        http_response(res, 200, output, { time: Date.now() - time_start })
      } catch (err) {
        req_error({ err, req, res, req_method, req_endpoint })
      }
    })
  }
}
