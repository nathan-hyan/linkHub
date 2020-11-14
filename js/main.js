// Mail validation checking

const notify = document.querySelector(".notify");
const navigationBar = document.querySelector(".desktop");
const hamburguerButton = document.querySelector(".btn");
const hamburguerMenu = document.querySelector(".hamburgerMenu");
const mailInput = document.querySelector(".mailInput");

const hidden = 1;

notify.addEventListener("click", () => {
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

window.onscroll = () => {
  window.pageYOffset < 500
    ? (navigationBar.style.background = "transparent")
    : (navigationBar.style.background = "rgba(12, 15, 10, 0.9)");
};

// Hamburguer mobile menu

hamburguerButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (hidden === 1) {
    hamburguerMenu.style.width = "300px";
    hidden = 0;
  } else if (hidden === 0) {
    hamburguerMenu.style.width = "0px";
    hidden = 1;
  }
});

window.sr = ScrollReveal();
sr.reveal(".anim", {
  delay: 55,
  interval: 50,
  reset: true,
  mobile: false,
});
