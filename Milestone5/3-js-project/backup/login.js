document.getElementById('login-submit').addEventListener('click', function(){
    //get user Email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    
    //get user password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;


    //checking validation of user id password && redirecting to another page
    if(userEmail == 'komol@gmail.com' && userPassword == 'secret'){
        //redirecting to banking.html page if email pass correct
        window.location.href = 'banking.html';
    }
});

document.getElementsByCl