document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Hardcoded demo credentials (for demonstration purposes)
        const validUsername = 'root';
        const validPassword = 'toor';

        if (username === validUsername && password === validPassword) {
            // Redirect to the main to-do list page on successful login
            window.location.href = '/home';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
