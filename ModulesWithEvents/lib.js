const readline = require("readline")
const { EventEmitter } = require("events")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const emitter = new EventEmitter()

module.exports = (questions,done) => {
    const answers = []
    const questionAnswered = ans => {
        answers.push(ans.trim())
        emitter.emit("answer", ans.trim())
        if (answers.length < questions.length) {
            rl.question(questions[answers.length],questionAnswered)
        }else{
            done(answers)
        }
    }
    rl.question(questions[0],questionAnswered)
    return emitter
}
