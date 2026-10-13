const title = document.getElementById("page-title");
title.style.color = "purple";

const biosByClass = document.getElementsByClassName("member-bio");

const firstBio = document.querySelector(".member-bio");

const allBios = document.querySelectorAll(".member-bio");

allBios.forEach((bio, index) => {
  bio.textContent = `Updated Buildspace Member Number ${index + 1}`;
  
  bio.classList.add("highlight");
});

  // Use an ID when you want to target one unique element on the page (getElementById). Use a class when multiple elements share the same styling or behavior (querySelectorAll). Use a CSS selector (querySelector) when you need specific nesting or complex queries (like "the paragraph inside this specific div").
  
//  It returns null.
 
//  Selecting one (querySelector) gives you a single element object directly. Selecting many (querySelectorAll) gives you a NodeList (which looks like an array), meaning you have to loop through it (forEach) if you want to change every item inside it.