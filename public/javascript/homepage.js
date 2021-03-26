localStorage.setItem("questionCount", -1);
localStorage.setItem("correctCount", -1);

function startgame ()
{
    var cat = document.getElementById("category").value.trim();
    console.log(cat);
    document.location.replace(`/questionpage/${cat}`);
}

document.getElementById("new-game").addEventListener('click',startgame);