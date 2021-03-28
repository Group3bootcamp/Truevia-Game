async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-text').value.trim();
    console.log(comment_text);
    const score_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) 
    {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            score_id:score_id,
            comment_text:comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
if( document.querySelector('#comment-form'))
{
  document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
}