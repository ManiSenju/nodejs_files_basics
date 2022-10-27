const fs = require("fs")

let answerStream

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language"
  ];
  const answers = [];
  
  function ask(i=0){
   process.stdout.write(`\n\n ${questions[i]}`)
   process.stdout.write(`\n >> `)
  }
  
  ask(answers.length)

  process.stdin.once("data", data => {
    let name = data.toString().trim()
    let fileName = `./${name}.md`
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName)
    }
    answerStream = fs.createWriteStream(fileName)
    answerStream.write(`Question Answers for ${name} \n =========== \n`)
  })
  
  process.stdin.on("data", function(data){
    let ans = data.toString().trim()
    answerStream.write(` Question: ${questions[answers.length]}\n`)
    answerStream.write(`Answer: ${ans}\n`, function(){
        if (answers.length < questions.length) {
            ask(answers.length)
        }else{
            process.exit()
        }
    })
    answers.push(ans)
  })
  
  process.on("exit",function(){
    answerStream.close()
    process.stdout.write("\n\n\n\n");
    process.stdout.write(
      `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
    );
  })

  