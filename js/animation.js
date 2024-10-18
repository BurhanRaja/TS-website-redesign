// -----------------------------------  Hamburger Navigation - Start -----------------------------------------------
const hamburger = document.querySelector(".ham_nav_btn");
const hamburgerBarBot = document.querySelector(".hamburger__bar_bot");
const hamburgerMenu = document.querySelector(".hamburger_main_menu");
const hamburgerNavigation = document.querySelector(".hamburger_navigation");
const hamburgerNavItem_1 = document.querySelector(".hamburger_nav_item_1");
const hamburgerNavItem_2 = document.querySelector(".hamburger_nav_item_2");
const hamburgerNavItem_3 = document.querySelector(".hamburger_nav_item_3");
const hamburgerNavItem_4 = document.querySelector(".hamburger_nav_item_4");
const hamburgerNavItem_5 = document.querySelector(".hamburger_nav_item_5");

// About
const hamburgerNavAbout = document.querySelector(".hamburger_nav_about");
const hamburgerNavAboutBtn = document.querySelector(".hamburger_nav_about_btn");
const hamburgerNavAboutBtnBack = document.querySelector(".hamburger_nav_about_btn_back");

// Services
const hamburgerNavServices = document.querySelector(".hamburger_nav_services");
const hamburgerNavServicesBtn = document.querySelector(".hamburger_nav_services_btn");
const hamburgerNavServicesBtnBack = document.querySelector(".hamburger_nav_services_btn_back");

// Solutions
const hamburgerNavSolutions = document.querySelector(".hamburger_nav_solutions");
const hamburgerNavSolutionsBtn = document.querySelector(".hamburger_nav_solutions_btn");
const hamburgerNavSolutionsBtnBack = document.querySelector(".hamburger_nav_solutions_btn_back");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-opened");
  if (hamburger.classList.contains("is-opened")) {
    hamburgerBarBot.setAttribute("x2", "100%");
    hamburgerMenu.style.borderBottomLeftRadius = "0px";
    hamburgerMenu.style.padding = "2rem";
    hamburgerMenu.style.height = "100vh";
    hamburgerMenu.style.width = "100%";
    hamburgerMenu.style.top = "0";
    hamburgerMenu.style.right = "0";
  } else {
    hamburgerBarBot.setAttribute("x2", "50%");

    hamburgerNavAbout.classList.remove("is_open_about");
    hamburgerNavAbout.style.transform = "translateX(1000px)";

    hamburgerNavServices.classList.remove("is_open_services");
    hamburgerNavServices.style.transform = "translateX(1000px)";

    hamburgerNavSolutions.classList.remove("is_open_solutions");
    hamburgerNavSolutions.style.transform = "translateX(1000px)";
    // hamburgerMenu.style.borderBottomLeftRadius = "1000px";
    // hamburgerMenu.style.padding = "0";
    // hamburgerMenu.style.height = "0";
    // hamburgerMenu.style.width = "0";
    // hamburgerMenu.style.top = "0"
    // hamburgerMenu.style.right = "0"
    hamburgerNavItem_1.style.opacity = "0";
    hamburgerNavItem_1.style.marginLeft = "-60px";

    hamburgerNavItem_2.style.opacity = "0";
    hamburgerNavItem_2.style.marginLeft = "-60px";

    hamburgerNavItem_3.style.opacity = "0";
    hamburgerNavItem_3.style.marginLeft = "-60px";

    hamburgerNavItem_4.style.opacity = "0";
    hamburgerNavItem_4.style.marginLeft = "-60px";

    hamburgerNavItem_5.style.opacity = "0";
    hamburgerNavItem_5.style.marginLeft = "-60px";
  }
});

hamburgerMenu.addEventListener("transitionend", (e) => {
  if (e.propertyName == "width" && e.target.style.width == "100%") {
    hamburgerNavItem_1.style.opacity = "1";
    hamburgerNavItem_1.style.marginLeft = "0px";

    hamburgerNavItem_2.style.opacity = "1";
    hamburgerNavItem_2.style.marginLeft = "0px";

    hamburgerNavItem_3.style.opacity = "1";
    hamburgerNavItem_3.style.marginLeft = "0px";

    hamburgerNavItem_4.style.opacity = "1";
    hamburgerNavItem_4.style.marginLeft = "0px";

    hamburgerNavItem_5.style.opacity = "1";
    hamburgerNavItem_5.style.marginLeft = "0px";
  }
});

hamburgerNavItem_5.addEventListener("transitionend", (e) => {
  if (e.propertyName == "margin-left" && e.target.style.marginLeft == "-60px") {
    hamburgerMenu.style.borderBottomLeftRadius = "1000px";
    hamburgerMenu.style.padding = "0";
    hamburgerMenu.style.height = "0";
    hamburgerMenu.style.width = "0";
    hamburgerMenu.style.top = "0";
    hamburgerMenu.style.right = "0";
  }
});

// About
hamburgerNavAboutBtn.addEventListener("click", (e) => {
  if (!hamburgerNavAbout.classList.contains("is_open_about")) {
    hamburgerNavAbout.classList.add("is_open_about");
    hamburgerNavAbout.style.transform = "translateX(0px)";
  } else {
    hamburgerNavAbout.classList.remove("is_open_about");
    hamburgerNavAbout.style.transform = "translateX(1000px)";
  }
});

hamburgerNavAboutBtnBack.addEventListener("click", (e) => {
  hamburgerNavAbout.classList.remove("is_open_about");
  hamburgerNavAbout.style.transform = "translateX(1000px)";
})

// Services
hamburgerNavServicesBtn.addEventListener("click", (e) => {
  if (!hamburgerNavServices.classList.contains("is_open_services")) {
    hamburgerNavServices.classList.add("is_open_services");
    hamburgerNavServices.style.transform = "translateX(0px)";
  } else {
    hamburgerNavServices.classList.remove("is_open_services");
    hamburgerNavServices.style.transform = "translateX(1000px)";
  }
});

hamburgerNavServicesBtnBack.addEventListener("click", (e) => {
  hamburgerNavServices.classList.remove("is_open_services");
  hamburgerNavServices.style.transform = "translateX(1000px)";
})

// Solutions
hamburgerNavSolutionsBtn.addEventListener("click", (e) => {
  if (!hamburgerNavSolutions.classList.contains("is_open_solutions")) {
    hamburgerNavSolutions.classList.add("is_open_solutions");
    hamburgerNavSolutions.style.transform = "translateX(0px)";
  } else {
    hamburgerNavSolutions.classList.remove("is_open_solutions");
    hamburgerNavSolutions.style.transform = "translateX(1000px)";
  }
});

hamburgerNavSolutionsBtnBack.addEventListener("click", (e) => {
  hamburgerNavSolutions.classList.remove("is_open_solutions");
  hamburgerNavSolutions.style.transform = "translateX(1000px)";
})

// -----------------------------------  Hamburger Navigation - End  -----------------------------------------------
