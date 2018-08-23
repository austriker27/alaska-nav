window.addEventListener('click', function () {
});

//-------------------------------------------------------------
// variables for bottom bar - overflow
//-------------------------------------------------------------
let overflowTarget = document.querySelector(".overflow-target");

let overflowMenuParent = document.querySelector(".overflow");
let overflowChildren = overflowMenuParent.querySelectorAll(".overflow > .parent-nav > .sub-item");

let allBottomBar = document.querySelector(".bottom-nav");

let bottomChildren = allBottomBar.querySelectorAll(".bottom-nav > li");

//-------------------------------------------------------------
// hamburger variable
//-------------------------------------------------------------
// let hamburgerTarget = document.querySelector('.nav-toggle');
// let overflowTarget = document.querySelector(".overflow-target");

let hamburgerParent = document.querySelector('.overflow-target');
let hamburgerChildren = document.querySelectorAll(".overflow-target > .nav-toggle");

//-------------------------------------------------------------
// variables to go to empty state
//-------------------------------------------------------------
let allSubItems = document.querySelectorAll(".sub-parent-nav .sub-item")

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

//-------------------------------------------------------------
// variables for sub-menus inside reporting
//-------------------------------------------------------------
let reportingTarget = document.querySelector("#reporting");
let reportingParent = document.querySelector(".safety .parent-nav");
let reportingChildren = document.querySelectorAll("#reporting .sub-item");

let agCustomsTarget = document.querySelector("#agCustoms");
let agCustomsParent = document.querySelector(".safety .parent-nav");
let agCustomsChildren = document.querySelectorAll("#agCustoms .sub-item");


//-------------------------------------------------------------
// empty state when bottom bar clicked
//-------------------------------------------------------------
allBottomBar.addEventListener('click', function () {
  allSubItems.forEach(function (child) {
    child.classList.add("hide");
  })
}, false);

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
  })

  adminChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  scheduleChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  safetyChildren.forEach(function (child) {
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
  hamburgerChildren.forEach(function (child) {
    child.classList.remove("opened");
  })

  safetyBottomBar.classList.toggle("active");
  safetyChildren.forEach(function (child) {
  child.classList.toggle("hide");
  // child.classList.toggle("slide-up-fade-in");

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
    // child.classList.toggle("slide-up-fade-in");
//   }, false);


//-------------------------------------------------------------
// event listener for bottom bar - admin menu
//-------------------------------------------------------------
adminMenu.addEventListener('click', function () {
  // remove active off all bottom nav bars
  bottomChildren.forEach(function (child) {
    child.classList.remove("active");
  })
  hamburgerChildren.forEach(function (child) {
    child.classList.remove("opened");
  })

  adminMenu.classList.toggle("active");
  adminChildren.forEach(function (child) {
    child.classList.toggle("hide");
    // child.classList.toggle("slide-up-fade-in");
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
  hamburgerChildren.forEach(function (child) {
    child.classList.remove("opened");
  })


  scheduleBottomBar.classList.toggle("active");

  scheduleChildren.forEach(function (child) {
    child.classList.toggle("hide");
    // child.classList.toggle("slide-up-fade-in");
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

  reportingChildren.forEach(function (child) {
    child.classList.toggle("hide");
  })
  agCustomsChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  // reportingTarget.classList.toggle("menu-has-children")
}, false);

//-------------------------------------------------------------
// event listener for ag and customs menu inside safety
//-------------------------------------------------------------
agCustomsTarget.addEventListener('click', function () {

  agCustomsChildren.forEach(function (child) {
    child.classList.toggle("hide");
  })
  reportingChildren.forEach(function (child) {
    child.classList.add("hide");
  })
  // agCustomsTarget.classList.toggle("menu-has-children")
}, false);


//-------------------------------------------------------------
// hamburger open on click
//-------------------------------------------------------------

overflowTarget.addEventListener('click', function () {

  hamburgerChildren.forEach(function (child) {
    child.classList.toggle("opened");
  })
}, false);


// hamburgerTarget.addEventListener('click', function (e) {
//   this.classList.remove('opened');
// });

// overflowTarget.addEventListener('click', function () {

//   hamburgerChildren.forEach(function (child) {
//     child.classList.remove("opened");
//   })
// }, false);




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
    // child.classList.toggle("slide-up-fade-in");
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
    // child.classList.toggle("slide-up-fade-in");
//   })
// }, false);
