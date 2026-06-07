const button = document.getElementById("colorButton");
const bodyE1 = document.querySelector("body");
const body = document.getElementById("hero");
const mode = document.getElementById("modeL");

// button.addEventListener('click', function () {
//     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     body.style.backgroundColor = randomColor;
// });

button.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = color;
  localStorage.setItem("theme", "color");

  colorR();
});

function colorR() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red},${green},${blue})`;
  body.style.color = color;
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  button.textContent = "dark mode";
}
mode.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
