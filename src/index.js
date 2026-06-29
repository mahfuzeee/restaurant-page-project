import "./styles.css";
import renderHomePage from "./home.js";
import renderContactPage from "./contact.js";
import renderMenuPage from "./menu.js";

//Declaring variables
const root = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");


renderHomePage();

//Create Click Event Listeners
homeBtn.addEventListener("click", () => {
    root.innerHTML = "";
    renderHomePage();
    
    
});

menuBtn.addEventListener("click", () => {
    root.innerHTML = "";
    renderMenuPage();
    
});

contactBtn.addEventListener("click", () => {
    root.innerHTML = "";
    renderContactPage();
    
});

