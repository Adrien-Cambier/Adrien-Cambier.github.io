const thales = document.querySelector("#thales");
const web = document.querySelector("#web");
const réseau = document.querySelector("#réseau");
const câbles = document.querySelector("#câbles");
const passions = document.querySelector("#passions");
const cross = document.querySelectorAll(".return");

const piano = document.querySelectorAll('.piano');
const jeu = document.querySelectorAll('.jeu');

thales.addEventListener('click',() => toggleOn(".page_thales"));
web.addEventListener('click',() => toggleOn(".page_web"));
réseau.addEventListener('click',() => toggleOn(".page_réseau"));
câbles.addEventListener('click',() => toggleOn(".page_câbles"));
passions.addEventListener('click',() => toggleOn(".page_passions1"));

jeu.forEach(element => {
	element.addEventListener('click', () =>toggleOff(".page_passions1"));
	element.addEventListener('click', () =>toggleOn(".page_passions2"));
});

piano.forEach(element => {
	element.addEventListener('click', () =>toggleOff(".page_passions2"));
	element.addEventListener('click', () =>toggleOn(".page_passions1"));
});

cross.forEach(element => {
  	element.addEventListener('click', () => toggleOff(".page_thales"));
  	element.addEventListener('click', () => toggleOff(".page_web"));
  	element.addEventListener('click', () => toggleOff(".page_réseau"));
  	element.addEventListener('click', () => toggleOff(".page_câbles"));
  	element.addEventListener('click', () => toggleOff(".page_passions1"));
  	element.addEventListener('click', () => toggleOff(".page_passions2"));
});

function toggleOn(selector) {
	const elements = document.querySelector(selector)
	elements.classList.add('on')
};

function toggleOff(selector) {
	const elements = document.querySelector(selector)
	elements.classList.remove('on')
};


const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

// Ajouter un événement "click" à chaque lien de menu
document.querySelector("#link-propos").addEventListener("click", toggleMobileMenu)
document.querySelector("#link-parcours").addEventListener("click", toggleMobileMenu)
document.querySelector("#link-competences").addEventListener("click", toggleMobileMenu)
document.querySelector("#link-loisirs").addEventListener("click", toggleMobileMenu)
document.querySelector("#link-contact").addEventListener("click", toggleMobileMenu)
document.querySelector("#link-portfolio").addEventListener("click", toggleMobileMenu)

menuHamburger.addEventListener('click', toggleMobileMenu)
menubutton.addEventListener('click', toggleMobileMenu)

// Fonction pour ajouter ou supprimer la classe "mobile-menu"
function toggleMobileMenu() {
  	navLinks.classList.toggle('mobile-menu')
  	menuHamburger.classList.toggle('toggle')
};

// Récupérer le lien avec la classe "scroll-link"
const scrollLink = document.querySelector('.scroll-link')

// Ajouter un écouteur d'événement pour le clic sur le lien
scrollLink.addEventListener('click', (event) => {
  	// Empêcher le comportement par défaut du lien
  	event.preventDefault()

  	// Récupérer l'élément de destination avec l'ID spécifié dans le lien
  	const destination = document.querySelector(event.target.hash)

  	// Calculer la position de l'élément de destination sur la page
  	const position = destination.offsetTop
  		
  	// Animer le défilement jusqu'à la position de l'élément de destination
  	window.scrollTo({
    		top: position,
    		behavior: 'smooth'
  	})
})

window.addEventListener('load', function() {
  	var textareas = document.querySelector('.mail');
  
  	for (var i = 0; i < textareas.length; i++) {
    			textareas[i].value = ''; // Réinitialise la valeur du champ à une chaîne vide
  	}
});

// Lorsque la page est chargée ou rafraîchie
window.addEventListener('beforeunload', function() {
window.scrollTo(0, 0); // Défilement vers le haut de la page
})

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isVisible(element) {
  	var rect = element.getBoundingClientRect();
  	var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
	return (
		rect.top >= 0 &&
    		rect.left >= 0 &&
    		rect.bottom <= windowHeight &&
    		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Fonction pour attribuer ou supprimer la classe "unload"
function handleVisibility() {
  	var elements = document.querySelectorAll('*');
  
  	for (var i = 0; i < elements.length; i++) {
    		var element = elements[i];
    
    		if (isVisible(element)) {
      			element.classList.remove('unload');
    		} else {
      			element.classList.add('unload');
    		}
  	}
}

// Appeler la fonction handleVisibility lorsque la fenêtre est chargée et redimensionnée
