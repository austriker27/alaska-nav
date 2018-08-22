window.addEventListener('click', function () {

});

//-------------------------------------------------------------
//  Listen for click event on toggle which is on the more menu item on the footer
//-------------------------------------------------------------

// for IE10, .getElementsByClassName()[0];
let overflowTarget = document.querySelector(".overflow-target");
// let openClose = document.querySelectorAll(".open-close");

let overflowMenuParent = document.querySelector(".overflow");
let overflowChildren = overflowMenuParent.querySelectorAll(".overflow > .parent-nav > .sub-item");

// let burgerMenu = document.querySelectorAll(".burger-menu");


overflowTarget.addEventListener('click', function () {
  overflowTarget.classList.toggle("active");
  overflowChildren.forEach(function (child) {
    child.classList.toggle("hide");
    child.classList.toggle("slide-up-fade-in")
  })
  // burgerMenu.classList.toggle("openClose");
}, false);


// let safetyBottomBar = document.querySelector("#safety-bottom-bar");
// let safetyParent = document.querySelector(".safety");
// let safetyChildren = safetyParent.querySelectorAll(".safety > .parent-nav > .sub-item");

// safetyBottomBar.addEventListener('click', function () {
//   safetyBottomBar.classList.toggle("active");
//   safetyChildren.forEach(function (child) {
//     child.classList.toggle("hide");
//     child.classList.toggle("slide-up-fade-in");

//   }, false);


//-------------------------------------------------------------
// event listeners for bottom bar - safety
//-------------------------------------------------------------

let safetyBottomBar = document.querySelector("#safety-bottom-bar");
let safetyParent = document.querySelector(".safety");
let safetyChildren = safetyParent.querySelectorAll(".safety > .parent-nav > .sub-item");

safetyBottomBar.addEventListener('click', function () {
  safetyBottomBar.classList.toggle("active");
  safetyChildren.forEach(function (child) {
  child.classList.toggle("hide");
  child.classList.toggle("slide-up-fade-in");

}, false);


// let scheduleBottomBar = document.querySelector("#schedule-bottom-bar");
// let scheduleParent = document.querySelector(".schedule");
// let scheduleChildren = scheduleParent.querySelectorAll(".schedule > .parent-nav > .sub-item");

// scheduleBottomBar.addEventListener('click', function () {
//   scheduleBottomBar.classList.toggle("active");
//   scheduleChildren.forEach(function (child) {
//     child.classList.toggle("hide");
//     child.classList.toggle("slide-up-fade-in");
//   }, false);


//-------------------------------------------------------------
// event listener for reporting menu inside safety
//-------------------------------------------------------------

let reportingMenu = document.querySelector("#reporting");
let reportingItems = document.querySelectorAll(".reporting-item");

reportingMenu.addEventListener('click', function () {
  console.log("safetyBottomBar clicked");
  reportingItems.classList.toggle("hide");
  reportingItems.classList.toggle("slide-up-fade-in");
  })
}, false);


//-------------------------------------------------------------
// event listener for bottom bar - admin menu
//-------------------------------------------------------------

let adminMenu = document.querySelector("#admin-bottom-bar");
let adminParent = document.querySelector(".admin");
let adminChildren = adminParent.querySelectorAll(".admin > .parent-nav > .sub-item");

adminMenu.addEventListener('click', function () {
  adminMenu.classList.toggle("active");
  adminChildren.forEach(function (child) {
  child.classList.toggle("hide");
  child.classList.toggle("slide-up-fade-in");
  })
}, false);



//-------------------------------------------------------------
// event listeners for bottom bar - schedule
//-------------------------------------------------------------

let scheduleBottomBar = document.querySelector("#schedule-bottom-bar");
let scheduleParent = document.querySelector(".schedule");
let scheduleChildren = scheduleParent.querySelectorAll(".schedule > .parent-nav > .sub-item");

scheduleBottomBar.addEventListener('click', function () {
  scheduleBottomBar.classList.toggle("active");
  scheduleChildren.forEach(function (child) {
    child.classList.toggle("hide");
    child.classList.toggle("slide-up-fade-in");
  })
}, false);

//-------------------------------------------------------------
// listen for click on menu-has-children and toggle sub-item class
//-------------------------------------------------------------

// let 
// let parentNav = document.querySelector(".sub-parent-nav");
// let subItem = document.querySelectorAll(".sub-item");

// parentNav.addEventListener('click', function () {
//   console.log("parentNav clicked");
// }, false);



// let scheduleBottomBar = document.querySelector("#schedule-bottom-bar");
// let scheduleParent = document.querySelector(".schedule");
// let scheduleChildren = scheduleParent.querySelectorAll(".schedule > .parent-nav > .sub-item");

// scheduleBottomBar.addEventListener('click', function () {
//   scheduleBottomBar.classList.toggle("active");
//   scheduleChildren.forEach(function (child) {
//     child.classList.toggle("hide");
//     child.classList.toggle("slide-up-fade-in");
//   })
// }, false);