
const body = document.querySelector("body");
const profileSection = document.querySelector("#profileSection");
const navbar = document.querySelector(".navbar");
const slider = document.querySelector("#slider");
const headers = document.querySelectorAll(".headers");
const paragraph = document.querySelectorAll('.paragraph');
const slideBtn = document.querySelectorAll('.slideBtn');
const boxes = document.querySelectorAll(".box");
const slide = document.querySelectorAll(".slide");
const leftBoxes = document.querySelectorAll(".left-box");
const appear = document.querySelectorAll('.appear');


const slideUp = {
  distance: "20px",
  origin: "top",
  opacity: 0,
  delay: 500,
  duration: 500,
  easing: "ease-in-out",
  intervel: 200,
   reset: true,
  useTransform: true,
};

const topToBottom = {
   origin: "top",
   distance: "20px",
   duration: 600,
   interval:200,
   easing: "ease-in-out",
   reset: true,
   // useTransform: true
}
const bottomToTop = {
   origin: "bottom",
   distance: "20px",
   duration: 1000,
   interval: 700,
   scale: 1.1,
   reset: true,
   opacity:.5,
}
const leftToRight = {
   origin: "left",
   distance: "130px",
   duration: 1600,
   reset:true,
}
const rightToLeft = {
   origin: "right",
   distance: "130px",
   duration: 1700,
   reset: true,
}
const forBtn = {
   origin: 'bottom',
   duration:2000,
   distance:"20px",
}
const forBoxes = {
   origin: "bottom",
   distance: "20px",
   delay:300,
   opacity: 0,
   interval:300,
   duration: 900,
   reset:true,
}
const posts = {
  origin: "bottom",
  distance: "20px",
  delay: 300,
  opacity: 0,
  interval: 300,
  duration: 900,
  reset: true,
};
ScrollReveal().reveal(body, slideUp);
ScrollReveal().reveal(profileSection, slideUp);
ScrollReveal().reveal(navbar, topToBottom);
ScrollReveal().reveal(slider, bottomToTop);
ScrollReveal().reveal(headers, leftToRight);
ScrollReveal().reveal(paragraph, rightToLeft);
ScrollReveal().reveal(slideBtn, forBtn);
ScrollReveal().reveal(boxes, forBoxes);
ScrollReveal().reveal(slide, slideUp);
ScrollReveal().reveal(leftBoxes, leftToRight);
ScrollReveal().reveal(appear, posts);

