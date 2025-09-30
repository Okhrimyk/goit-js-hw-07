const widget = document.querySelector(".widget");
const body = document.body
widget.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  widget.textContent = `Color: ${color}`
}
);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
