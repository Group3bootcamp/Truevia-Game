function getCategory(category)
{
    switch(category)
    {
        case  '9' :
            return 'General Knowledge';
        case '10' : 
            return 'Entertainment: Books';
        case '11':
            return 'Entertainment: Film';
        case '12':
            return 'Entertainment: Music';
        case '13':
            return 'Entertainment: Musicals & Theatres';
        case '14':
            return 'Entertainment: Television';
        case '15':
            return 'Entertainment: Video Games';
        case '16':
            return 'Entertainment: Board Games';
        case '17':
            return 'Science & Nature';
        case '18':
            return 'Science: Computers';
        case '19':
            return 'Science: Mathematics';
        case '20':
            return 'Mythology';
        case '21':
            return 'Sports';
        case '22':
            return 'Geography';
        case '23':
            return 'History';
        case '24':
            return 'Politics';
        case '25':
            return 'Art';
        case '26':
            return 'Celebrities';
        case '27':
            return 'Animals';
        case '28':
            return 'Vehicles';
        case '29':
            return 'Entertainment: Comics';
        case '30':
            return 'Science: Gadgets';
        case '31':
            return 'Entertainment: Japanese Anime & Manga';
        case '32':
            return 'Entertainment: Cartoon & Animations';   
        default:
            return category;
    }
}

async function saveScore(score,category) 
{
    
    localStorage.setItem("questionCount", -1);
    localStorage.setItem("correctCount", -1);
    let cat = getCategory(category);

    const res= await fetch("/api/scores/",
        {
            method: "post",
            body: JSON.stringify(
            {
                score_amount: score,
                category_id: cat
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

function filter()
{
    var cat = document.getElementById("category").value.trim();
    
    if(cat==="0")
    {
        // console.log(1,cat);
        document.location.replace(`/game-end/`);
    }
    else
    {
        // console.log(2,cat);
        let cate = getCategory(cat);
        document.location.replace(`/game-end/cat/${cate}`);
    }
}

const score_display = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

const page = window.location.toString().split('/')[
    window.location.toString().split('/').length - 2
  ];

const score = localStorage.getItem("correctCount");
const category = localStorage.getItem("category");

if (score>=0)
{
    saveScore(score,category);
}

if (parseInt(score_display)>=0 && page==='game-end')
{
    document.getElementById('finalScore').textContent = 'Your Score is : '+ score_display;
}

if (page==='cat')
{
    let cat_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    let cate = getCategory(cat_id);
    cate = cate.split('%20').join(' ');
    document.getElementById('score-sub').textContent = cate;
}

document.getElementById('category').addEventListener('change',filter);