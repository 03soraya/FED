// JavaScript Document
console.log("hi");

// menu button openen 
var openButton = document.querySelector("header > button");

openButton.addEventListener("click", openMenu);

function openMenu() {  
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
  }

// Menu button sluiten

var sluitButton = document.querySelector("nav button");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}