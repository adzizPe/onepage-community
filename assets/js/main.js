/*==================== SHOW MENU ====================*/

// Menggunakan SweetAlert untuk meminta nama pengguna
Swal.fire({
  title: 'Tulis namamu disini:',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: false,
  confirmButtonText: 'Submit',
  showLoaderOnConfirm: true,
  allowOutsideClick: false
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(`Selamat Berkunjung: ${result.value}`);
  }
});
  // Loader logic
  window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    const mainContent = document.querySelector("#main-content");

    setTimeout(function() {
        loader.style.display = "none";
        mainContent.style.display = "block";
    }, 2000); // Loader delay 2 seconds
});



// Menunggu dokumen dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", () => {
  contentNotAvailable();
});

function contentNotAvailable() {
  // Menambahkan event listener pada semua elemen dengan kelas "nav__link"
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
      Swal.fire("konten belum ada", "", "info");
    });
  });

  // Menambahkan event listener pada tombol pencarian
  const searchButton = document.querySelector(".search-button");
  if (searchButton) {
    searchButton.addEventListener("click", () => {
      Swal.fire("konten belum ada", "", "info");
    });
  }

  // Menambahkan event listener pada semua tombol dengan kelas "btn"
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      Swal.fire("konten belum ada", "", "info");
    });
  });

  // Menambahkan event listener pada lokasi restoran terdekat
  const nearRestaurantLocation = document.querySelector(".near-restaurant-location");
  if (nearRestaurantLocation) {
    nearRestaurantLocation.addEventListener("click", () => {
      Swal.fire("konten belum ada", "", "info");
    });
  }

  // Menambahkan event listener pada semua elemen dengan kelas "our-chef-card"
  const ourChefCards = document.querySelectorAll(".our-chef-card");
  ourChefCards.forEach(ourChefCard => {
    ourChefCard.addEventListener("click", () => {
      Swal.fire("konten belum ada", "", "info");
    });
  });

  // Menambahkan event listener pada tombol chef
  const chefButton = document.querySelector(".chef-button");
  if (chefButton) {
    chefButton.addEventListener("click", () => {
      Swal.fire("konten belum ada", "", "info");
    });
  }
}


const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

// date days
document.getElementById('date').innerHTML = new Date().getFullYear()

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.toLocaleString('default', { month: 'long' });
let year = currentDate.getFullYear();
let formattedDate = currentDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
document.getElementById('header-date').innerHTML = formattedDate;

let week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
let dayNumber = new Date().getDay();
let dayName = week[dayNumber];
document.getElementById('days').innerHTML = dayName;