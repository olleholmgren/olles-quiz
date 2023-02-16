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

function startQuiz() {

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
]


/**
 * Question and Answer Area
 */
let cityQuestionArea = document.getElementById("cityQuestion");

/** Answer alternatives */
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")


/**
 * Quiz loop 
 */
function Quiz() {
    console.log("Score: ", score)
    cityQuestionArea.innerText = cityQuestion[questionNumber].q;
    /** Answer alternatives text */
    answer1.innerText = cityQuestion[questionNumber].a[0];
    answer2.innerText = cityQuestion[questionNumber].a[1];
    answer3.innerText = cityQuestion[questionNumber].a[2];
    answer4.innerText = cityQuestion[questionNumber].a[3];
    /**  */
        
}

/**
 * Answer and score loop
 */
function playerAnswer(number) {
    if (number === cityQuestion[questionNumber].correct) {
        // Correct answer will increase score and go to next question
        score = score + 1;
        score = parseInt(document.getElementById("liveScore").innerText);
        document.getElementById("liveScore").innerText= ++score;
        questionNumber = questionNumber + 1;
        
        
        Quiz()
    } else {
        // Wrong answer will go to next question without increasing score
        questionNumber = questionNumber + 1;
        Quiz()
    }

}

function finishQuiz() {

}

function organiseGame() {
    if (play) {
    numberOfQuestions = cityQuestion.length
    Quiz()
}
}
organiseGame();