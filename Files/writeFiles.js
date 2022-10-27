const fs = require("fs");

let md = 'Paragraphs are separated by a blank line'
fs.writeFile('test.md', md, function(err) {
    if (err) {
        throw err
    }
    fs.appendFileSync('test.md', '\n\n ### NodeJs')
    console.log("done")
})