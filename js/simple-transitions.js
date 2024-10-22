function inView(element) {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// -------------------- Hero Section Title - Start ------------------
const heroTitleTextOne = document.querySelector(".hero_title_text_one");
heroTitleTextOne.style.opacity = "1";
heroTitleTextOne.style.marginLeft = "0px";

const heroTitleTextTwo = document.querySelector(".hero_title_text_two");
heroTitleTextTwo.style.opacity = "1";
heroTitleTextTwo.style.marginRight = "0px";

const text =
  "We are a web design agency helping businesses of all sizes get a better return from online activities. We design and build stunning bespoke websites. And we can help with a wide range of online marketing strategies. We have a complete Forex CRM Solution under one roof with Techysquad - The best Forex CRM Agency.";

let index = 0;
const speed = 10; // typing speed

function typeWriter() {
  if (index < text.length) {
    document.getElementById("hero_description_text").innerHTML +=
      text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function () {
  typeWriter();
};
// -------------------- Hero Section Title - End-----------------

// -------------------- Social Media Hero SVG - Start ------------------
// Rectangle - 1
// const socialMediaSvgHeroRectOne = document.querySelector(
//   ".social_media_svg_hero_rect_one"
// );
// socialMediaSvgHeroRectOne.style.opacity = "1";
// socialMediaSvgHeroRectOne.style.transform = "translateX(0px)";

// // Rectangle - 2
// const socialMediaSvgHeroRectTwo = document.querySelector(
//   ".social_media_svg_hero_rect_two"
// );
// socialMediaSvgHeroRectTwo.style.opacity = "1";
// socialMediaSvgHeroRectTwo.style.transform = "translateX(0px)";

// -------------------- Social Media Hero SVG - End ------------------

// -------------------- Web Design Hero SVG - Start ------------------
// const webDesignSvgHero = document.querySelector("#web_design_svg_hero");
// webDesignSvgHero.style.opacity = "1";
// webDesignSvgHero.style.transform = "translateX(0px)";
// -------------------- Web Design Hero SVG - End ------------------
