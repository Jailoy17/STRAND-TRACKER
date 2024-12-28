const quizData = [
    {
        question: "What is the meaning of ABM?",
        a: "Accounting and Business Mechanics",
        b: "Access and Business Management",
        c: "Accounting and Business Management",
        d: "Accounting and Buyer Mechanics",
        correct: "c",
    },
    {
        question: "This is obtaining a financial advantage or benefit, especially from an investment.",
        a: "a. Profit",
        b: "b. Entrepreneurship",
        c: "c. Capital",
        d: "d. Buyer",
        correct: "b",
    },
    {
        question: "It is a broad term for anything that gives its owner value or advantage.",
        a: "a. Buyer",
        b: "b. Loan",
        c: "c. Profit",
        d: "d. Capital",
        correct: "d",
    },
    {
        question: "What are the entrepreneurial skills, except:",
        a: "a. Impulsive skills",
        b: "b. Cognitive skills",
        c: "c. Technical skills",
        d: "d. Interpersonal skills",
        correct: "d",
    },
    {
        question: "It is the practice of any activity or enterprise entered into for profit.",
        a: "a. Accounting",
        b: "b. Business",
        c: "c. Entrepreneur",
        d: "",
        correct: "",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
    },
    
];

const quiz = document.getElementById(`quiz`)
const answerEls = document.querySelectorAll(`.answer`)
const questionEl = document.getElementById(`question`)
const a_text = document.getElementById(`a_text`)
const b_text = document.getElementById(`b_text`)
const c_text = document.getElementById(`c_text`)
const d_text = document.getElementById(`d_text`)
const submitBtn = document.getElementById(`submit`)

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innertext = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answerEls
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHtml = `
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>
            `
        }
    }
})