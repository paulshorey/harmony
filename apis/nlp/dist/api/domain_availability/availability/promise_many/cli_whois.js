import cli_whois from "@ps/nlp/api/domain_availability/availability/promise_one/cli_whois";
// import { sleep } from "@ps/fn/io/promises"
// import import_localstorage from "node-localstorage"
// let { LocalStorage } = import_localstorage
// let localStorage = new LocalStorage("tmp/localStorage-whoisUndefined")
/**
 * CHECK DOMAIN AVAILABILITY @ whois
 * @param {array} doms_arr - list of domains to check
 *      key = domain name string, value = status code of availability
 * @returns {object} - key/value dict of {domain:status,}
 */
const DEBUG1 = false;
export default async function (doms_arr, { DEBUG_TIME = false } = {}) {
    // debug time
    let time_start = Date.now();
    let time_debug = function (message = "") {
        if (DEBUG_TIME) {
            console.log("DEBUG_TIME (cli_whois) MANY (" + doms_arr.length + ")", ((Date.now() - time_start) / 1000).toFixed(3), message);
        }
    };
    // start
    let doms_dict = {};
    let doms_dummy = {};
    // requests
    let requests = [];
    for (let domname of doms_arr) {
        doms_dummy[domname] = undefined;
        // queue API request
        requests.push(cli_whois(domname));
    }
    // send API requests
    let responses_arr = await Promise.all(requests);
    for (let obj of responses_arr) {
        for (let dom in obj) {
            let tuple = obj[dom];
            if (tuple) {
                doms_dict[dom] = tuple;
            }
            else {
                doms_dict[dom] = -1;
            }
        }
    }
    // debug
    if (DEBUG1) {
        global.ccconsole.info("availability_whois", doms_dict);
    }
    //
    // await sleep(300)
    // return same format as was input
    time_debug(Object.keys(doms_dict).length);
    return doms_dict;
}
