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


