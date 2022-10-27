const fs = require("fs")
// rename for both files and directories
fs.renameSync('./config.js', './renamedConfig.js')

fs.rename('./config.js', './renamedConfig.js', err => {
    if (err) {
        throw err
    } else {
        console.log("renamed")
    }
})

fs.renameSync('./test/reconfig.js', './reconfig.js')

fs.unlinkSync('./renamedConfig.js')
fs.unlink('./reconfig.js', err => {
    if (err) {
        console.log(err)
    } else {
        console.log("file removed")
    }
})