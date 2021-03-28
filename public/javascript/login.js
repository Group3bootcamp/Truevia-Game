async function loginBtnHandler(event) 
{
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(email && password)
    {
        const res= await fetch("/api/users/login",
            {
                method: "post",
                body: JSON.stringify(
             {
                        email,
                        password
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
            document.location.replace('/dashboard');
        } 
        else 
        {
            window.alert("please check your username and password");
            alert(response.statusText);
        }
    }
}

async function signupBtnHandler(event) 
{
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const password2 = document.getElementById('password2').value.trim();

    if(password!==password2)
    {
        alert('password should match confirm password');
        return;
    }

    if(username && email && password)
    {
        const res= await fetch("/api/users/",
            {
                method: "post",
                body: JSON.stringify(
             {
                        username,
                        email,
                        password
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
            const res= await fetch("/api/users/login",
{
                    method: "post",
                    body: JSON.stringify(
                 {
                            email,
                            password
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
                document.location.replace('/dashboard');
            } 
            else 
            {
                alert(response.statusText);
            }
        } 
        else 
        {
            alert(response.statusText);
        }
    }
}


if(document.getElementById('login-form'))
{
    document.getElementById('login-form').addEventListener("submit",loginBtnHandler);
}
else
{
    document.getElementById('signup-form').addEventListener("submit",signupBtnHandler);
}