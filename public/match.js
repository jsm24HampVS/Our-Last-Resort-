const questions = [
    {
        question: "What sounds like your ideal Friday night?",
        answers: [
            "Staying home",
            "Going to a party",
            "Seeing live music",
            "Working late"
        ]
    },

    {
        question: "Which music would you rather listen to?",
        answers: [
            "Hip-hop",
            "Rock",
            "Country",
            "Classical"
        ]
    },

    {
        question: "When do you have the most energy?",
        answers: [
            "Early morning",
            "Afternoon",
            "Late at night",
            "It changes every day"
        ]
    },

    {
        question: "Which matters most to you?",
        answers: [
            "Adventure",
            "Stability",
            "Creativity",
            "Success"
        ]
    },

    {
        question: "How would your friends describe you?",
        answers: [
            "Quiet",
            "Outgoing",
            "Organized",
            "Unpredictable"
        ]
    }
];

let currentQuestion = 0;
let userAnswers = [];

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

function showQuestion() {
    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = current.question;

    answerButtons.innerHTML = "";

    current.answers.forEach(function (answer) {
        const button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer-button");

        button.addEventListener("click", function () {
            selectAnswer(answer);
        });

        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    userAnswers.push(answer);
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
       window.location.href = "/loading";
    }
}

showQuestion();