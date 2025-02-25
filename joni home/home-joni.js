// JavaScript to show full-screen articles when clicked on a destination
document.querySelectorAll('.destination').forEach(item => {
    item.addEventListener('click', () => {
        const destinationId = item.id;

        // Open full-screen view for the clicked destination
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

    // Display the article in a full-screen overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = `<div class="overlay-content">${articleText}<button class="close-btn">Close</button></div>`;
    document.body.appendChild(overlay);

    // Close the full-screen overlay
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



