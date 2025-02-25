document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    // Clear previous error messages
    clearErrors();

    // Get form field values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation flags
    let isValid = true;

    // Validate Full Name (required)
    if (fullname === "") {
        displayError("fullnameError", "Full Name is required.");
        isValid = false;
    }

    // Validate Email (required and format check)
    if (email === "") {
        displayError("emailError", "Email is required.");
        isValid = false;
    } else if (!validateEmail(email)) {
        displayError("emailError", "Please enter a valid email address.");
        isValid = false;
    }

    // Validate Subject (required)
    if (subject === "") {
        displayError("subjectError", "Subject is required.");
        isValid = false;
    }

    // Validate Message (required)
    if (message === "") {
        displayError("messageError", "Message is required.");
        isValid = false;
    }

    // If the form is valid, send the data
    if (isValid) {
        sendMessage(fullname, email, subject, message);
    }
});

// Send message using fetch
function sendMessage(fullname, email, subject, message) {
    // Create the payload to send
    const data = {
        fullname: fullname,
        email: email,
        subject: subject,
        message: message
    };

    // Send the data to the server using fetch
    fetch("YOUR_SERVER_ENDPOINT_HERE", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())  // Parse the response as JSON
    .then(data => {
        if (data.success) {
            // Show success message on successful submission
            document.getElementById("response").innerHTML = `
                <p class="success">Thank you for your message, ${fullname}! We have received your message.</p>
            `;
        } else {
            // Show error message if something went wrong
            document.getElementById("response").innerHTML = `
                <p class="error">Sorry, there was an issue sending your message. Please try again later.</p>
            `;
        }
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch request
        console.error("Error sending message:", error);
        document.getElementById("response").innerHTML = `
            <p class="error">Sorry, there was an error. Please try again later.</p>
        `;
    });
}

// Display error messages
function displayError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Clear error messages
function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => element.textContent = "");
}

// Validate email format
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
