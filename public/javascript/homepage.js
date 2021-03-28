localStorage.setItem("questionCount", -1);
localStorage.setItem("correctCount", -1);

function startgame ()
{
    var cat = document.getElementById("trivia_category").value.trim();
    var difficulty = document.getElementById("trivia_difficulty").value.trim();

    localStorage.setItem("category",cat);
    localStorage.setItem("difficulty",difficulty);    
    

    document.location.replace(`/questionpage?cat=${cat}&difficulty=${difficulty}`);

}

document.getElementById("new-game").addEventListener('click',startgame);