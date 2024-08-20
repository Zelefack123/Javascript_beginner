const questions = [
    {
       question:"Which is the largest animal in the world",
       answers: [
        {text: "rat", correct: false},
        {text: "shark", correct: true},
        {text: "dog", correct: false},
        {text: "pig", correct: false},

       ]
    },

    {
        question:"Which is the smallest continent in the World",
        answers: [
         {text: "Australia", correct: true},
         {text: "Africa", correct: false},
         {text: "south America", correct: false},
         {text: "Europe", correct: false},
 
        ]
     },


     {
        question:"Which is the capital of Cameroon",
        answers: [
         {text: "Douala", correct: false},
         {text: "Buea", correct: false},
         {text: "Limbe", correct: false},
         {text: "Yaounde", correct: true},
 
        ]
     },
     {
        question:"Which is the oldest man to have lived",
        answers: [
         {text: "Metuselah", correct: true},
         {text: "Peter", correct: false},
         {text: "john", correct: false},
         {text: "Ezekiel", correct: false},
 
        ]
     },

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
let currentQuestionindex = 0;
let score = 0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function  showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionElement.innerHTML = questionNo + "."  + currentQuestion.question;
    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer);
    });}
    function resetState(){
        nextButton.style.display = "none";
        while (answerButton.lastChild){
     answerButton.removeChild(answerButton.lastChild);
        
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }

else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
  
    }
    button.disabled = true;
})

nextButton.style.display = "block";



}
startQuiz();
function handleNextButton(){
    currentQuestionindex++;
    if (currentQuestionindex < questions.length){
        showQuestion();
    }
        else {
            showScore();
    }
    
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=> {
if(currentQuestionindex < questions.length){
   handleNextButton();
}

else{
    startQuiz();
}
})

showTask();
