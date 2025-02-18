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