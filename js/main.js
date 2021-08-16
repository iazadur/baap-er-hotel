document.getElementById('login-submit').addEventListener('click', function () {

    // get user email 
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value
    // get user password 
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value

    if (userEmail == 'azad@gmail.com' && userPassword == '1010') {
        location.href = 'banking.html'
    } 

})


