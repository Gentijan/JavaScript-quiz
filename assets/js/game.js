const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.select-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which player holds the record for the most final goals scored in the Champions League era?',
        choice1: 'Lionel Messi',
        choice2: 'Cristiano Ronaldo',
        choice3: 'Gareth Bale',
        choice4: 'Karim Benzema',
        answer: 2,
    },
    {
        question: "How many teams are there in Champions League",
        choice1: "32",
        choice2: "24",
        choice3: "28",
        choice4: "36",
        answer: 1,
    },
    {
        question: "Which team has won the cup most times",
        choice1: "Ac Milan",
        choice2: "FC Barcelona",
        choice3: "Manchester United",
        choice4: "Real Madrid CF",
        answer: 4,
    },
    {
        question: "Which year did Champions League start",
        choice1: "1950",
        choice2: "1955",
        choice3: "1958",
        choice4: "1961",
        answer: 2,
    },
    {
        question: "Which player has the most assist",
        choice1: "Cristiano Ronaldo",
        choice2: "Leo Messi",
        choice3: "Andre Pirlo",
        choice4: "Luka Modric",
        answer: 1,
    },
    {
        question: "Which manager has won it the most",
        choice1: "Zidane",
        choice2: "Ancelotti",
        choice3: "Mourinho",
        choice4: "Guardiola",
        answer: 2,
    },
    {
        question: "Who had the biggest win in the history of the cup",
        choice1: "Real Madrid",
        choice2: "Barcelona",
        choice3: "Bayern Munich",
        choice4: "Liverpool",
        answer: 3,
    },
    {
        question: "Who had the biggest lose in the history of the cup",
        choice1: "Crusaders",
        choice2: "Red Star",
        choice3: "Poak",
        choice4: "Dinamo Kiev",
        answer: 1,
    },
    {
        question: "Which team won it last year",
        choice1: "Real Madrid",
        choice2: "Manchest City",
        choice3: "Bayern Munich",
        choice4: "PSG",
        answer: 1,
    },
    {
        question: "How many UCL finals has Real Madrid lost",
        choice1: "5",
        choice2: "2",
        choice3: "7",
        choice4: "3",
        answer: 4,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(questionCounter > MAX_QUESTIONS || availableQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
    questionCounter += 1
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(acceptingAnswers === false) 
        
        return acceptingAnswers = false

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = checkResult(selectedAnswer) 

        if(classToApply === 'correct') {
            increasScore()
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

function checkResult(selectedAnswer) {
    if(selectedAnswer == currentQuestion.answer) {
        return 'correct' 
    }
    return 'incorrect'
}


function increasScore() {
    score += SCORE_POINTS
    scoreText.innerText = score
}
startGame()