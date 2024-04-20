const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);
const slideWidth = slides[0].getBoundingClientRect().width;

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

carousel.addEventListener('mousedown', startDrag);
carousel.addEventListener('mouseup', endDrag);
carousel.addEventListener('mouseleave', endDrag);
carousel.addEventListener('mousemove', drag);

carousel.addEventListener('touchstart', startDrag);
carousel.addEventListener('touchend', endDrag);
carousel.addEventListener('touchmove', drag);

function startDrag(event) {
  if (event.type === 'touchstart') {
    startPosition = event.touches[0].clientX;
  } else {
    startPosition = event.clientX;
  }

  isDragging = true;

  // Remove transition effect to prevent glitching while dragging
  cancelAnimationFrame(animationID);
}

function drag(event) {
  if (isDragging) {
    const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
    const diff = currentPosition - startPosition;
    currentTranslate = prevTranslate + diff;

    carousel.style.transform = `translateX(${currentTranslate}px)`;
  }
}

function endDrag(event) {
  isDragging = false;

  // Calculate which slide to snap to
  const dragThreshold = slideWidth * 0.3; // Minimum distance required to drag for slide change

  if (currentTranslate - prevTranslate < -dragThreshold && currentTranslate !== prevTranslate) {
    currentIndex = (currentIndex + 1) % slides.length;
  } else if (currentTranslate - prevTranslate > dragThreshold && currentTranslate !== prevTranslate) {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  }

  moveToSlide();
}

function moveToSlide() {
  // Calculate the position to move to
  const targetPosition = currentIndex * -slideWidth;

  // Animate the carousel to the target position
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const ease = easeOutCubic(progress, currentTranslate, targetPosition - currentTranslate, 300);
    carousel.style.transform = `translateX(${ease}px)`;
    if (progress < 300) {
      animationID = requestAnimationFrame(step);
    } else {
      currentTranslate = targetPosition;
      prevTranslate = targetPosition;
    }
  }
  animationID = requestAnimationFrame(step);
}

// Easing function for smooth animation
function easeOutCubic(t, b, c, d) {
  t /= d;
  t--;
  return c * (t * t * t + 1) + b;
}


// Navbar

var navbars = document.getElementById("navbars");
var hamburgerMenu = document.getElementById("hamburger-menu");
var closee = document.getElementById("close");
var consultacy = document.getElementById("consultacy");
var dropdownes = document.getElementById("dropdownes");
var certificatdropdown = document.getElementById("certificatdropdown");
var certificat = document.getElementById("certificat");
var services = document.getElementById("services");
var servicesdropdown = document.getElementById("servicesdropdown");
var company = document.getElementById("company");
var companydropdown = document.getElementById("companydropdown");



company.addEventListener("click", function() {
  if (companydropdown.style.display === "flex") {
    companydropdown.style.display = "none"; // Navbarı göster
  } else {
    companydropdown.style.display = "flex"; // Navbarı gizle
  }
});



services.addEventListener("click", function() {
  if (servicesdropdown.style.display === "flex") {
    servicesdropdown.style.display = "none"; // Navbarı göster
  } else {
    servicesdropdown.style.display = "flex"; // Navbarı gizle
  }
});


certificat.addEventListener("click", function() {
  if (certificatdropdown.style.display === "flex") {
    certificatdropdown.style.display = "none"; // Navbarı göster
  } else {
    certificatdropdown.style.display = "flex"; // Navbarı gizle
  }
});


consultacy.addEventListener("click", function() {
  if (dropdownes.style.display === "flex") {
    dropdownes.style.display = "none"; // Navbarı göster
  } else {
    dropdownes.style.display = "flex"; // Navbarı gizle
  }
});


hamburgerMenu.addEventListener("click", function() {
    if (navbars.style.display === "none") {
        navbars.style.display = "flex"; // Navbarı göster
    } else {
        navbars.style.display = "none"; // Navbarı gizle
    }
});

closee.addEventListener("click", function() {
  if (navbars.style.display === "none") {
      navbars.style.display = "flex"; // Navbarı göster
  } else {
      navbars.style.display = "none"; // Navbarı gizle
  }
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


var searchIcon = document.getElementById('search');
var searchInput = document.getElementById('search-input');

searchIcon.addEventListener('mouseenter', function() {
  searchInput.classList.remove('hidden');
  searchInput.focus();
});

searchInput.addEventListener('mouseleave', function() {
  searchInput.classList.add('hidden');
});

searchInput.addEventListener('keyup', function(event) {
  if (event.key === "Enter") {
    // Arama işlemini burada gerçekleştirin (örneğin, bir AJAX isteği gönderin)
    console.log("Arama: ", searchInput.value);
  }
});


