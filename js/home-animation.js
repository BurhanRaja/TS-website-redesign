const observerKnowMoreOne = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelector("#arrow_know_more_one")
        .classList.add("arrow_know_more_one_animate");
    }
  });
});
if (document.querySelector("#arrow_know_more_one")){
  observerKnowMoreOne.observe(document.querySelector("#arrow_know_more_one"));
}

const observerSocialMediaHeroSvg = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelector("#social_media_svg_hero")
        .classList.add("social_media_svg_hero_animate");
    }
  });
});
if (document.querySelector("#social_media_svg_hero")) {
  observerSocialMediaHeroSvg.observe(
    document.querySelector("#social_media_svg_hero")
  );
}

const observerWebDesignSvgHero = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelector("#web_design_svg_hero")
        .classList.add("web_design_svg_hero_animate");
    }
  });
});
if (document.querySelector("#web_design_svg_hero")) {
observerWebDesignSvgHero.observe(
  document.querySelector("#web_design_svg_hero")
);
}

const observerCrmDashSvgHero = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelector("#crm_dash_svg_id_hero")
        .classList.add("crm_dash_svg_hero_animate");
    }
  });
});
if (document.querySelector("#crm_dash_svg_id_hero")) {
observerCrmDashSvgHero.observe(document.querySelector("#crm_dash_svg_id_hero"));
}

// --------------------------------- Know More Icon Animation - Start -------------------------------------------
const arrowKnowMoreOnePathOne = document.querySelector(
  "#arrow_know_more_one_path_one"
);
const arrowKnowMoreOnePathOneLength = arrowKnowMoreOnePathOne?.getTotalLength();

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
  socialMediaSvgHeroLineOne?.getTotalLength();
socialMediaSvgHeroLineOne.style.strokeDasharray =
  socialMediaSvgHeroLineOneLength;
socialMediaSvgHeroLineOne.style.strokeDashoffset =
  socialMediaSvgHeroLineOneLength;

// Rect One - Line Two
const socialMediaSvgHeroLineTwo = document.querySelector(
  "#social_media_svg_hero_rect_one_line_two"
);
const socialMediaSvgHeroLineTwoLength =
  socialMediaSvgHeroLineTwo?.getTotalLength();
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
  socialMediaSvgHeroGraphLineOne?.getTotalLength();
socialMediaSvgHeroGraphLineOne.style.strokeDasharray =
  socialMediaSvgHeroGraphLineOneLength;
socialMediaSvgHeroGraphLineOne.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineOneLength;

const socialMediaSvgHeroGraphLineTwoLength =
  socialMediaSvgHeroGraphLineTwo?.getTotalLength();
socialMediaSvgHeroGraphLineTwo.style.strokeDasharray =
  socialMediaSvgHeroGraphLineTwoLength;
socialMediaSvgHeroGraphLineTwo.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineTwoLength;

const socialMediaSvgHeroGraphLineThreeLength =
  socialMediaSvgHeroGraphLineThree?.getTotalLength();
socialMediaSvgHeroGraphLineThree.style.strokeDasharray =
  socialMediaSvgHeroGraphLineThreeLength;
socialMediaSvgHeroGraphLineThree.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineThreeLength;

const socialMediaSvgHeroGraphLineFourLength =
  socialMediaSvgHeroGraphLineFour?.getTotalLength();
socialMediaSvgHeroGraphLineFour.style.strokeDasharray =
  socialMediaSvgHeroGraphLineFourLength;
socialMediaSvgHeroGraphLineFour.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineFourLength;

const socialMediaSvgHeroGraphLineFiveLength =
  socialMediaSvgHeroGraphLineFive?.getTotalLength();
socialMediaSvgHeroGraphLineFive.style.strokeDasharray =
  socialMediaSvgHeroGraphLineFiveLength;
socialMediaSvgHeroGraphLineFive.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineFiveLength;

const socialMediaSvgHeroGraphLineSixLength =
  socialMediaSvgHeroGraphLineSix?.getTotalLength();
socialMediaSvgHeroGraphLineSix.style.strokeDasharray =
  socialMediaSvgHeroGraphLineSixLength;
socialMediaSvgHeroGraphLineSix.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineSixLength;

const socialMediaSvgHeroGraphLineSevenLength =
  socialMediaSvgHeroGraphLineSeven?.getTotalLength();
socialMediaSvgHeroGraphLineSeven.style.strokeDasharray =
  socialMediaSvgHeroGraphLineSevenLength;
socialMediaSvgHeroGraphLineSeven.style.strokeDashoffset =
  socialMediaSvgHeroGraphLineSevenLength;

// Instagram Gray
const socialMediaSvgHeroInstagramGray = document.querySelector(
  "#social_media_svg_hero_instagram_gray"
);
const socialMediaSvgHeroInstagramGrayLength =
  socialMediaSvgHeroInstagramGray?.getTotalLength();
socialMediaSvgHeroInstagramGray.style.strokeDasharray =
  socialMediaSvgHeroInstagramGrayLength;
socialMediaSvgHeroInstagramGray.style.strokeDashoffset =
  socialMediaSvgHeroInstagramGrayLength;

// Instagram Green
const socialMediaSvgHeroInstagramGreen = document.querySelector(
  "#social_media_svg_hero_instagram_green"
);
const socialMediaSvgHeroInstagramGreenLength =
  socialMediaSvgHeroInstagramGreen?.getTotalLength();
socialMediaSvgHeroInstagramGreen.style.strokeDasharray =
  socialMediaSvgHeroInstagramGreenLength;
socialMediaSvgHeroInstagramGreen.style.strokeDashoffset =
  socialMediaSvgHeroInstagramGreenLength;

// Linkedin Gray
const socialMediaSvgHeroLinkedInGray = document.querySelector(
  "#social_media_svg_hero_linkedin_gray"
);
const socialMediaSvgHeroLinkedInGrayLength =
  socialMediaSvgHeroLinkedInGray?.getTotalLength();
socialMediaSvgHeroLinkedInGray.style.strokeDasharray =
  socialMediaSvgHeroLinkedInGrayLength;
socialMediaSvgHeroLinkedInGray.style.strokeDashoffset =
  socialMediaSvgHeroLinkedInGrayLength;

// Linkedin Green
const socialMediaSvgHeroLinkedInGreen = document.querySelector(
  "#social_media_svg_hero_linkedin_green"
);
const socialMediaSvgHeroLinkedInGreenLength =
  socialMediaSvgHeroLinkedInGreen?.getTotalLength();
socialMediaSvgHeroLinkedInGreen.style.strokeDasharray =
  socialMediaSvgHeroLinkedInGreenLength;
socialMediaSvgHeroLinkedInGreen.style.strokeDashoffset =
  socialMediaSvgHeroLinkedInGreenLength;

// Youtube Gray
const socialMediaSvgHeroYoutubeGray = document.querySelector(
  "#social_media_svg_hero_youtube_gray"
);
const socialMediaSvgHeroYoutubeGrayLength =
  socialMediaSvgHeroYoutubeGray?.getTotalLength();
socialMediaSvgHeroYoutubeGray.style.strokeDasharray =
  socialMediaSvgHeroYoutubeGrayLength;
socialMediaSvgHeroYoutubeGray.style.strokeDashoffset =
  socialMediaSvgHeroYoutubeGrayLength;

// Youtube Green
const socialMediaSvgHeroYoutubeGreen = document.querySelector(
  "#social_media_svg_hero_youtube_green"
);
const socialMediaSvgHeroYoutubeGreenLength =
  socialMediaSvgHeroYoutubeGreen?.getTotalLength();
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
  webDesignHeroRectFrontOneHeadBodyRect?.getTotalLength();
webDesignHeroRectFrontOneHeadBodyRect.style.strokeDasharray =
  webDesignHeroRectFrontOneHeadBodyRectLength;
webDesignHeroRectFrontOneHeadBodyRect.style.strokeDashoffset =
  webDesignHeroRectFrontOneHeadBodyRectLength;

const webDesignHeroRectFrontOneHeadBodyRectBlTr = document.querySelector(
  "#web_design_hero_rect_front_one_body_rect_bl_tr"
);
const webDesignHeroRectFrontOneHeadBodyRectBlTrLength =
  webDesignHeroRectFrontOneHeadBodyRectBlTr?.getTotalLength();
webDesignHeroRectFrontOneHeadBodyRectBlTr.style.strokeDasharray =
  webDesignHeroRectFrontOneHeadBodyRectBlTrLength;
webDesignHeroRectFrontOneHeadBodyRectBlTr.style.strokeDashoffset =
  webDesignHeroRectFrontOneHeadBodyRectBlTrLength;

const webDesignHeroRectBlackCrossLineOne = document.querySelector(
  "#web_design_hero_rect_black_cross_line_one"
);
const webDesignHeroRectBlackCrossLineOneLength =
  webDesignHeroRectBlackCrossLineOne?.getTotalLength();
webDesignHeroRectBlackCrossLineOne.style.strokeDasharray =
  webDesignHeroRectBlackCrossLineOneLength;
webDesignHeroRectBlackCrossLineOne.style.strokeDashoffset =
  webDesignHeroRectBlackCrossLineOneLength;

const webDesignHeroRectBlackCrossLineTwo = document.querySelector(
  "#web_design_hero_rect_black_cross_line_two"
);
const webDesignHeroRectBlackCrossLineTwoLength =
  webDesignHeroRectBlackCrossLineTwo?.getTotalLength();
webDesignHeroRectBlackCrossLineTwo.style.strokeDasharray =
  webDesignHeroRectBlackCrossLineTwoLength;
webDesignHeroRectBlackCrossLineTwo.style.strokeDashoffset =
  webDesignHeroRectBlackCrossLineTwoLength;
// --------------------------------- Web Design Hero SVG Animation - End ----------------------------------

// --------------------------------- First Illustration (CRM Dashboard) - Start --------------------------

const crmDashSvgHeroCircleOne = document.querySelector("#crm_dash_svg_hero_circle_one");
const crmDashSvgHeroCircleOneLength = crmDashSvgHeroCircleOne?.getTotalLength();
crmDashSvgHeroCircleOne.style.strokeDasharray = crmDashSvgHeroCircleOneLength;
crmDashSvgHeroCircleOne.style.strokeDashoffset = crmDashSvgHeroCircleOneLength;

const crmDashSvgHeroCardTwoLineOne = document.querySelector("#crm_dash_svg_hero_card_two_line_one");
const crmDashSvgHeroCardTwoLineOneLength = crmDashSvgHeroCardTwoLineOne?.getTotalLength();
crmDashSvgHeroCardTwoLineOne.style.strokeDasharray = crmDashSvgHeroCardTwoLineOneLength;
crmDashSvgHeroCardTwoLineOne.style.strokeDashoffset = crmDashSvgHeroCardTwoLineOneLength;

const crmDashSvgHeroCardTwoLineTwo = document.querySelector("#crm_dash_svg_hero_card_two_line_two");
const crmDashSvgHeroCardTwoLineTwoLength = crmDashSvgHeroCardTwoLineTwo?.getTotalLength();
crmDashSvgHeroCardTwoLineTwo.style.strokeDasharray = crmDashSvgHeroCardTwoLineTwoLength;
crmDashSvgHeroCardTwoLineTwo.style.strokeDashoffset = crmDashSvgHeroCardTwoLineTwoLength;

const crmDashSvgHeroCardTwoLineThree = document.querySelector("#crm_dash_svg_hero_card_two_line_three");
const crmDashSvgHeroCardTwoLineThreeLength = crmDashSvgHeroCardTwoLineThree?.getTotalLength();
crmDashSvgHeroCardTwoLineThree.style.strokeDasharray = crmDashSvgHeroCardTwoLineThreeLength;
crmDashSvgHeroCardTwoLineThree.style.strokeDashoffset = crmDashSvgHeroCardTwoLineThreeLength;

const crmDashSvgHeroCardTwoLineFour = document.querySelector("#crm_dash_svg_hero_card_two_line_four");
const crmDashSvgHeroCardTwoLineFourLength = crmDashSvgHeroCardTwoLineFour?.getTotalLength();
crmDashSvgHeroCardTwoLineFour.style.strokeDasharray = crmDashSvgHeroCardTwoLineFourLength;
crmDashSvgHeroCardTwoLineFour.style.strokeDashoffset = crmDashSvgHeroCardTwoLineFourLength;

const crmDashSvgHeroCardTwoLineFive = document.querySelector("#crm_dash_svg_hero_card_two_line_five");
const crmDashSvgHeroCardTwoLineFiveLength = crmDashSvgHeroCardTwoLineFive?.getTotalLength();
crmDashSvgHeroCardTwoLineFive.style.strokeDasharray = crmDashSvgHeroCardTwoLineFiveLength;
crmDashSvgHeroCardTwoLineFive.style.strokeDashoffset = crmDashSvgHeroCardTwoLineFiveLength;

const crmDashSvgHeroCardTwoLineSix = document.querySelector("#crm_dash_svg_hero_card_two_line_six");
const crmDashSvgHeroCardTwoLineSixLength = crmDashSvgHeroCardTwoLineSix?.getTotalLength();
crmDashSvgHeroCardTwoLineSix.style.strokeDasharray = crmDashSvgHeroCardTwoLineSixLength;
crmDashSvgHeroCardTwoLineSix.style.strokeDashoffset = crmDashSvgHeroCardTwoLineSixLength;

const crmDashSvgHeroCardTwoLineSeven = document.querySelector("#crm_dash_svg_hero_card_two_line_seven");
const crmDashSvgHeroCardTwoLineSevenLength = crmDashSvgHeroCardTwoLineSeven?.getTotalLength();
crmDashSvgHeroCardTwoLineSeven.style.strokeDasharray = crmDashSvgHeroCardTwoLineSevenLength;
crmDashSvgHeroCardTwoLineSeven.style.strokeDashoffset = crmDashSvgHeroCardTwoLineSevenLength;

const crmDashSvgHeroCardTwoLineEight = document.querySelector("#crm_dash_svg_hero_card_two_line_eight");
const crmDashSvgHeroCardTwoLineEightLength = crmDashSvgHeroCardTwoLineEight?.getTotalLength();
crmDashSvgHeroCardTwoLineEight.style.strokeDasharray = crmDashSvgHeroCardTwoLineEightLength;
crmDashSvgHeroCardTwoLineEight.style.strokeDashoffset = crmDashSvgHeroCardTwoLineEightLength;

const crmDashSvgHeroCardTwoLineNine = document.querySelector("#crm_dash_svg_hero_card_two_line_nine");
const crmDashSvgHeroCardTwoLineNineLength = crmDashSvgHeroCardTwoLineNine?.getTotalLength();
crmDashSvgHeroCardTwoLineNine.style.strokeDasharray = crmDashSvgHeroCardTwoLineNineLength;
crmDashSvgHeroCardTwoLineNine.style.strokeDashoffset = crmDashSvgHeroCardTwoLineNineLength;

const crmDashSvgHeroCardTwoLineTen = document.querySelector("#crm_dash_svg_hero_card_two_line_ten");
const crmDashSvgHeroCardTwoLineTenLength = crmDashSvgHeroCardTwoLineTen?.getTotalLength();
crmDashSvgHeroCardTwoLineTen.style.strokeDasharray = crmDashSvgHeroCardTwoLineTenLength;
crmDashSvgHeroCardTwoLineTen.style.strokeDashoffset = crmDashSvgHeroCardTwoLineTenLength;

// 

// --------------------------------- First Illustration (CRM Dashboard) - End --------------------------
