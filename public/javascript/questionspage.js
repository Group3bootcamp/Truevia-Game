let correct_answer= document.getElementById('correct_answer').textContent;
let questionCount = localStorage.getItem("questionCount");
let correctCount = localStorage.getItem("correctCount");
let timer = 10;
const query_url = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

if (!questionCount || questionCount<1)
{
    questionCount = 0;
    correctCount = 0;
}

questionCount++;
localStorage.setItem("questionCount", questionCount);
localStorage.setItem("correctCount", correctCount);

var urlParams = new URLSearchParams(window.location.search);

if(questionCount>urlParams.get('amount'))
{
    questionCount = 0;
    localStorage.setItem("questionCount", questionCount);
    document.location.replace('/game-end/'+correctCount);
}

document.getElementById('questionCounter').textContent = questionCount;
document.getElementById('score').textContent = correctCount;
document.getElementById('countdown').textContent = timer;

function nextquestion()
{
  localStorage.setItem("correctCount", correctCount);
  document.location.replace(`/${query_url}`);
}

function checkAnswer1()
{
  document.getElementById("answer-1").setAttribute('disabled',true);
  document.getElementById("answer-2").setAttribute('disabled',true);
  document.getElementById("answer-3").setAttribute('disabled',true);
  document.getElementById("answer-4").setAttribute('disabled',true);

    let answer = document.querySelector(`[data-number="1"]`).textContent.trim();
    if(answer===correct_answer)
    {
        correctCount++;
        document.getElementById("answer-1").classList="choice-container correct";
        document.getElementById("correct-sound").play();
    }
    else{
      document.getElementById("answer-1").classList="choice-container incorrect";
      document.getElementById("incorrect-sound").play();
    }

    setTimeout(nextquestion, 500);
}

function checkAnswer2()
{
    document.getElementById("answer-1").setAttribute('disabled',true);
    document.getElementById("answer-2").setAttribute('disabled',true);
    document.getElementById("answer-3").setAttribute('disabled',true);
    document.getElementById("answer-4").setAttribute('disabled',true);

    let answer = document.querySelector(`[data-number="2"]`).textContent.trim();
    if(answer===correct_answer)
    {
        correctCount++;
        document.getElementById("answer-2").classList="choice-container correct";
        document.getElementById("correct-sound").play();
    }
    else{
      document.getElementById("answer-2").classList="choice-container incorrect";
      document.getElementById("incorrect-sound").play();
    }

    setTimeout(nextquestion, 500);
}

function checkAnswer3()
{
  document.getElementById("answer-1").setAttribute('disabled',true);
  document.getElementById("answer-2").setAttribute('disabled',true);
  document.getElementById("answer-3").setAttribute('disabled',true);
  document.getElementById("answer-4").setAttribute('disabled',true);

    let answer = document.querySelector(`[data-number="3"]`).textContent.trim();
    if(answer===correct_answer)
    {
        correctCount++;
        document.getElementById("answer-3").classList="choice-container correct";
        document.getElementById("correct-sound").play();
     }
    else{
      document.getElementById("answer-3").classList="choice-container incorrect";
      document.getElementById("incorrect-sound").play();
    }

    setTimeout(nextquestion, 500);
}

function checkAnswer4()
{
  document.getElementById("answer-1").setAttribute('disabled',true);
  document.getElementById("answer-2").setAttribute('disabled',true);
  document.getElementById("answer-3").setAttribute('disabled',true);
  document.getElementById("answer-4").setAttribute('disabled',true);

    let answer = document.querySelector(`[data-number="4"]`).textContent.trim();

    if(answer===correct_answer)
    {
        correctCount++;
        document.getElementById("answer-4").classList="choice-container correct";
        document.getElementById("correct-sound").play();
    }
    else{
      document.getElementById("answer-4").classList="choice-container incorrect";
      document.getElementById("incorrect-sound").play();
    }

    setTimeout(nextquestion, 500);
}

setInterval(function(){
  timer--;
  document.getElementById('countdown').textContent = timer;
  if (timer === 0) {
    document.location.replace(`/${query_url}`);
  }
}, 1000);

document.getElementById("answer-1").addEventListener('click',checkAnswer1);
document.getElementById("answer-2").addEventListener('click',checkAnswer2);
document.getElementById("answer-3").addEventListener('click',checkAnswer3);
document.getElementById("answer-4").addEventListener('click',checkAnswer4);
