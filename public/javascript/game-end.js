async function saveScore(score) 
{
    localStorage.setItem("questionCount", -1);
    localStorage.setItem("correctCount", -1);
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
        document.location.replace('/game-end/'+score);
    } 
    else 
    {
        alert(response.statusText);
    }
    
}

const score_display = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

const score = localStorage.getItem("correctCount");

if (score>=0)
{
    saveScore(score);
}

if (parseInt(score_display)>=0 )
{
    document.getElementById('finalScore').textContent = 'Your Score is : '+ score_display;
}
