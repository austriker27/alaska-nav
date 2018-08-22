window.addEventListener('click', function () {

});

// for IE10, .getElementsByClassName()[0];
let toggle = document.querySelector(".toggle");
let itemsInNav = document.querySelector(".nav-list");


//-------------------------------------------------------------
//  Listen for click event on toggle which is on the more menu item on the footer
//-------------------------------------------------------------
toggle.addEventListener('click', function () {
  console.log("toggle clicked");
  // toggle class "active" on itemsInNav var
  itemsInNav.classList.toggle("active");
}, false);


//-------------------------------------------------------------
// listen for click on parent-menu and toggle children
//-------------------------------------------------------------
