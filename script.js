document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple username and password check
    if (username === "user" && password === "pass") {
        window.location.href = "home.html";
    } else {
        errorMessage.textContent = "Username or password is incorrect.";
        errorMessage.style.display = "block";
    }
});
