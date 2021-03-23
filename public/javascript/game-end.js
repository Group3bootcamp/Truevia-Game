let score = localStorage.getItem("correctCount");
document.getElementById('finalScore').textContent = 'Your final score is : '+ score;
localStorage.setItem("questionCount", 0);
localStorage.setItem("correctCount", 0);