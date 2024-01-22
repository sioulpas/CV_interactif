// script.js
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.barre');

    elements.forEach(element => {
        const remplissage = element.querySelector('.remplissage');
        const pourcentage = parseFloat(remplissage.getAttribute('data-pourcentage'));
        
        // Utilisez le pourcentage directement sans vérifier la visibilité
        const progress = (pourcentage / 100) * 300 ; // 300 est la largeur initiale de votre barre

        remplissage.style.width = `${progress}%`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Réinitialisation des couleurs de fond de toutes les sections
            document.querySelectorAll("section").forEach(section => {
                section.style.transition = "background-color 0.5s ease";
                section.style.backgroundColor = "";
            });
            document.querySelectorAll("aside").forEach(aside => {
                aside.style.transition = "background-color 0.5s ease";
                aside.style.backgroundColor = "";
            });

            if (targetSection) {
                const windowHeight = window.innerHeight;
                const sectionHeight = targetSection.clientHeight;
                const offset = targetSection.offsetTop - (windowHeight - sectionHeight) / 2;
                const duration = 100;

                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                });

                setTimeout(() => {
                    // Changement de couleur de fond après le défilement
                    targetSection.style.backgroundColor = "#9AC8EB";
                }, duration);
            }
        });
    });
});