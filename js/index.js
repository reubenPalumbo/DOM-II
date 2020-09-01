// Your code goes here
//   - `mouseover` - link color change
//   - `keydown` - color change on press of shift
//   - `keyup` - return color change on press of shift
//   - `focus` - text box mod
//   - `blur` - text box mod
//   - `load` - background color to white
//   - `wheel` - darken background when moving
//   - `resize` - selecting "welcome ot fun bus" will change top img
//   - `dblclick` - fun bus to make smaller or bigger
//   - `click` - top img to open in new window

Array.from(document.links).forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
Array.from(document.all).forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log("Current Target is: ", event.currentTarget);
    event.stopPropagation();
  });
});

// MOUSE OVER
const links = document.querySelector("nav");
links.addEventListener("mouseover", (event) => {
  event.target.style.color = "blue";
});

// DOUBLE CLICK
const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("dblclick", (event) => {
  if (event.target.style.fontSize === "10em") {
    event.target.style.fontSize = "4em";
  } else {
    event.target.style.fontSize = "10em";
  }
});

// CLICK
const busIMG = document.querySelector(".intro img");
busIMG.addEventListener("click", (event) => {
  window.open(event.target.src, "_blank");
});

// SCROLL
const backDrop = document.querySelector("body");
backDrop.addEventListener("wheel", (event) => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "lightgrey";
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 1000);
  }
});
// FOCUS/BLUR
const textBox = document.querySelector(".text-content p");
textBox.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "blue";
    event.target.style.color = "white";
  },
  true
);

textBox.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
    event.target.style.color = "black";
  },
  true
);
// KEY UP / KEY DOWN
backDrop.addEventListener("keydown", (event) => {
  if (event.key === "Shift") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    funBus.style.color = "black";
  }
});
backDrop.addEventListener("keyup", (event) => {
  if (event.key === "Shift") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

// RESIZE
window.addEventListener("resize", (event) => {
  busIMG.src =
    "https://fortniteintel.com/wp-content/uploads/2019/09/battle-bus.jpg.webp";
});
// LOAD
window.addEventListener("load", (event) => {
  document.body.style.backgroundColor = "white";
});
