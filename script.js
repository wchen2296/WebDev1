const button = document.getElementById("changeColor");
const text = document.getElementById("text");

button.addEventListener("click", function() {
  let colors = ["red", "green", "blue"];
  let currentColor = text.style.color;
  let index = colors.indexOf(currentColor);
  index = (index + 1) % colors.length;
  text.style.color = colors[index];
});
