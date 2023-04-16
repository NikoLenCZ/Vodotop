
let menu = document.querySelector(".navbar-icon");
let navList = document.querySelector(".nav-list")
let menuIcon = document.querySelector(".icofont-rounded-expand")
menu.onclick = function() {
  navList.classList.toggle("show");
  menuIcon.classList.toggle("rotate");
};

let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach( navLink => {
  navLink.addEventListener("click", () => {
    navList.classList.toggle("show");
    menuIcon.classList.toggle("rotate");
  })
})

let faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})