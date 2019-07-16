let navBar = document.querySelector("nav");

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
