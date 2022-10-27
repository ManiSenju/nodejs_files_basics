const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = ["What is your Name?", "Where do you live?", "What will you do with nodejs?"]

function answerQuestions(questions,done){
    const answers = []
    const questionAnswered = ans => {
        answers.push(ans.trim())
        if (answers.length < questions.length) {
            rl.question(questions[answers.length],questionAnswered)
        }else{
            done(answers)
        }
    }
    rl.question(questions[0],questionAnswered)
}

answerQuestions(questions, answers => {
    console.log("Thank you for all the answers")
    console.log(answers)
    process.exit()
})