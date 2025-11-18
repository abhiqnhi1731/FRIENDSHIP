function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.transition = "top 0.4s ease, left 0.4s ease";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// For desktop + mobile
moveRandom.addEventListener("click", function (e) {
  moveRandomEl(e.target);
});

// Optional: Better responsiveness on touch devices
moveRandom.addEventListener("touchstart", function (e) {
  moveRandomEl(e.target);
});
