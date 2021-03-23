async function commentBtnHandler(event) 
{
    event.preventDefault();

    const comment_text = document.getElementById('comment-text').value.trim();
    const score_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(score_id);
    if(comment_text)
    {
        const res= await fetch("/api/comments/",
            {
                method: "post",
                body: JSON.stringify(
             {            
                        score_id:score_id,
                        comment_text: comment_text
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
            document.location.replace(`/score/${score_id}`);
        } 
        else 
        {
            alert(response.statusText);
        }
    }
}

document.getElementById('comment-form').addEventListener("submit",commentBtnHandler);