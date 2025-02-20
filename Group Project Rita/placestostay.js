function setActive(element) {
    const links = document.querySelectorAll('.navbar ul li a');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

function showAlert() {
    alert('This button could be used for alerts, promotions, or notifications.');
}
