function setActive(element) {
    const links = document.querySelectorAll('.navbar ul li a');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

function showAlert() {
    alert('This button could be used for alerts, promotions, or notifications.');
}
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const accommodation = document.getElementById('accommodation').value;
    const checkinDate = document.getElementById('checkin-date').value;

    if (name && email && phone && accommodation && checkinDate) {
        const confirmationMessage = `Thank you, ${name}! Your booking for a ${accommodation} on ${checkinDate} has been confirmed. We will contact you at ${email}.`;
        document.getElementById('confirmation-message').innerText = confirmationMessage;
        document.getElementById('confirmation-message').style.display = 'block';

        document.getElementById('booking-form').reset();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const clickMeButton = document.getElementById("click-me-button");

    clickMeButton.addEventListener("click", () => {
        alert("Button clicked! Booking form functionality will be implemented here.");
    });
});
