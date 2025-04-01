document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    let isMovable = true;

    function moveLoginButton() {
        if (!isMovable) return;

        let x = Math.random() * (window.innerWidth - loginBtn.clientWidth);
        let y = Math.random() * (window.innerHeight - loginBtn.clientHeight);

        loginBtn.style.position = "absolute";
        loginBtn.style.left = `${x}px`;
        loginBtn.style.top = `${y}px`;
    }

    loginBtn.addEventListener("mouseover", moveLoginButton);

    function checkInputs() {
        if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            isMovable = false; // Stop moving the button
            loginBtn.style.position = "relative";
            loginBtn.style.left = "0";
            loginBtn.style.top = "0";
        } else {
            isMovable = true;
        }
    }

    usernameInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);
});
