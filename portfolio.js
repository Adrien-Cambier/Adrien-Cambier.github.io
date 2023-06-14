document.querySelector("#github_music").addEventListener("click", ()=> {
  window.location.href = "https://github.com/Adrien-Cambier/Music-Website"; // Remplacez "votre_lien" par le lien que vous souhaitez rediriger
});

document.querySelector("#github_thales").addEventListener("click", ()=> {
  window.location.href = "https://github.com/Adrien-Cambier/Thales-Website"; // Remplacez "votre_lien" par le lien que vous souhaitez rediriger
});

document.querySelector("#rapport_sae21").addEventListener("click", ()=> {
  window.location.href = "https://adrien-cambier.github.io/Rapport SAE 21.pdf"; // Remplacez "votre_lien" par le lien que vous souhaitez rediriger
});
// Sélectionnez l'élément que vous voulez faire apparaître/disparaître
var header = document.querySelector('header');

// Définissez une variable pour stocker la position précédente du scroll
var previousScrollPosition = window.pageYOffset;

// Écoutez l'événement de défilement de la fenêtre
window.onscroll = function() {
  // Obtenez la position actuelle du scroll
  var currentScrollPosition = window.pageYOffset;

  // Vérifiez si l'utilisateur fait défiler vers le bas
  if (currentScrollPosition > previousScrollPosition) {
    // Affichez l'élément
    header.classList.add('header_off');
  } else {
    // Masquez l'élément
    header.classList.remove('header_off');
  }

  // Mettez à jour la position précédente du scroll
  previousScrollPosition = currentScrollPosition;
}

const thales = document.querySelector("#thales");
const web = document.querySelector("#web");
const réseau = document.querySelector("#réseau");
const câbles = document.querySelector("#câbles");
const passions = document.querySelector("#passions");
const cross = document.querySelectorAll(".return");
const web_picture = document.querySelector("#web_picture");
const réseau_picture = document.querySelector("#réseau_picture");
const thales_picture = document.querySelector("#thales_picture");
const précédent_web = document.querySelector('#pre_web');
const précédent_réseau = document.querySelector('#pre_rés');
const précédent_thales = document.querySelector('#pre_tha');


const piano = document.querySelectorAll('.piano');
const jeu = document.querySelectorAll('.jeu');

web_picture.addEventListener('click',() => toggleOff(".page_web"))
thales_picture.addEventListener('click',() => toggleOff(".page_thales"))
précédent_web.addEventListener('click', () =>toggleOff(".page_web_picture"));
précédent_réseau.addEventListener('click', () =>toggleOff(".page_réseau_picture"));
précédent_thales.addEventListener('click', () =>toggleOff(".page_thales_picture"));
réseau_picture.addEventListener('click',() => toggleOff(".page_réseau"))
web_picture.addEventListener('click',() => toggleOn(".page_web_picture"))
passions.addEventListener('click',() => toggleOn(".page_passions1"));
thales.addEventListener('click',() => toggleOn(".page_thales"));
web.addEventListener('click',() => toggleOn(".page_web"));
réseau.addEventListener('click',() => toggleOn(".page_réseau"));
câbles.addEventListener('click',() => toggleOn(".page_câbles"));
réseau_picture.addEventListener('click',() => toggleOn(".page_réseau_picture"))
précédent_web.addEventListener('click', () =>toggleOn(".page_web"));
précédent_réseau.addEventListener('click', () =>toggleOn(".page_réseau"));
précédent_thales.addEventListener('click', () =>toggleOn(".page_thales"));
thales_picture.addEventListener('click',() => toggleOn(".page_thales_picture"))

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
	elements.classList.add('on');
	document.body.style.overflowY = 'hidden';
};

function toggleOff(selector) {
	const elements = document.querySelector(selector)
	elements.classList.remove('on');
	document.body.style.overflowY = 'scroll';
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
