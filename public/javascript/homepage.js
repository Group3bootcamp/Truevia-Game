localStorage.setItem("questionCount", -1);
localStorage.setItem("correctCount", -1);

function startgame ()
{
    var amount = document.getElementById("trivia_amount").value.trim();
    var cat = document.getElementById("trivia_category").value.trim();
    var difficulty = document.getElementById("trivia_difficulty").value.trim();
    var type = document.getElementById("trivia_type").value.trim();
    

    document.location.replace(`/questionpage?cat=${cat}&amount=${amount}&difficulty=${difficulty}&type=${type}`);

}

document.getElementById("new-game").addEventListener('click',startgame);