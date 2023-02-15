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

/**
 * Question and Answer Area
 */
let cityQuestionArea = document.getElementById("cityQuestion");
cityQuestionArea.innerText = cityQuestion[questionNumber].q;



/**
 * Game loop 
 */
function Quiz() {

    /** Answer alternatives */
    let answer1 = document.getElementById("answer1")
    let answer2 = document.getElementById("answer2")
    let answer3 = document.getElementById("answer3")
    let answer4 = document.getElementById("answer4")
    /** Answer alternatives text */
    answer1.innerText = cityQuestion[id].a[0].text;
    answer2.innerText = cityQuestion[id].a[1].text;
    answer3.innerText = cityQuestion[id].a[2].text;
    answer4.innerText = cityQuestion[id].a[3].text;
    /**  */
        
}

const play = true;

if (play) {
    Quiz()
}
