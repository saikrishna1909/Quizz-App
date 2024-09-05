
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;



finalScore.innerText = mostRecentScore;
username.addEventListener('keyup',()=>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) =>{
    console.log('clicked the save button');
    e.preventDefault();

    const score = {
        score : Math.floor(Math.random()*100),
        name : username.value
    };
    // creating an array of scores as highScores array
    highScores.push(score);
    //sorting the highscore array using arrow function
    highScores.sort((a,b) => {
         b.score - a.score; 
    })

    // splicing the array up to index 5  , 'it indicates that only top 5 scores are presnt in the game'

    highScores.splice(5);

    // It doesnot keep the least score in the array of the list

    localStorage.setItem('highScores', JSON.stringify(highScores));

    window.location.assign("/");

}