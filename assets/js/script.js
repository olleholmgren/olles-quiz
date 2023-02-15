function startPage() {
    alert("Welcome to this quiz")
}
startPage()


/**
 * Questions for the quiz
 */
city-question = [{
    city: 0,
q: "Madrid",
a: [{ text: "Belgium", isCorrect: false },
    { text: "Sweden", isCorrect: false },
    { text: "Spain", isCorrect: true },
    { text: "Greece", isCorrect: false }
]
    city: 1,
q: "Sofia"
a: [{ text: "Bulgaria", isCorrect: true },
    { text: "Bosnia and Herzegovina", isCorrect: false },
    { text: "Germany", isCorrect: false },
    { text: "Iceland", isCorrect: false }
]
}
]

let city = "";

/**
 * Game loop 
 */
function startQuiz(city-question) {
    /** Question */
    let question = document.getElementById("city-question");
    city-question.innerText = city-question["city"].q;
    /** Answer alternatives */
    let answer1 = document.getElementById("answer1")
    let answer2 = document.getElementById("answer2")
    let answer3 = document.getElementById("answer3")
    let answer4 = document.getElementById("answer4")
    /** Answer alternatives text */
    answer1.innerText = city-question["city"].a[0].text;

        
}

startQuiz()
