async function saveScore(score) 
{
    
    localStorage.setItem("questionCount", 0);
    localStorage.setItem("correctCount", 0);
    document.getElementById('finalScore').textContent = 'Your Score is : '+ score;
    console.log(score);
    const res= await fetch("/api/scores/",
        {
            method: "post",
            body: JSON.stringify(
            {
                score_amount: score
                }
            ),
            headers:
            {
                'Content-Type': 'application/json'
            }
        }
    );

    if(res.ok)
    {
    } 
    else 
    {
        alert(response.statusText);
    }
    
}

const score = localStorage.getItem("correctCount");
saveScore(score);