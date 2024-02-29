window.onload = function() 
{
    alert("This page is still under construction. Thank you for your patience.");
};


document.addEventListener("DOMContentLoaded", function() 
{
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) 
    {
        navLink.addEventListener('click', function(event) 
        {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) 
            {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo(
                {
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
