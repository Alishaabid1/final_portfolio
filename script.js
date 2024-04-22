// JavaScript to change the text dynamically
document.addEventListener("DOMContentLoaded", function() {
    const roles = ['  Web Developer',  '   Graphic Designer']; // List of roles
    let roleIndex = 0; // Index to track the current role
    const roleSpan = document.querySelector('.role');

    // Function to update the role text
    function updateRole() {
        roleSpan.textContent = roles[roleIndex]; // Set the text content to the current role
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next role, or loop back to the first if at the end
    }

    // Call the updateRole function every 3 seconds (for example)
    setInterval(updateRole, 3000); // Change the role every 3 seconds
});




    // Highlight the active link in the navbar
    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop();
        $('#nav_bar a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#nav_bar a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    });
