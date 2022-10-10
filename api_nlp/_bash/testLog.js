import "dotenv-flow/config"
import "../common/global.js"

global.cconsole.warn("2 test log message attempt from _startup/testLog")

setTimeout(process.exit, 500)
