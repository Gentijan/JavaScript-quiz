const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
// Start-Questions
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
        question:
            "How many teams are there in Champions League",
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
        question: "Which team won the cup first",
        choice1: "Celtic",
        choice2: "Nottingham forest",
        choice3: "Real Madrid CF",
        choice4: "AC Milan",
        answer: 3,
    },
    {
        question: "Which Maneger has won it most times",
        choice1: "Pep Guardiola",
        choice2: "Arsene Wenger",
        choice3: "Zinedine Zidane",
        choice4: "Carlo Ancelotti",
        answer: 4,
    },
    {
        question: "How many teams are there in each group",
        choice1: "3",
        choice2: "4",
        choice3: "5",
        choice4: "6",
        answer: 2,
    },
    {
        question: "Which player has the most assist",
        choice1: "Leo Messi",
        choice2: "Di Maria",
        choice3: "Neymar",
        choice4: "Cristiano Ronaldo",
        answer: 4,
    },
    {
        question: "Which team has the biggest loss",
        choice1: "Basel",
        choice2: "Genk",
        choice3: "Malmö",
        choice4: "Marseille",
        answer: 3,
    },
    {
        question: "Which player has most UCL",
        choice1: "Cristiano Ronaldo",
        choice2: "Sergio Ramos",
        choice3: "Zinedine Zidane",
        choice4: "Paco Gento",
        answer: 4,
    }
    
]
// End-Questions

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

