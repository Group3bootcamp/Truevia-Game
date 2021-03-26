let correct_answer= document.getElementById('correct_answer').textContent;
let questionCount = localStorage.getItem("questionCount");
let correctCount = localStorage.getItem("correctCount");
let timer = 10;

if (!questionCount || questionCount<1)
{
    questionCount = 0;
    correctCount = 0;
}

questionCount++;
localStorage.setItem("questionCount", questionCount);
localStorage.setItem("correctCount", correctCount);

if(questionCount>10)
{
    questionCount = 0;
    localStorage.setItem("questionCount", questionCount);
    document.location.replace('/game-end/'+correctCount);
}

document.getElementById('questionCounter').textContent = questionCount;
document.getElementById('score').textContent = correctCount;
document.getElementById('countdown').textContent = timer;

function checkAnswer1()
{
    let answer = document.querySelector(`[data-number="1"]`).textContent.trim();
    if(answer===correct_answer)
    {
        correctCount++;
        document.getElementById("answer-1").classList="choice-container correct";
    }
    else{
      document.getElementById("answer-1").classList="choice-container incorrect";
    }

    localStorage.setItem("correctCount", correctCount);
    document.location.replace('/questionpage');
}

function checkAnswer2()
{
    let answer = document.querySelector(`[data-number="2"]`).textContent.trim();
    if(answer===correct_answer)
    {
        correctCount++;
        document.getElementById("answer-2").classList="choice-container correct";
    }
    else{
      document.getElementById("answer-2").classList="choice-container incorrect";
    }

    localStorage.setItem("correctCount", correctCount);
    document.location.replace('/questionpage');
}

function checkAnswer3()
{
    let answer = document.querySelector(`[data-number="3"]`).textContent.trim();
    if(answer===correct_answer)
    {
        correctCount++;
        document.getElementById("answer-3").classList="choice-container correct";
    }
    else{
      document.getElementById("answer-3").classList="choice-container incorrect";
    }

    localStorage.setItem("correctCount", correctCount);
    document.location.replace('/questionpage');
}

function checkAnswer4()
{
    let answer = document.querySelector(`[data-number="4"]`).textContent.trim();
    if(answer===correct_answer)
    {
        correctCount++;
        document.getElementById("answer-4").classList="choice-container correct";
    }
    else{
      document.getElementById("answer-4").classList="choice-container incorrect";
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

document.getElementById("answer-1").addEventListener('click',checkAnswer1);
document.getElementById("answer-2").addEventListener('click',checkAnswer2);
document.getElementById("answer-3").addEventListener('click',checkAnswer3);
document.getElementById("answer-4").addEventListener('click',checkAnswer4);
