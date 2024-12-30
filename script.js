function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginSection = document.getElementById("loginSection");
    var welcomeSection = document.getElementById("welcomeSection");
    var welcomeMessage = document.getElementById("welcomeMessage");
    var logoutBtn = document.getElementById("logoutBtn");

    if (username === "admin" && password === "admin") {
        alert("Login successful!");
        loginSection.style.display = "none";
        welcomeSection.style.display = "block";
        welcomeMessage.textContent = "Welcome, admin!";
        logoutBtn.style.display = "block";
    } else {
        alert("Login failed. Please check your username and password.");
    }
}

function logout() {
    var loginSection = document.getElementById("loginSection");
    var welcomeSection = document.getElementById("welcomeSection");
    var logoutBtn = document.getElementById("logoutBtn");

    loginSection.style.display = "block";
    welcomeSection.style.display = "none";
    logoutBtn.style.display = "none";
}