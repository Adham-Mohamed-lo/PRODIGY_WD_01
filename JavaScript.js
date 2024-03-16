document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', function() {
  var scrollDistance = window.scrollY;
  var navbarLinks = document.querySelectorAll('#navbar a');

  navbarLinks.forEach((link, index) => {
    var section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop - document.getElementById('navbar').clientHeight <= scrollDistance) {
      navbarLinks.forEach((el) => { el.classList.remove('active'); });
      link.classList.add('active');
    }
  });
});

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  navbar.style.backgroundColor = (window.scrollY > 50) ? 'rgb(34, 34, 34)' : 'rgb(40, 40, 40)';
});
