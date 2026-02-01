const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// "No" button moves on hover
function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveButton);

// "Yes" button → congratulations page
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
