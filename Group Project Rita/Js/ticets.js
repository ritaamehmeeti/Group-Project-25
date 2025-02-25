
function setActive(element) {
    const navItems = document.querySelectorAll('.navbar ul li');
    navItems.forEach(item => item.classList.remove('active')); 
    element.parentElement.classList.add('active'); 
}


function showAlert() {
    alert("Button was clicked!");
}









function bookTicket() {
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let date = document.getElementById('date').value;

    if (from && to && date) {
      document.getElementById('confirmation').innerText = `Ticket booked from ${from} to ${to} on ${date}!`;
    } else {
      document.getElementById('confirmation').innerText = 'Please fill all fields!';
    }
  }




  function showAlert() {
    alert("Button Clicked!");
}





function setActive(element) {
    let links = document.querySelectorAll(".navbar ul li a");
    links.forEach(link => link.classList.remove("active"));
    element.classList.add("active");
}





function bookTicket() {
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

  const banner = document.getElementById("confirmation-banner");
  banner.style.display = "block";

  setTimeout(function() {
      banner.style.display = "none";
  }, 3000);
}






document.getElementById("loginBtn").addEventListener("click", function() {
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
