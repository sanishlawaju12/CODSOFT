// Add JavaScript functionality here if needed
// const navButton = document.querySelector('.nav-button')
// const navlinks = document.querySelectorAll('.nav-links')

// navButton.addEventListener('click', () => {
//     navlinks.classList.toggle('mobile-menu')
// })

// JavaScript to toggle navbar opacity on scroll

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var logo = document.querySelector('.logo');
    var navbarLinks = document.querySelectorAll('.navbar-text');
    if (window.scrollY > 0) {
      navbar.classList.add('opaque');
      logo.style.color = 'black';
      navbarLinks.forEach(function(link) {
        link.style.color = 'black'; // Change color of each navbar link to black
    });
    } else {
      navbar.classList.remove('opaque');
      logo.style.color = 'white';
      navbarLinks.forEach(function(link) {
        link.style.color = 'white'; // Change color of each navbar link back to white
    });
    }
  });


  
 
