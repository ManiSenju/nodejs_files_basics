const answerQuestions = require('./lib')

const questions = ["What is your Name?", "Where do you live?", "What will you do with nodejs?"]

const ansEmitter = answerQuestions(questions, answers => {
    console.log("Thank you for all the answers")
    console.log(answers)
    process.exit()
})
ansEmitter.on("answer", (ans) => {
    console.log(`the answer is ${ans}`)
})