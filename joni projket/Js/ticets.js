// JavaScript function to handle active navigation item
function setActive(element) {
    const navItems = document.querySelectorAll('.navbar ul li');
    navItems.forEach(item => item.classList.remove('active')); // Remove active class from all items
    element.parentElement.classList.add('active'); // Add active class to the clicked item
}

// JavaScript function for the button click event
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

  // Check for required fields
  if (!fullName || !from || !to || !date || !time || !phone || !email) {
      alert("Please fill out all required fields.");
      return;
  }

  // Display confirmation message
  document.getElementById("confirmation").innerText = "Your ticket has been booked!";

  // Show the banner
  const banner = document.getElementById("confirmation-banner");
  banner.style.display = "block";

  // Hide the banner after 3 seconds
  setTimeout(function() {
      banner.style.display = "none";
  }, 3000);
}

