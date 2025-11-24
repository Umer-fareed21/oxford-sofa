// Poori script.js file ka updated code
// Ye code login form submit hone par validation aur redirection handle karega.

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation check (Pehlay wali logic)
    if (email === '' || password === '') {
        alert('Please note: Both Email Address and Password fields are required.');
        return;
    }
    if (password.length < 6) {
        alert('Your password must be at least 6 characters long.');
        return;
    }

    // Login successful hone par Home Page (index.html) par bhej do
    window.location.href = '../oxforad sofa web/index.html';
});