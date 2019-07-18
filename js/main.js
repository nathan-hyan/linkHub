let navBar = document.querySelector(".desktop");
let mailInput = document.querySelector(".mailInput");
let notify = document.querySelector(".notify");

notify.addEventListener("click", function() {
  if (mailInput.value.length > 5) {
  } else {
  }
});

window.onscroll = function() {
  if (window.pageYOffset < 500) {
    navBar.style.background = "transparent";
  } else {
    navBar.style.background = "rgba(12, 15, 10, 0.6)";
  }
};

let hamBtn = document.querySelector(".btn");
let hamMenu = document.querySelector(".hamburgerMenu");
let hidden = 1;

hamBtn.addEventListener("click", function(e) {
  e.preventDefault();

  if (hidden === 1) {
    console.log(hidden);
    hamMenu.style.width = "0px";
    hidden = 0;
    console.log(hidden);
  } else if (hidden === 0) {
    hamMenu.style.width = "300px";
    hidden = 1;
    console.log(hidden);
  }
});
