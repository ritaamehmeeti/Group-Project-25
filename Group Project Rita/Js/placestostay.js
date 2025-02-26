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











document.getElementById("log-in-button").addEventListener("click", function() {
    window.location.href = "login.html";
  });
  
  
  
  
  
  
  
  
  
  let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  function updateLoginUI() {
      const loginBtn = document.getElementById("loginBtn");
      if (isLoggedIn) {
          loginBtn.innerText = "Log out";
          loginBtn.onclick = logout;
      } else {
          loginBtn.innerText = "Log in";
          loginBtn.onclick = login;
      }
  }
  
  function login() {
      isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
      updateLoginUI();
  }
  
  function logout() {
      isLoggedIn = false;
      localStorage.setItem("isLoggedIn", "false");
      updateLoginUI();
  }
  
  function bookTicket() {
      if (!isLoggedIn) {
          alert("You must be logged in to book a ticket!");
          return;
      }
  
      const fullName = document.getElementById("full-name").value;
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const request = document.getElementById("request").value;
  
      if (!fullName || !from || !to || !date || !time || !phone || !email) {
          alert("Please fill out all required fields.");
          return;
      }
  
      document.getElementById("confirmation").innerText = "Your ticket has been booked!";
      document.getElementById("confirmation-banner").style.display = "block";
  
      setTimeout(() => {
          document.getElementById("confirmation-banner").style.display = "none";
      }, 3000);
  }
  
  document.addEventListener("DOMContentLoaded", updateLoginUI);
  
  document.getElementById("loginBtn").onclick = login;
  