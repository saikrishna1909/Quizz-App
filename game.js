/*console.log("Hello world from the game"); */

const question = document.getElementById('question');

const choices = Array.from(document.getElementsByClassName('choice-text'));

const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
let progressBarFull = document.getElementById('progress-bar-full');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = []; // an array of questions to be fected from the "json" file

// fetching the json data 

// Here "res" and " loadedQuestions" are promises to be made

fetch("https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple")
// fetch("questions.json")
  .then(res =>{
    console.log(res); // printing out the promise
    return res.json();
  }).then(loadedQuestions =>{
    console.log(loadedQuestions.results);

    questions = loadedQuestions.results.map(loadedQuestion =>{
        const formattedQuestion = {
            question : loadedQuestion.question
        };

        const answerChoices = [...loadedQuestion.incorrect_answers]
        formattedQuestion.answer = Math.floor(Math.random()*3)+1;
        answerChoices.splice(formattedQuestion.answer-1, 0, loadedQuestion.correct_answer);
        
        answerChoices.forEach((choice, index)   =>{ 
            formattedQuestion["choice" +(index+1)] = choice;
        })

        return formattedQuestion;
;    });

    //questions = loadedQuestions;  // loadedQuestions from the "Json" file 

    
    startGame();  // After getting each question calling the function to get another question
  }) 
  
 // Error in fecthing the data from the json in using the promise case
  .catch(err =>{
    console.error(err);
  })

//Constants

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;


startGame = () =>{
    questionCounter= 0;
    score = 0;
    availableQuestions = [...questions]; // representing the array of questions in the format of the [...questions]
    console.log(availableQuestions);
    getNewQuestion();  // Calling this function makes a new question to appear on the screen
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

getNewQuestion = () =>{
  
    // checking the number of questions are reached at maximum questions and moving to the "end" page
    if(availableQuestions.length ===0  || questionCounter>= MAX_QUESTIONS){

        // Storing the localstorage of the application of the "score" item
        localStorage.setItem('mostRecentScore',score);

        // go to last page
        // return window.location.assign("end.html");
        window.location.assign(`${window.location.origin}/end.html`);

    }
    questionCounter++;
    // questionCounterText.innerText = questionCounter + "/"+ MAX_QUESTIONS;
    // We can also use the above syntax for dynamic purpose of the question counter
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    //update progress bar
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`;

   
    const questionIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach( choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

    });
    availableQuestions.splice(questionIndex,1);

    acceptingAnswers = true;
};

choices.forEach(choice =>{
    choice.addEventListener('click',e=>{
        //console.log(e.target);
        if(!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        /*const classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer){
            classToApply = 'correct';
        }*/
        //console.log(selectedAnswer === currentQuestion.answer);

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if(classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }
        
        selectedChoice.parentElement.classList.add(classToApply);

       setTimeout(() =>{
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
       },1000)

    });
});

incrementScore = num =>{
    score = score+num;
    scoreText.innerText = score;
}

//startGame();
