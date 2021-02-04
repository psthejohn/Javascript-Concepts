// ======= VARIABLES ======

const body = document.body;

// Header Elements
let nav = document.createElement('nav');
let headerLogo = document.createElement('img');
let divHeaderButtons = document.createElement('div');
let ul = document.createElement('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
//  Carousel
let divCarousel = document.createElement('div');
let sectionCarousel1 = document.createElement('section');
let sectionCarousel2 = document.createElement('section');
let divSection1 = document.createElement('div');
let divSection2 = document.createElement('div');
let carouselImg = document.createElement('img');
let h2Carousel = document.createElement('h2');

// ======= STRUCTURE ======

body.append(nav);
nav.append(headerLogo);
nav.append(divHeaderButtons);
divHeaderButtons.append(ul);
ul.append(li1);
ul.append(li2);
ul.append(li3);
body.append(divCarousel);
divCarousel.append(sectionCarousel1);
divCarousel.append(sectionCarousel2);
sectionCarousel1.append(divSection1);
sectionCarousel2.append(divSection2);
divSection2.append(carouselImg);
divSection1.append(h2Carousel);

//  ======= STYLE DECLARATION(ID or CLASSNAME DEFINING)    ===========

// TAG.className = "CLASS_NAME";
// TAG.setAttribute("id", "ID_NAME");
headerLogo.className = "headerLogo"
sectionCarousel1.className="carouselContent"
sectionCarousel2.className = "carouselContent";

// ======= DATA =============

// Header Data
headerLogo.src = "./assets/Pushpinder_logo.png"
li1.innerText = "My Projects";
li2.innerText = "Snippets";
li3.innerText = "About Me";

// Carousel Data
h2Carousel.innerText = "Welcome to the world of coding"
carouselImg.src = "./assets/carousel2.png";

//   ========== STYLING ===========

//Header


var navTag = document.querySelector('nav').style;

navTag.display = "flex";
navTag.justifyContent = "space-between";
navTag.height = "10vh";
navTag.minHeight = "5em";
navTag.alignItems = "center";
navTag.background = "linear-gradient(45deg, #62b1cc, #12c2fd, #fff)";
ul.style.listStyle = "none";
ul.style.display = "flex";
li1.style.margin = "0rem 3rem";
li2.style.margin = "0rem 3rem";
li3.style.margin = "0rem 3rem";

// Carousel

divCarousel.style.display = "grid";
divCarousel.style.gridTemplateColumns = "1fr 1fr";
divCarousel.style.gridTemplateRows = "1fr";
divCarousel.style.gap = "3px 10px";
divCarousel.style.gridTemplateAreas = ". .";

sectionCarousel1.style.height = "60vh";
sectionCarousel1.style.background = "red";
sectionCarousel2.style.display = "flex";
sectionCarousel2.style.justifyContent = "center";
sectionCarousel2.style.alignItems = "center";

sectionCarousel2.style.height = "60vh";
sectionCarousel2.style.background = "cyan";
sectionCarousel2.style.display = "flex";
sectionCarousel2.style.justifyContent = "center";
sectionCarousel2.style.alignItems = "center";
sectionCarousel2.style.objectFit = "contain";
carouselImg.style.width="70%"

// document.getElementsByClassName("carouselContent").style.alignItems="center";
// document.getElementsByClassName("carouselContent").style.marginjustifyContent="center";
// document.getElementsByClassName("carouselContent").style.background="red";