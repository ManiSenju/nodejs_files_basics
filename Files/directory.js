const fs = require("fs")

if (fs.existsSync('sample-directory')) {
    console.log("directory already there!")
} else {
    fs.mkdir('sample-directory', function(err) {
        if (err) {
            console.log(`Error is : ${err}`)
        } else {
            console.log("directory created!! Ta-Da")
        }
    })
}
fs.rmdirSync('./accounts')