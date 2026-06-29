import pizza from "./images/f1.png";
import burger from "./images/f2.png";
import pasta from "./images/f4.png";
import fries from "./images/f5.png";

//Item array
const items = [
    {
        name: "Delicious Pizza",
        img: pizza,
        description: "A delicious pizza",
        price: 20
    },
    {
        name: "Delicious Burger",
        img: burger,
        description: "A delicious burger",
        price: 15
    },
    {
        name: "Delicious Pasta",
        img: pasta,
        description: "A delicious pasta",
        price: 10
    },
    {
        name: "French Fries",
        img: fries,
        description: "A delicious french fries",
        price: 5
    }
];

const root = document.getElementById("content");


const renderMenuPage = () => {
    
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";
    const h1 = document.createElement("h1");
    h1.textContent = "Menu Page";
    menuDiv.appendChild(h1);

    const container = document.createElement("div");
    container.className = "container";

    //Loop throuh each item and appedn in a div
    for(const item of items) {
        const boxDiv = document.createElement("div");
        boxDiv.className = "box"
        const imgBox = document.createElement("div");
        imgBox.className = "img-box";
        const img = document.createElement("img");
        img.src = item?.img;
        imgBox.appendChild(img);

        const detailBox = document.createElement("div");
        detailBox.className = "detail-box";
        const h5 = document.createElement("h5");
        h5.textContent = item?.name;
        detailBox.appendChild(h5);
        const p = document.createElement("p");
        p.textContent = item?.description;
        detailBox.appendChild(p);
        const span = document.createElement("span");
        span.textContent = `$${item?.price}`;
        detailBox.appendChild(span);
        
        boxDiv.appendChild(imgBox);
        boxDiv.appendChild(detailBox);
        container.appendChild(boxDiv);
    }
    
    menuDiv.appendChild(container);
    root.appendChild(menuDiv);
}


export default renderMenuPage;