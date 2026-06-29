
const root = document.getElementById("content");

const renderContactPage = () => {
  
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    const h1 = document.createElement("h1");
    h1.textContent = "Contact Page";
    contactDiv.appendChild(h1);
    const h2 = document.createElement("h2");
    h2.textContent = "Contact Information";
    contactDiv.appendChild(h2);
    const h3 = document.createElement("h3");
    h3.textContent = "Address: Hatboalia, Alamdanga, Chuadanga";
    contactDiv.appendChild(h3);
    const h4 = document.createElement("h4");
    h4.textContent = "Phone: 01712345678";
    contactDiv.appendChild(h4);
    const h5 = document.createElement("h5");
    h5.textContent = "Email: info@hatboalia.com";
    contactDiv.appendChild(h5);

    root.appendChild(contactDiv);
};

export default renderContactPage;