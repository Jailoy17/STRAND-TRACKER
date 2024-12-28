let timeleft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementaryById("display-container");
let scoreContainer = document.querySelector("score-container");
let restart = document.getElementaryById("restart");
let userScore = document.getElementaryById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementaryById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

// 60 questions with options and answer array

const quizArray = [
    {
        id: "",
            question: "What is the meaning of ABM?",
            options: [
                "a. Accounting and Business Mechanics",
                "b. Access and Business Management",
                "c. Accounting and Business Management",
                "d. Accounting and Buyer Mechanics",
            ],
            correct: "c. Accounting and Business Management",
    },
    {
        id: "",
            question: "",
            options: [
                "",
                "",
                "",
                "",
            ],
            correct: "",
    },
    {
        id: "",
            question: "",
            options: [
                "",
                "",
                "",
                "",
            ],
            correct: "",
    },
    {
        id: "",
            question: "",
            options: [
                "",
                "",
                "",
                "",
            ],
            correct: "",
    },
    {
        id: "",
            question: "",
            options: [
                "",
                "",
                "",
                "",
            ],
            correct: "",
    }, {
        id: "",
            question: "",
            options: [
                "",
                "",
                "",
                "",
            ],
            correct: "",
    }, {
        id: "",
            question: "",
            options: [
                "",
                "",
                "",
                "",
            ],
            correct: "",
    },
];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = () =>{ 
    questionCount += 1;

    if(questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your Score is " + scoreCount + " out of " + questionCount;
    } 
    else{
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";
        
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
        }
    })
);

const timerDisplay = () =>{
    countdown = setInterval(() =>{
        count--;
        timeLeft.innerHTML = `${count}s`;
        if(count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater(){
    quizArray.sort(() => Math.random() - 0.5);

    for(let i of quizArray){
        i.options.sort(()=> Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 +" of " + quizArray.length + " Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(qeustion_DIV);

        div.innerHTML +=`
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;

        quizContainer.appendChild(div);
    }
}

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        userOption.classList.add("incorrect");

        options.forEach((element) =>{
            if(element.innerText = quizArray[questionCount].correct){
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count= 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classlist.remove("hide");
    initial();
});

window.onload = () =>{
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
