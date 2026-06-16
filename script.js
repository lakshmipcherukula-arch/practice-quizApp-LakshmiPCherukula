const questions = [
    {
        question:"What is the capital of USA?",
        choices:["st.louis","Washington DC","Newyork City","Seattle"],
        indexAnswer:1
    },
    {
        question:"What is the capital of France?",
        choices:["Paris","London","Lyon","Nice"],
        indexAnswer:0
    },
    {
        question:"What is the capital of India?",
        choices:["New Delhi","Hyderabad","Mumbai","Pune"],
        indexAnswer:0
    },
    {
        question:"What is the capital of Canada?",
        choices:["Quebec city","Toronto","Ottawa","Vancouer"],
        indexAnswer:2
    }
];
//Getting DOM elements
const questionText = document.getElementById("question");
const answerbtns = [document.getElementById("answer0"),
                    document.getElementById("answer1"),
                    document.getElementById("answer2"),
                    document.getElementById("answer3")];
const feedback = document.getElementById("feedback");
const nextQuestion = document.getElementById("next-question");
//display questions
let currentQuestionIndex = 0;
function displayQuestion(){
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent=currentQuestion.question;
    for(let i=0;i<answerbtns.length;i++){
        answerbtns[i].textContent = currentQuestion.choices[i];
        answerbtns[i].disabled = false;
    }
    feedback.textContent = "";
}
for(let i=0;i<answerbtns.length;i++){
    answerbtns[i].addEventListener("click",() => {
        if(answerbtn(i)=questions.indexAnswer){
            feedback.textContent="correct";
        }feedback.textContent = "Try again";

    })
}
nextQuestion.style.display="block";
nextQuestion.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        currentQuestionIndex++;
        displayQuestion(); 
    }feedback.textContent = "Thank You for Partcipating";
})
nextQuestion.style.display="none";

