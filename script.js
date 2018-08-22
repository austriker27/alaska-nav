window.addEventListener('click', function () {
});

//-------------------------------------------------------------
// variables for bottom bar - overflow
//-------------------------------------------------------------
// for IE10, .getElementsByClassName()[0];
let overflowTarget = document.querySelector(".overflow-target");
// let openClose = document.querySelectorAll(".open-close");

let overflowMenuParent = document.querySelector(".overflow");
let overflowChildren = overflowMenuParent.querySelectorAll(".overflow > .parent-nav > .sub-item");

// let burgerMenu = document.querySelectorAll(".burger-menu");

let allBottomBar = document.querySelector(".bottom-nav");
let bottomChildren = allBottomBar.querySelectorAll(".bottom-nav > li");


//-------------------------------------------------------------
// variables for bottom bar - safety
//-------------------------------------------------------------
let safetyBottomBar = document.querySelector("#safety-bottom-bar");
let safetyParent = document.querySelector(".safety");
let safetyChildren = safetyParent.querySelectorAll(".safety > .parent-nav > .sub-item");

//-------------------------------------------------------------
// variables for bottom bar - admin
//-------------------------------------------------------------
let adminMenu = document.querySelector("#admin-bottom-bar");
let adminParent = document.querySelector(".admin");
let adminChildren = adminParent.querySelectorAll(".admin > .parent-nav > .sub-item");

//-------------------------------------------------------------
// variables for bottom bar - schedule
//-------------------------------------------------------------
let scheduleBottomBar = document.querySelector("#schedule-bottom-bar");
let scheduleParent = document.querySelector(".schedule");
let scheduleChildren = scheduleParent.querySelectorAll(".schedule > .parent-nav > .sub-item");

let parentNav = document.querySelector(".parent-nav");
// let allMenuChildren = parentNav.querySelectorAll('.parent-nav > .sub-item');

//-------------------------------------------------------------
// variables for sub-menu inside reporting
//-------------------------------------------------------------
let reportingTarget = document.querySelector("#reporting");
let reportingParent = document.querySelector(".sub-parent-nav");
let reportingChildren = reportingParent.querySelectorAll(".sub-parent-nav > .sub-item");

//-------------------------------------------------------------
//  event listener on bottom bar - overflow
//-------------------------------------------------------------
overflowTarget.addEventListener('click', function () {
  // remove active off all bottom nav bars
  bottomChildren.forEach(function (child) {
    child.classList.remove("active");
  })

  overflowTarget.classList.toggle("active");
  overflowChildren.forEach(function (child) {
    child.classList.toggle("hide");
    child.classList.toggle("slide-up-fade-in")
  })
  // burgerMenu.classList.toggle("openClose");

  adminChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  scheduleChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  adminChildren.forEach(function (child) {
    child.classList.add("hide");
  })
}, false);


//-------------------------------------------------------------
// event listeners for bottom bar - safety
//-------------------------------------------------------------
safetyBottomBar.addEventListener('click', function () {
  // remove active off all bottom nav bars
  bottomChildren.forEach(function (child) {
    child.classList.remove("active");
  })

  safetyBottomBar.classList.toggle("active");
  safetyChildren.forEach(function (child) {
  child.classList.toggle("hide");
  child.classList.toggle("slide-up-fade-in");

  adminChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  scheduleChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  overflowChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  }, false);
});

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
// event listener for bottom bar - admin menu
//-------------------------------------------------------------
adminMenu.addEventListener('click', function () {
  // remove active off all bottom nav bars
  bottomChildren.forEach(function (child) {
    child.classList.remove("active");
  })

  adminMenu.classList.toggle("active");
  adminChildren.forEach(function (child) {
  child.classList.toggle("hide");
  child.classList.toggle("slide-up-fade-in");
  })

  safetyChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  scheduleChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  overflowChildren.forEach(function (child) {
    child.classList.add("hide");
  })
}, false);



//-------------------------------------------------------------
// event listeners for bottom bar - schedule
//-------------------------------------------------------------
scheduleBottomBar.addEventListener('click', function () {
  // remove active off all bottom nav bars
  bottomChildren.forEach(function (child) {
    child.classList.remove("active");
  })

  scheduleBottomBar.classList.toggle("active");

  scheduleChildren.forEach(function (child) {
    child.classList.toggle("hide");
    child.classList.toggle("slide-up-fade-in");
  })
  safetyChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  adminChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  overflowChildren.forEach(function (child) {
    child.classList.add("hide");
  })
}, false);


//-------------------------------------------------------------
// event listener for reporting menu inside safety
//-------------------------------------------------------------
reportingTarget.addEventListener('click', function () {
  console.log("reportingTarget clicked");
  console.log(reportingChildren)
  reportingChildren.forEach(function (child) {
    child.classList.toggle("hide");
    child.classList.toggle("slide-down-fade-in");
  })
}, false);


// let reportingTarget = document.querySelector("#reporting");
// let reportingParent = document.querySelector(".sub-parent-nav");
// let reportingChildren = reportingParent.querySelectorAll("#reporting > .sub-parent-nav > .sub-item");

// scheduleBottomBar.addEventListener('click', function () {
//   // remove active off all bottom nav bars
//   bottomChildren.forEach(function (child) {
//     child.classList.remove("active");
//   })

//   scheduleBottomBar.classList.toggle("active");

//   scheduleChildren.forEach(function (child) {
//     child.classList.toggle("hide");
//     child.classList.toggle("slide-up-fade-in");
//   })


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
