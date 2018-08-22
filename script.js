window.addEventListener('click', function () {

});

//-------------------------------------------------------------
//  Listen for click event on toggle which is on the more menu item on the footer
//-------------------------------------------------------------

// for IE10, .getElementsByClassName()[0];
let toggle = document.querySelector(".toggle");
let openClose = document.querySelector(".open-close");

let overflowMenu = document.querySelector(".overflow-menu");
let burgerMenu = document.querySelector(".burger-menu");


toggle.addEventListener('click', function () {
  console.log("toggle clicked");
  // toggle class "active" and "openclose" on itemsInNav var
  overflowMenu.classList.toggle("flex-col");
  burgerMenu.classList.toggle("openClose");
}, false);

//-------------------------------------------------------------
// event listeners for bottom bar - safety
//-------------------------------------------------------------

let safetyBottomBar = document.querySelector("#safety-bottom-bar");
let safetySubItems = document.querySelector(".safety");
let subItemClass = document.querySelector(".sub-item");

safetyBottomBar.addEventListener('click', function () {
  console.log("safetyBottomBar clicked");
  // toggle class "active" and "openclose" on itemsInNav var
  safetySubItems.classList.toggle("flex-col");
  safetyBottomBar.classList.toggle("active");

  safetySubItems.classList.toggle("hide");
  subItemClass.classList.toggle("flex-col");
}, false);

//-------------------------------------------------------------
// event listener for reporting menu inside safety
//-------------------------------------------------------------

let reportingMenu = document.querySelector("#reporting");
let reportingItems = document.querySelector(".reporting-item");

reportingMenu.addEventListener('click', function () {
  console.log("safetyBottomBar clicked");
  reportingItems.classList.toggle("hide");

}, false);


//-------------------------------------------------------------
// event listener for bottom bar - admin menu
//-------------------------------------------------------------

let adminMenu = document.querySelector("#admin-bottom-bar");
let adminItems = document.querySelector(".admin-item");

adminMenu.addEventListener('click', function () {
  console.log("adminMenu clicked");
  // toggle class "active" and "openclose" on itemsInNav var
  adminItems.classList.toggle("hide");
  adminMenu.classList.toggle("active");
}, false);


//-------------------------------------------------------------
// event listeners for bottom bar - schedule
//-------------------------------------------------------------

let scheduleBottomBar = document.querySelector("#schedule-bottom-bar");
let scheduleSubItems = document.querySelector(".schedule");

scheduleBottomBar.addEventListener('click', function () {
  console.log("scheduleBottomBar clicked");
  // toggle class "active" and "openclose" on itemsInNav var
  scheduleSubItems.classList.toggle("flex-col");
  scheduleBottomBar.classList.toggle("active");

  scheduleSubItems.classList.toggle("hide");
  subItemClass.classList.toggle("flex-col");
}, false);

//-------------------------------------------------------------
// listen for click on parent-menu and toggle sub-item class
//-------------------------------------------------------------

let parentNav = document.querySelector(".parent-nav");
let subItem = document.querySelector(".sub-item");

parentNav.addEventListener('click', function () {
  console.log("parentNav clicked");
}, false);
