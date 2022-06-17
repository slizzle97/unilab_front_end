const hamburger = document.querySelector(".phone-burger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
// const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// ჰამბურგერი იმალება მაშინ როცა რომელიმე ნავგიაციის ლინკს დავაკლიკებთ
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
