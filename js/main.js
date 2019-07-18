// Mail validation checking

let notify = document.querySelector(".notify");
notify.addEventListener("click", function() {
  let mailInput = document.querySelector(".mailInput");

  if (
    mailInput.value.length == 0 ||
    String(mailInput.value).indexOf("@") === -1 ||
    String(mailInput.value).indexOf(".") === -1
  ) {
    alert("Insert a valid mail");
  } else {
    alert("You have been subscribed!");
  }
});

// Responsive desktop navbar

let navBar = document.querySelector(".desktop");
window.onscroll = function() {
  if (window.pageYOffset < 500) {
    navBar.style.background = "transparent";
  } else {
    navBar.style.background = "rgba(12, 15, 10, 0.6)";
  }
};

// Hamburguer mobile menu

let hamBtn = document.querySelector(".btn");
let hamMenu = document.querySelector(".hamburgerMenu");
let hidden = 1;

hamBtn.addEventListener("click", function(e) {
  e.preventDefault();

  if (hidden === 1) {
    console.log(hidden);
    hamMenu.style.width = "300px";
    hidden = 0;
    console.log(hidden);
  } else if (hidden === 0) {
    hamMenu.style.width = "0px";
    hidden = 1;
    console.log(hidden);
  }
});
