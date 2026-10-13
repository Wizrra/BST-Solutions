const header = document.querySelector(".header");
header.textContent = "Hello There!"

const paragraph = document.querySelector("p");
paragraph.textContent = "My full name is Hikmah";

const image = document.querySelector("img")
image.setAttribute("src", "/task 1/images/Wizrra.png")

const list = document.querySelector(".list")
list.classList.remove("list");
list.classList.add("myNameList");

const oneListItem = document.querySelector("li");
oneListItem.textContent = "Asake";

// DOM: Its full meaning is Document Object Model, which shows the html outcome in a browser. And can change or manipulated the html content or element using javascript, which will reflect in both the browser and the DevTool Element Pannel.

// The DOM is like the complete finished work, while HTML is like a template or raw data which eventually transforms into the DOM complete finished work or information that makes sense.

// Because JavaScript talks directly to the live DOM tree in the browser's memory













// const btn = document.getElementById("myBtn");
// const message = document.querySelector("#message");
// const highlight = document.querySelector(".highlight");
// const title = document.querySelector("#title")

// btn.addEventListener("click", function () {
//   message.classList.toggle("highlight") 
//   message.textContent = "You Clicked The Button";
//   message.style.color = "pink"
//   title.style.color = "blue";
// });

// console.log(message);
