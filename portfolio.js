// Sélection des éléments HTML
const header = document.querySelector('header');
const menuHamburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');
const scrollLinks = document.querySelectorAll('.scroll-link');
const elementsToToggleOn = ['.page_web_picture', '.page_thales', '.page_web', '.page_réseau', '.page_câbles', '.page_réseau_picture', '.page_passions1', '.page_thales_picture', '.page_passions2'];
const elementsToToggleOff = ['.page_thales', '.page_web', '.page_réseau', '.page_câbles', '.page_passions1', '.page_passions2'];

// Ajouter des gestionnaires d'événements pour les liens du menu
scrollLinks.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});

// Ajouter des gestionnaires d'événements pour le menu hamburger
menuHamburger.addEventListener('click', toggleMobileMenu);

// Gestionnaire d'événement pour masquer/afficher le header lors du défilement
let previousScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > previousScrollPosition) {
    header.classList.add('header_off');
  } else {
    header.classList.remove('header_off');
  }

  previousScrollPosition = currentScrollPosition;
});

// Gestionnaires d'événements pour les éléments à activer/désactiver
const thales = document.querySelector('#thales');
const web = document.querySelector('#web');
const réseau = document.querySelector('#réseau');
const câbles = document.querySelector('#câbles');
const passions = document.querySelector('#passions');
const cross = document.querySelectorAll('.return');
const web_picture = document.querySelector('#web_picture');
const réseau_picture = document.querySelector('#réseau_picture');
const thales_picture = document.querySelector('#thales_picture');
const précédent_web = document.querySelector('#pre_web');
const précédent_réseau = document.querySelector('#pre_rés');
const précédent_thales = document.querySelector('#pre_tha');
const piano = document.querySelectorAll('#piano');
const jeu = document.querySelectorAll('#jeu');

// Page principale portfolio
passions.addEventListener('click', () => toggleElement('.page_passions1'));
thales.addEventListener('click', () => toggleElement('.page_thales'));
web.addEventListener('click', () => toggleElement('.page_web'));
réseau.addEventListener('click', () => toggleElement('.page_réseau'));
câbles.addEventListener('click', () => toggleElement('.page_câbles'));

// Changement de page passion
piano.forEach((element) => {
  element.addEventListener('click', () => {
    toggleOff('.page_passions2');
    toggleElement('.page_passions1');
  });
});

jeu.forEach((element) => {
  element.addEventListener('click', () => {
    toggleOff('.page_passions1');
    toggleElement('.page_passions2');
  });
});

// Activation page picture et désactivation page principale
thales_picture.addEventListener('click', () => toggleOff('.page_thales'));
thales_picture.addEventListener('click', () => toggleElement('.page_thales_picture'));
réseau_picture.addEventListener('click', () => toggleOff('.page_réseau'));
réseau_picture.addEventListener('click', () => toggleElement('.page_réseau_picture'));
web_picture.addEventListener('click', () => toggleOff('.page_web'));
web_picture.addEventListener('click', () => toggleElement('.page_web_picture'));

// Activation page principale et désactivation pge picture
précédent_web.addEventListener('click', () => toggleOff('.page_web_picture'));
précédent_réseau.addEventListener('click', () => toggleOff('.page_réseau_picture'));
précédent_thales.addEventListener('click', () => toggleOff('.page_thales_picture'));
précédent_web.addEventListener('click', () => toggleElement('.page_web'));
précédent_réseau.addEventListener('click', () => toggleElement('.page_réseau'));
précédent_thales.addEventListener('click', () => toggleElement('.page_thales'));

cross.forEach((element) => {
  element.addEventListener('click', () => {
    elementsToToggleOff.forEach((selector) => {
      toggleOff(selector);
    });
  });
});

function toggleElement(selector) {
  const elements = document.querySelector(selector);
  elements.classList.add('on');
  document.body.style.overflowY = 'hidden';
}

function toggleOff(selector) {
  const elements = document.querySelector(selector);
  elements.classList.remove('on');
  document.body.style.overflowY = 'scroll';
}

function toggleMobileMenu() {
  navLinks.classList.toggle('mobile-menu');
  menuHamburger.classList.toggle('toggle');
}

function scrollToSection(event) {
  event.preventDefault();

  const target = document.querySelector(event.target.hash);
  const position = target.offsetTop;

  window.scrollTo({
    top: position,
    behavior: 'smooth',
  });

  toggleMobileMenu();
}
