
document.querySelectorAll('.destination').forEach(item => {
    item.addEventListener('click', () => {
        const destinationId = item.id;

      
        openFullScreen(destinationId);
    });
});

function openFullScreen(destinationId) {
    let articleText = "";
    switch (destinationId) {
        case 'train':
            articleText = "<h2>Train Adventures</h2><p>Relax and enjoy stunning landscapes on board our luxury trains. We offer first-class service and breathtaking views.</p>";
            break;
        case 'airplane':
            articleText = "<h2>Airplane Journeys</h2><p>Fly in comfort with top-class amenities, making your journey to exotic destinations seamless and enjoyable.</p>";
            break;
        case 'cruise':
            articleText = "<h2>Cruise Comfort</h2><p>Indulge in our luxurious cruises, with world-class service and comfort, perfect for an unforgettable getaway.</p>";
            break;
        default:
            articleText = "<h2>Unknown Destination</h2><p>Explore an unforgettable adventure with us.</p>";
    }

  
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = `<div class="overlay-content">${articleText}<button class="close-btn">Close</button></div>`;
    document.body.appendChild(overlay);


    document.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
}
















// JavaScript function to handle active navigation item
function setActive(element) {
    const navItems = document.querySelectorAll('.navbar ul li');
    navItems.forEach(item => item.classList.remove('active')); // Remove active class from all items
    element.parentElement.classList.add('active'); // Add active class to the clicked item
}

// JavaScript function for the button click event
function showAlert() {
    alert("You are going to the Log in page");
}





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
  
  
  
  
  
  
  
  
  
  
  
  