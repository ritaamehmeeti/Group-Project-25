document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  


    clearErrors();


    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    let isValid = true;


    if (fullname === "") {
        displayError("fullnameError", "Full Name is required.");
        isValid = false;
    }

    if (email === "") {
        displayError("emailError", "Email is required.");
        isValid = false;
    } else if (!validateEmail(email)) {
        displayError("emailError", "Please enter a valid email address.");
        isValid = false;
    }

    if (subject === "") {
        displayError("subjectError", "Subject is required.");
        isValid = false;
    }


    if (message === "") {
        displayError("messageError", "Message is required.");
        isValid = false;
    }


    if (isValid) {
        sendMessage(fullname, email, subject, message);
    }
});


function sendMessage(fullname, email, subject, message) {
    
    const data = {
        fullname: fullname,
        email: email,
        subject: subject,
        message: message
    };


    fetch("YOUR_SERVER_ENDPOINT_HERE", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json()) 
    .then(data => {
        if (data.success) {
          
            document.getElementById("response").innerHTML = `
                <p class="success">Thank you for your message, ${fullname}! We have received your message.</p>
            `;
        } else {
        
            document.getElementById("response").innerHTML = `
                <p class="error">Sorry, there was an issue sending your message. Please try again later.</p>
            `;
        }
    })
    .catch(error => {
    
        console.error("Error sending message:", error);
        document.getElementById("response").innerHTML = `
            <p class="error">Sorry, there was an error. Please try again later.</p>
        `;
    });
}


function displayError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}


function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => element.textContent = "");
}


function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
