window.addEventListener('click', function () {

});

//-------------------------------------------------------------
//  Listen for click event on toggle which is on the more menu item on the footer
//-------------------------------------------------------------

// for IE10, .getElementsByClassName()[0];
let toggle = document.querySelector(".toggle");
let openClose = document.querySelector(".open-close");

let itemsInNav = document.querySelector(".nav-list");
let burgerMenu = document.querySelector(".burger-menu");


toggle.addEventListener('click', function () {
  console.log("toggle clicked");
  // toggle class "active" and "openclose" on itemsInNav var
  itemsInNav.classList.toggle("active");
  burgerMenu.classList.toggle("openClose");
}, false);


//-------------------------------------------------------------
// listen for click on parent-menu and toggle sub-item class
//-------------------------------------------------------------

let parentNav = document.querySelector(".parent-nav");
let subItem = document.querySelector(".sub-item");

parentNav.addEventListener('click', function () {
  console.log("parentNav clicked");
  subItem.classList.toggle("active");
}, false);
