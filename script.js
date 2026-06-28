const questions = [
    {
        question: "What is the capital of USA?",
        choices: ["st.louis", "Washington DC", "Newyork City", "Seattle"],
        indexAnswer: 1
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Lyon", "Nice"],
        indexAnswer: 0
    },
    {
        question: "What is the capital of India?",
        choices: ["New Delhi", "Hyderabad", "Mumbai", "Pune"],
        indexAnswer: 0
    },
    {
        question: "What is the capital of Canada?",
        choices: ["Quebec city", "Toronto", "Ottawa", "Vancouver"],
        indexAnswer: 2
    }
];

if (typeof document === "undefined") {
    console.error("This quiz app must be opened in a browser via index.html. Do not run script.js directly with Node.");
} else {
    // Getting DOM elements
    const questionText = document.getElementById("question");
    const answerbtns = [
        document.getElementById("answer0"),
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3")
    ];
    const feedback = document.getElementById("feedback");
    const nextQuestion = document.getElementById("next-question");
    const quizContainer = document.getElementById("quiz-container");
    const quizCompleted = document.getElementById("quiz-completed");

    let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        quizContainer.style.display = "none";
        quizCompleted.style.display = "block";
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    for (let i = 0; i < answerbtns.length; i++) {
        answerbtns[i].textContent = currentQuestion.choices[i];
        answerbtns[i].disabled = false;
    }

    feedback.textContent = "";
    nextQuestion.style.display = "none";
}

for (let i = 0; i < answerbtns.length; i++) {
    answerbtns[i].addEventListener("click", () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (i === currentQuestion.indexAnswer) {
            feedback.textContent = "Correct";
        } else {
            feedback.textContent = "Try again";
        }
        for (const btn of answerbtns) {
            btn.disabled = true;
        }
        nextQuestion.style.display = "block";
    });
}

nextQuestion.addEventListener("click", () => {
    currentQuestionIndex++;
    displayQuestion();
});
displayQuestion();
}

