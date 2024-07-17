function login(){
    const loginButton = document.querySelector(' .loginFormContainer');

    if(loginButton.style.display === 'none'){
        loginButton.style.display = 'block';
    } else{
        loginButton .style.display = 'none'
    }
}