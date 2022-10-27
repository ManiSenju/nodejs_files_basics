const fs = require("fs")

let stream = fs.createReadStream('./testlog.txt','UTF-8');

// stream.once("data",chunk => {
//     console.log("read stream started")
//     console.log("===============================")
//     console.log(chunk)
// })

let data = ''

stream.on("data", chunk => {
    console.log(` chunk length: ${chunk.length}`)
    data += chunk
    console.log(chunk)
})

stream.on("end", _ => {
    console.log(` reading finished: ${data.length}`)
    //console.log(data)
})