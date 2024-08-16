function login(){
    const loginButton = document.querySelector(' .loginFormContainer');

    if(loginButton.style.display === 'none'){
        loginButton.style.display = 'block';
    } else{
        loginButton .style.display = 'none'
    }
}

function login1(){
    const loginButton = document.querySelector(' .errorContainer');

    if(loginButton.style.display === 'none'){
        loginButton.style.display = 'block';
    } else{
        loginButton .style.display = 'none'
    }
}

function error(){
    const errorButton = document.querySelector(' .errorContainer');

    if(errorButton.style.display === 'none'){
        errorButton.style.display = 'block';
    } else{
        errorButton .style.display = 'none'
    }
}