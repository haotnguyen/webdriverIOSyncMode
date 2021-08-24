//Merge parent config file and add new changes in UAT config file (new browser, new test suites, new connection timeout, new Base URL)
var merge = require("deepmerge")
var wdioConf = require("./wdio.conf")

exports.config = merge(wdioConf.config, {
    waitforTimeout: 10000,
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
        grep: "UAT"
    },
})