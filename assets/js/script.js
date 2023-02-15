function startPage() {
    alert("Welcome to this quiz")
}
startPage()


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
]

/**
 * Game variables
 */
let city = "";
let questionNumber = 0;
let score = 0;
let number = 0;

/**
 * Question and Answer Area
 */
let cityQuestionArea = document.getElementById("cityQuestion");
cityQuestionArea.innerText = cityQuestion[questionNumber].q;
/** Answer alternatives */
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")


/**
 * Game loop 
 */
function Quiz() {

    /** Answer alternatives text */
    answer1.innerText = cityQuestion[questionNumber].a[0];
    answer2.innerText = cityQuestion[questionNumber].a[1];
    answer3.innerText = cityQuestion[questionNumber].a[2];
    answer4.innerText = cityQuestion[questionNumber].a[3];
    /**  */
        
}

function playerAnswer(number) {
    if (number === cityQuestion[questionNumber].correct) {
        score = score + 1;
        questionNumber = questionNumber + 1;
        console.log(score, questionNumber)
    }

}

const play = true;

if (play) {
    Quiz()
}
