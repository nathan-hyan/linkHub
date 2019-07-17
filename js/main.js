let navBar = document.querySelector("nav");
let mailInput = document.querySelector(".mailInput");
let notify = document.querySelector(".notify");

notify.addEventListener("click", function() {
  if (mailInput.value.length > 5) {
    console.log("valido xd");
  } else {
    console.log("a webo");
  }
});

window.onscroll = function() {
  console.log(window.pageYOffset);

  if (window.pageYOffset < 500) {
    navBar.style.background = "transparent";
    console.log("down");
  } else {
    navBar.style.background = "rgba(12, 15, 10, 0.6)";
    console.log("up");
  }
};
