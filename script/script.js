// Cambio de color del logo al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.scroll-color-change');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 550) {
      logo.classList.add('text-dark');
      logo.classList.remove('text-white');
    } else {
      logo.classList.remove('text-dark');
      logo.classList.add('text-white');
    }
  });
});

// Cambio de blur al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar-css');
  const textShadow = document.querySelector('.scroll-color-change');
  const icono = document.querySelector('.icono');
  const offcanvas = document.querySelector('.offcanvas');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 550) {
      navbar.style.backdropFilter = 'blur(5px)';
      textShadow.style.textShadow = '0 0 10px rgb(255, 255, 255)';
      icono.style.color = '#3e3e3e';

    } else {
      navbar.style.backdropFilter = 'none';
      textShadow.style.textShadow = 'none';
      icono.style.color = '#ffffff';
    }
    if (window.scrollY < 550) {
      offcanvas.style.display = 'block';
      offcanvas.style.background = 'white';
    
    } else {
      offcanvas.style.display = 'block';
      offcanvas.style.background = 'white';
    
    }
  }); 
});

// Animación de las imágenes de la galeria
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.gallery-image');
  const contactCard = document.querySelectorAll('.contact-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  images.forEach(image => {
    observer.observe(image);
  });

  contactCard.forEach(card => {
    observer.observe(card);
  });
});


// Animación de las pestañas de la pagina luxhomes

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.nav-link1');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      // Remover la clase active1 de todas las pestañas
      tabs.forEach(t => t.classList.remove('active1'));
      
      // Agregar la clase active1 a la pestaña clickeada
      this.classList.add('active1');

      // Ocultar todos los contenidos de las pestañas
      tabContents.forEach(content => content.classList.remove('active1'));

      // Mostrar el contenido correspondiente a la pestaña clickeada
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active1');
    });
  });
});


