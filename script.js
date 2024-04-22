
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

window.onload = () => {
  // On va chercher tous les éléments avec la classe "accordionElement"
  const elts = document.querySelectorAll(".accordionElement");

  for (let elt of elts) {
    elt.addEventListener("click", function() {
      // On récupère l'élément actif
      const active = document.querySelector(".accordionElement.active");
      
      // Si l'élément cliqué n'est pas déjà actif
      if (active !== this) {
        // On retire la classe "active" de l'élément actif
        if (active) {
          active.classList.remove("active");
          // On réduit sa hauteur
          active.querySelector(".accordionContent").style.height = 0;
        }

        // On met la classe "active" à l'élément cliqué
        this.classList.add("active");

        // On récupère la balise <ul> à l'intérieur de l'élément cliqué
        let section = this.querySelector(".accordionContent ul");

        // On récupère la hauteur de la balise <ul>
        let sectionHeight = section.offsetHeight + 25;

        // On définit la hauteur de .accordionContent
        this.querySelector(".accordionContent").style.height = sectionHeight + "px";
      } else {
        // Si l'élément cliqué est déjà actif, on le réduit
        this.classList.remove("active");
        this.querySelector(".accordionContent").style.height = 0;
      }
    });
  }
}

// **************Scroll des sections active ****
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    // ************** sticky navbar ****************************
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ************* remove toggle icon and navbar when click navbar link (scroll)****************************

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// **************Scroll reveal ************************************************************
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home, .heading, .aboutImg, .skillsContent, .portfolioBox', { origin: 'top' });
ScrollReveal().reveal('.container, .home a, .aboutItem p, .skillsExperience', { origin: 'bottom' });
ScrollReveal().reveal('.home .socialMedia, .aboutItem, .skillsTechnology h2, .portfolioBox', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .aboutImg, .skillsContainer', { origin: 'right' });

// *************************writting typed js************************
const typed = new Typed('.multiple-text', {
    strings:    ["une Future Développeuse Frontend", 
                "à la recherche d'un stage",
                "autonome et très motivée",
                "",
                ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,        
});
