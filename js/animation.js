const observerKnowMoreOne = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelector("#arrow_know_more_one")
        .classList.add("arrow_know_more_one_animate");
    }
  });
});
observerKnowMoreOne.observe(document.querySelector("#arrow_know_more_one"));

const observerSocialMediaHeroSvg = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelector("#social_media_svg_hero")
        .classList.add("social_media_svg_hero_animate");
    }
  });
});
observerSocialMediaHeroSvg.observe(
  document.querySelector("#social_media_svg_hero")
);

const observerWebDesignSvgHero = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelector("#web_design_svg_hero")
        .classList.add("web_design_svg_hero_animate");
    }
  });
});
observerWebDesignSvgHero.observe(
  document.querySelector("#web_design_svg_hero")
);

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
const hamburgerNavAboutBtnBack = document.querySelector(
  ".hamburger_nav_about_btn_back"
);

// Services
const hamburgerNavServices = document.querySelector(".hamburger_nav_services");
const hamburgerNavServicesBtn = document.querySelector(
  ".hamburger_nav_services_btn"
);
const hamburgerNavServicesBtnBack = document.querySelector(
  ".hamburger_nav_services_btn_back"
);

// Solutions
const hamburgerNavSolutions = document.querySelector(
  ".hamburger_nav_solutions"
);
const hamburgerNavSolutionsBtn = document.querySelector(
  ".hamburger_nav_solutions_btn"
);
const hamburgerNavSolutionsBtnBack = document.querySelector(
  ".hamburger_nav_solutions_btn_back"
);

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
});

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
});

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
});

// -----------------------------------  Hamburger Navigation - End  -----------------------------------------------

// --------------------------------- Know More Icon Animation - Start -------------------------------------------
const arrowKnowMoreOnePathOne = document.querySelector(
  "#arrow_know_more_one_path_one"
);
const arrowKnowMoreOnePathOneLength = arrowKnowMoreOnePathOne.getTotalLength();

// Apply the calculated path length for smoother animation
arrowKnowMoreOnePathOne.style.strokeDasharray = arrowKnowMoreOnePathOneLength;
arrowKnowMoreOnePathOne.style.strokeDashoffset = arrowKnowMoreOnePathOneLength;

const arrowKnowMoreOneText = document.querySelector(".know_more_one_text");
arrowKnowMoreOneText.style.opacity = "1";
arrowKnowMoreOneText.style.marginRight = "0px";

// --------------------------------- Know More Icon Animation - End -------------------------------------------

// --------------------------------- Social Media Hero SVG Animation - Start ----------------------------------

// Rect One - Line One
const socialMediaSvgHeroLineOne = document.querySelector(
  "#social_media_svg_hero_rect_one_line_one"
);
const socialMediaSvgHeroLineOneLength =
  socialMediaSvgHeroLineOne.getTotalLength();
socialMediaSvgHeroLineOne.style.strokeDasharray =
  socialMediaSvgHeroLineOneLength;
socialMediaSvgHeroLineOne.style.strokeDashoffset =
  socialMediaSvgHeroLineOneLength;

// Rect One - Line Two
const socialMediaSvgHeroLineTwo = document.querySelector(
  "#social_media_svg_hero_rect_one_line_two"
);
const socialMediaSvgHeroLineTwoLength =
  socialMediaSvgHeroLineTwo.getTotalLength();
socialMediaSvgHeroLineTwo.style.strokeDasharray =
  socialMediaSvgHeroLineTwoLength;
socialMediaSvgHeroLineTwo.style.strokeDashoffset =
  socialMediaSvgHeroLineTwoLength;

// Graph Line with Arrow
const socialMediaSvgHeroGraphLineOne = document.querySelector(
  "#social_media_svg_hero_graph_line_one"
);
const socialMediaSvgHeroGraphLineTwo = document.querySelector(
  "#social_media_svg_hero_graph_line_two"
);
const socialMediaSvgHeroGraphLineThree = document.querySelector(
  "#social_media_svg_hero_graph_line_three"
);
const socialMediaSvgHeroGraphLineFour = document.querySelector(
  "#social_media_svg_hero_graph_line_four"
);
const socialMediaSvgHeroGraphLineFive = document.querySelector(
  "#social_media_svg_hero_graph_line_five"
);
const socialMediaSvgHeroGraphLineSix = document.querySelector(
  "#social_media_svg_hero_graph_line_six"
);
const socialMediaSvgHeroGraphLineSeven = document.querySelector(
  "#social_media_svg_hero_graph_line_seven"
);

const socialMediaSvgHeroGraphLineOneLength =
  socialMediaSvgHeroGraphLineOne.getTotalLength();
socialMediaSvgHeroGraphLineOne.style.strokeDasharray =
  socialMediaSvgHeroGraphLineOneLength;
socialMediaSvgHeroGraphLineOne.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineOneLength;

const socialMediaSvgHeroGraphLineTwoLength =
  socialMediaSvgHeroGraphLineTwo.getTotalLength();
socialMediaSvgHeroGraphLineTwo.style.strokeDasharray =
  socialMediaSvgHeroGraphLineTwoLength;
socialMediaSvgHeroGraphLineTwo.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineTwoLength;

const socialMediaSvgHeroGraphLineThreeLength =
  socialMediaSvgHeroGraphLineThree.getTotalLength();
socialMediaSvgHeroGraphLineThree.style.strokeDasharray =
  socialMediaSvgHeroGraphLineThreeLength;
socialMediaSvgHeroGraphLineThree.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineThreeLength;

const socialMediaSvgHeroGraphLineFourLength =
  socialMediaSvgHeroGraphLineFour.getTotalLength();
socialMediaSvgHeroGraphLineFour.style.strokeDasharray =
  socialMediaSvgHeroGraphLineFourLength;
socialMediaSvgHeroGraphLineFour.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineFourLength;

const socialMediaSvgHeroGraphLineFiveLength =
  socialMediaSvgHeroGraphLineFive.getTotalLength();
socialMediaSvgHeroGraphLineFive.style.strokeDasharray =
  socialMediaSvgHeroGraphLineFiveLength;
socialMediaSvgHeroGraphLineFive.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineFiveLength;

const socialMediaSvgHeroGraphLineSixLength =
  socialMediaSvgHeroGraphLineSix.getTotalLength();
socialMediaSvgHeroGraphLineSix.style.strokeDasharray =
  socialMediaSvgHeroGraphLineSixLength;
socialMediaSvgHeroGraphLineSix.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineSixLength;

const socialMediaSvgHeroGraphLineSevenLength =
  socialMediaSvgHeroGraphLineSeven.getTotalLength();
socialMediaSvgHeroGraphLineSeven.style.strokeDasharray =
  socialMediaSvgHeroGraphLineSevenLength;
socialMediaSvgHeroGraphLineSeven.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineSevenLength;

// Instagram Gray
const socialMediaSvgHeroInstagramGray = document.querySelector(
  "#social_media_svg_hero_instagram_gray"
);
const socialMediaSvgHeroInstagramGrayLength =
  socialMediaSvgHeroInstagramGray.getTotalLength();
socialMediaSvgHeroInstagramGray.style.strokeDasharray =
  socialMediaSvgHeroInstagramGrayLength;
socialMediaSvgHeroInstagramGray.style.strokeDashoffset =
  socialMediaSvgHeroInstagramGrayLength;

// Instagram Green
const socialMediaSvgHeroInstagramGreen = document.querySelector(
  "#social_media_svg_hero_instagram_green"
);
const socialMediaSvgHeroInstagramGreenLength =
  socialMediaSvgHeroInstagramGreen.getTotalLength();
socialMediaSvgHeroInstagramGreen.style.strokeDasharray =
  socialMediaSvgHeroInstagramGreenLength;
socialMediaSvgHeroInstagramGreen.style.strokeDashoffset =
  socialMediaSvgHeroInstagramGreenLength;

// Linkedin Gray
const socialMediaSvgHeroLinkedInGray = document.querySelector(
  "#social_media_svg_hero_linkedin_gray"
);
const socialMediaSvgHeroLinkedInGrayLength =
  socialMediaSvgHeroLinkedInGray.getTotalLength();
socialMediaSvgHeroLinkedInGray.style.strokeDasharray =
  socialMediaSvgHeroLinkedInGrayLength;
socialMediaSvgHeroLinkedInGray.style.strokeDashoffset =
  socialMediaSvgHeroLinkedInGrayLength;

// Linkedin Green
const socialMediaSvgHeroLinkedInGreen = document.querySelector(
  "#social_media_svg_hero_linkedin_green"
);
const socialMediaSvgHeroLinkedInGreenLength =
  socialMediaSvgHeroLinkedInGreen.getTotalLength();
socialMediaSvgHeroLinkedInGreen.style.strokeDasharray =
  socialMediaSvgHeroLinkedInGreenLength;
socialMediaSvgHeroLinkedInGreen.style.strokeDashoffset =
  socialMediaSvgHeroLinkedInGreenLength;

// Youtube Gray
const socialMediaSvgHeroYoutubeGray = document.querySelector(
  "#social_media_svg_hero_youtube_gray"
);
const socialMediaSvgHeroYoutubeGrayLength =
  socialMediaSvgHeroYoutubeGray.getTotalLength();
socialMediaSvgHeroYoutubeGray.style.strokeDasharray =
  socialMediaSvgHeroYoutubeGrayLength;
socialMediaSvgHeroYoutubeGray.style.strokeDashoffset =
  socialMediaSvgHeroYoutubeGrayLength;

// Youtube Green
const socialMediaSvgHeroYoutubeGreen = document.querySelector(
  "#social_media_svg_hero_youtube_green"
);
const socialMediaSvgHeroYoutubeGreenLength =
  socialMediaSvgHeroYoutubeGreen.getTotalLength();
socialMediaSvgHeroYoutubeGreen.style.strokeDasharray =
  socialMediaSvgHeroYoutubeGreenLength;
socialMediaSvgHeroYoutubeGreen.style.strokeDashoffset =
  socialMediaSvgHeroYoutubeGreenLength;
// --------------------------------- Social Media Hero SVG Animation - End ----------------------------------

// --------------------------------- Web Design Hero SVG Animation - Start ----------------------------------
const webDesignHeroRectFrontOneHeadBodyRect = document.querySelector(
  "#web_design_hero_rect_front_one_body_rect"
);
const webDesignHeroRectFrontOneHeadBodyRectLength =
  webDesignHeroRectFrontOneHeadBodyRect.getTotalLength();
webDesignHeroRectFrontOneHeadBodyRect.style.strokeDasharray =
  webDesignHeroRectFrontOneHeadBodyRectLength;
webDesignHeroRectFrontOneHeadBodyRect.style.strokeDashoffset =
  webDesignHeroRectFrontOneHeadBodyRectLength;

const webDesignHeroRectFrontOneHeadBodyRectBlTr = document.querySelector(
  "#web_design_hero_rect_front_one_body_rect_bl_tr"
);
const webDesignHeroRectFrontOneHeadBodyRectBlTrLength =
  webDesignHeroRectFrontOneHeadBodyRectBlTr.getTotalLength();
webDesignHeroRectFrontOneHeadBodyRectBlTr.style.strokeDasharray =
  webDesignHeroRectFrontOneHeadBodyRectBlTrLength;
webDesignHeroRectFrontOneHeadBodyRectBlTr.style.strokeDashoffset =
  webDesignHeroRectFrontOneHeadBodyRectBlTrLength;

const webDesignHeroRectBlackCrossLineOne = document.querySelector(
  "#web_design_hero_rect_black_cross_line_one"
);
const webDesignHeroRectBlackCrossLineOneLength =
  webDesignHeroRectBlackCrossLineOne.getTotalLength();
webDesignHeroRectBlackCrossLineOne.style.strokeDasharray =
  webDesignHeroRectBlackCrossLineOneLength;
webDesignHeroRectBlackCrossLineOne.style.strokeDashoffset =
  webDesignHeroRectBlackCrossLineOneLength;

const webDesignHeroRectBlackCrossLineTwo = document.querySelector(
  "#web_design_hero_rect_black_cross_line_two"
);
const webDesignHeroRectBlackCrossLineTwoLength =
  webDesignHeroRectBlackCrossLineTwo.getTotalLength();
webDesignHeroRectBlackCrossLineTwo.style.strokeDasharray =
  webDesignHeroRectBlackCrossLineTwoLength;
webDesignHeroRectBlackCrossLineTwo.style.strokeDashoffset =
  webDesignHeroRectBlackCrossLineTwoLength;
// --------------------------------- Web Design Hero SVG Animation - End ----------------------------------
