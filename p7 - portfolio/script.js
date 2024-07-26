
document.addEventListener('DOMContentLoaded', () => {
  
});


const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('nav ul li a');

  navToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('showing');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('nav ul').classList.remove('showing');
    });
  });