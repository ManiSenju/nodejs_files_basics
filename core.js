const path = require("path")
const util = require("util")
const v8 = require("v8")

console.log(`file name is ${path.basename(__filename)}`)
console.log(path.join(__dirname,"www","uploads"))

util.log(path.basename(__filename))
util.log(v8.getHeapStatistics())
