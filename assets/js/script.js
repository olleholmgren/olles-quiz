/**
 * Game variables
 */
let city = "";
let questionNumber = 0;
let score = 0;
let number = 0;
let play = true;
let numberOfQuestions = 0;
let highScore = 0;

const cityQuestionArea = document.getElementById("cityQuestion");
const answer1 = document.getElementById("answer1")
const answer2 = document.getElementById("answer2")
const answer3 = document.getElementById("answer3")
const answer4 = document.getElementById("answer4")

const quizDiv = document.querySelector(".quizDiv")
const goAgain = document.querySelector(".goAgain")
const wipeArea = document.querySelector(".intro")

const scoreElement = document.getElementById("liveScore") 
const finishText = document.getElementById("finishText")






function startQuiz() {
    quizDiv.style.visibility = "visible";
    wipeArea.style.visibility = "hidden";
}

/**
 * Questions for the quiz
 */
let cityQuestion = [
    {
        id: 0,
        q: "Madrid",
        a: ["Belgium", "Sweden", "Spain", "Greece"],
        correct: 2
    },
    {
        id: 1,
        q: "Sofia",
        a: ["Bulgaria", "Bosnia and Herzegovina", "Germany", "Iceland"],
        correct: 0
    },
    {
        id: 2,
        q: "Copenhagen",
        a: ["Italy", "Ukraine", "Denmark", "Croatia"],
        correct:  2
    },
    {   id: 3,
        q: "Vienna",
        a: ["Poland", "Netherlands", "Switzerland", "Austria"],
        correct: 3
    },
    {   id: 4,
        q: "Amsterdam",
        a: ["Wales", "Belgium", "Portugal", "Netherlands"],
        correct: 3
    },
    {   id: 5,
        q: "Stockholm",
        a: ["Wales", "Sweden", "Portugal", "Netherlands"],
        correct: 1
    },
    {   id: 6,
        q: "Berlin",
        a: ["Germany", "Belgium", "Portugal", "Netherlands"],
        correct: 0
    },
    {   id: 7,
        q: "Minsk",
        a: ["Wales", "Belgium", "Portugal", "Belarus"],
        correct: 3
    },
    {   id: 8,
        q: "Athens",
        a: ["Wales", "Belgium", "Greece", "Netherlands"],
        correct: 2
    },
    {   id: 9,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 10,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 11,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 12,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 13,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 14,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 15,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 16,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 17,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 18,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },
    {   id: 19,
        q: "Skopje",
        a: ["Wales", "Belgium", "Portugal", "North Macedonia"],
        correct: 3
    },


/**
 * Quiz loop 
 */
function Quiz() {
    cityQuestionArea.innerText = cityQuestion[questionNumber].q;
    answer1.innerText = cityQuestion[questionNumber].a[0];
    answer2.innerText = cityQuestion[questionNumber].a[1];
    answer3.innerText = cityQuestion[questionNumber].a[2];
    answer4.innerText = cityQuestion[questionNumber].a[3];
        
}

/**
 * Answer and score loop
 */
function playerAnswer(number) {
    if (number === cityQuestion[questionNumber].correct) {
        score = score + 1;
        scoreElement.innerText = score;
    }
    if (questionNumber === (numberOfQuestions - 1)) {
        finishQuiz();
    } else {
        questionNumber = questionNumber + 1;
        Quiz()
    }
}

function finishQuiz() {
    if (highScore < score) {
        highScore = score;
    }
    quizDiv.style.visibility = "hidden";
    finishText.innerText = `You have finished the Quiz. Your score is ${score} out of ${numberOfQuestions}. Your high score is ${highScore}. Go again?`;
    goAgain.style.visibility = "visible"
}

function refreshPage() {
    city = "";
    questionNumber = 0;
    score = 0;
    number = 0;
    play = true;
    numberOfQuestions = 0;
    quizDiv.style.visibility = "visible"
    goAgain.style.visibility = "hidden"
    scoreElement.innerText = score;
    organiseGame();
}

function organiseGame() {
    if (play) {
    numberOfQuestions = cityQuestion.length
    Quiz()
 }
}

organiseGame();