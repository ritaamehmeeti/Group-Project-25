function validateLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in both Email and Password.");
    } else {
        window.location.href = "ticets.html"; 
    }
}