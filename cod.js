const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button_login');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    const data = {
        username: username.value,
        password: password.value
    }

});
