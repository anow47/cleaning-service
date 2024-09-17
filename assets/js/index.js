const closeIcon = document.querySelector('.close-icon');
const navBar = document.querySelector('.nav-bar');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('ul li a');

const words = [
	'تنظيف عام', 
	'تنظيف الفلل والقصور',
	'تنظيف المطاعم والكافيهات', 
	'تنظيف شقق',
	'تنظيف الأرضيات', 
	'رش حشرات',
	'تنظيف التكييف', 
	'تنظيف الكنب والمجالس', 
	'تنظيف ستائر والسجاد', 
	'تنظيف المطابخ والزجاج',
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  const currentFullWord = words[wordIndex];

  if (isDeleting) {
    letterIndex--;
    currentWord = currentFullWord.slice(0, letterIndex);
  } else {
    currentWord = currentFullWord.slice(0, letterIndex + 1);
    letterIndex++;
  }

  document.querySelector('.auto-type').textContent = currentWord;

  if (!isDeleting && letterIndex === currentFullWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(type, 500);
});

navLinks.forEach(nav => {
	nav.addEventListener('click', this.hideNavBar)
})
document.querySelector('.burger').addEventListener('click', this.showNavBar)
closeIcon.addEventListener('click', this.hideNavBar)
// navOverlay.addEventListener('click', this.hideNavBar)

function showNavBar() {
	navOverlay.classList.add('transparentBg')
	navBar.classList.add('show-nav-bar')
}
function hideNavBar() {
	navOverlay.classList.remove('transparentBg')
	navBar.classList.remove('show-nav-bar')
}


// Scroll To Top
const toTop = document.querySelector('.to-top');
window.onscroll = () => {
	window.scrollY >= 600 ? 
	toTop.style.display = 'block' : toTop.style.display = 'none'
}

toTop.onclick = function () {
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth',
	})
  }

//Animation on scroll element fade-in
const scrollElements = document.querySelectorAll(".js-scroll")

const elementInView = (el, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight) / dividend
	);
};

const elementOutofView = (el) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop > (window.innerHeight || document.documentElement.clientHeight)
	);
};

const displayScrollElement = (element) => {
	element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
	element.classList.remove("scrolled")
};

const handleScrollAnimation = () => {
	scrollElements.forEach((el) => {
		if (elementInView(el, 1.25)) {
			displayScrollElement(el)
		} else if (elementOutofView(el)) {
			hideScrollElement(el);
		}
	});
	
	// Remove the scroll event listener if all elements have been displayed
	if (document.querySelectorAll(".js-scroll.scrolled").length === scrollElements.length) {
		window.removeEventListener("scroll", handleScrollAnimation)
	}
};
window.addEventListener("scroll", handleScrollAnimation)
