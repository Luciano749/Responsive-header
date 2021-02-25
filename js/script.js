let responsiveNav = document.getElementById("responsive-nav");
let responsiveMenu = document.getElementsByClassName("responsive-menu")[0];

function appear() {
  //   responsiveMenu.classList.toggle("responsive");

  if (responsiveMenu.className === "responsive-menu") {
    responsiveMenu.classList.add("responsive");
  } else {
    responsiveMenu.classList.add("disappear");

    setTimeout(() => {
      responsiveMenu.classList.remove("disappear");
      responsiveMenu.classList.remove("responsive");
    }, 900);
  }
}

responsiveNav.addEventListener("click", () => {
  appear();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 690) {
    responsiveMenu.classList.remove("responsive");
  }
});
