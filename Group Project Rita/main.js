function setActive(element) {
    const navItems = document.querySelectorAll('.navbar ul li');
    navItems.forEach(item => item.classList.remove('active')); 
    element.parentElement.classList.add('active'); 
}

function showAlert() {
    alert("Button was clicked!");
}