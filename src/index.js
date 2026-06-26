import "./styles.css";
import HeroBgImage from "./images/hero-bg.jpg";

const root = document.getElementById("content");

const bgImage = document.createElement("img");
bgImage.src = HeroBgImage;
bgImage.alt = "Hero Background Image";
bgImage.className = "bg-image";

root.appendChild(bgImage);

const detailsDiv = document.createElement("div");
detailsDiv.className = "details";

const h1 = document.createElement("h1");
h1.textContent = "Fast Food Restaurant";
detailsDiv.appendChild(h1);

const p = document.createElement("p");
p.textContent = "Smashed, Sizzled, and Served Hot. Your ultimate craving, delivered fresh and fast. Skip the wait and bite into perfection today.";
detailsDiv.appendChild(p);


//----Order Button div
const orderBtnDiv = document.createElement("div");
orderBtnDiv.className = "btn-box";

const orderBtn = document.createElement("a");
orderBtn.href = "";
orderBtn.className = "btn1";
orderBtn.textContent = "Order Now";

orderBtnDiv.appendChild(orderBtn);

detailsDiv.appendChild(orderBtnDiv)
root.appendChild(detailsDiv);