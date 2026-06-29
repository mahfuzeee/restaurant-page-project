
const root = document.getElementById("content");

const renderMenuPage = () => {
    
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";
    const h1 = document.createElement("h1");
    h1.textContent = "Menu Page";
    menuDiv.appendChild(h1);
    root.appendChild(menuDiv);
};

export default renderMenuPage;