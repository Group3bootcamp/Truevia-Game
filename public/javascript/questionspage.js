let correct_answer= document.getElementById('correct_answer').textContent;
let questionCount = localStorage.getItem("questionCount");
let correctCount = localStorage.getItem("correctCount");
let timer = 10;

if (!questionCount || questionCount===0)
{
    questionCount = 0;
    correctCount = 0;
}

questionCount++;
localStorage.setItem("questionCount", questionCount);

if(questionCount>10)
{
    questionCount = 0;
localStorage.setItem("questionCount", questionCount);
    document.location.replace('/game-end');
}

document.getElementById('questionCounter').textContent = questionCount;
document.getElementById('score').textContent = correctCount;
document.getElementById('countdown').textContent = timer;

function checkAnswer(event)
{

    let answerNo = event.path[1].id.split('-')[1];
    let answer = document.querySelector(`[data-number='${answerNo}']`).textContent;
    if(answer===correct_answer)
    {
        correctCount++;
    }

    localStorage.setItem("correctCount", correctCount);
    document.location.replace('/questionpage');
}

setInterval(function(){
  timer--;
  document.getElementById('countdown').textContent = timer;
  if (timer === 0) {
    document.location.replace('/questionpage');
  }
}, 1000);

document.getElementById("answer-1").addEventListener('click',checkAnswer);
document.getElementById("answer-2").addEventListener('click',checkAnswer);
document.getElementById("answer-3").addEventListener('click',checkAnswer);
document.getElementById("answer-4").addEventListener('click',checkAnswer);
