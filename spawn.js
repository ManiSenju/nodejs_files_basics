const cp = require("child_process")

const questionsApp = cp.spawn("node", ['readLine.js'])

questionsApp.stdin.write("Mani \n")
questionsApp.stdin.write("Skiing \n")
questionsApp.stdin.write("Change the world \n")

questionsApp.stdout.on("data",(data) => {
    console.log(`from questions app, ${data}`)
})

questionsApp.on("close", () => {
    console.log("questionsApp process exited")
})