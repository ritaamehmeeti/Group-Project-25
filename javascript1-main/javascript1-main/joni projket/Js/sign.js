document.getElementById("sing").addEventListener("click", function() {
    window.location.href = "ticets.html";
  });



  function validateSignup() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Sign-up successful! Redirecting to Home...");
    window.location.href = "ticets.html"; // Redirect to the login page
}