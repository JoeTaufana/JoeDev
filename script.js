
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
