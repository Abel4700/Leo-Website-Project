// Get all the navigation links
    var navLinks = document.querySelectorAll('.navigation ul li a');
    
    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Add click event listener to each link
        link.addEventListener('click', function() {
            // Remove "active" class from all navigation links
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            // Add "active" class to the clicked link
            this.classList.add('active');
        });
    });