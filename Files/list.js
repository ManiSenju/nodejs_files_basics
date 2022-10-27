const fs = require("fs");

//read file names

let files = fs.readdirSync('./')
console.log(`file names: ${files}`)

fs.readdir('./',(err,files) => {
    if (err) {
        throw err
    }
    console.log(`file names: ${files}`)
})
console.log("reading file names: ")


// read file content

let data = fs.readFileSync("./notes.json")
console.log(data.toString())

fs.readFile("./notes.json", (err,data) => {
    console.log(data.toString())
})