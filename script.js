
const products = [
    {
        name: "Mirvari Sırğa",
        price: "15.00 AZN",
        image: "https://via.placeholder.com/400x500", 
        link: "https://instagram.com/luvia.accessory"
    },
    {
        name: "Qızılı Kolye",
        price: "22.00 AZN",
        image: "https://via.placeholder.com/400x500", 
        link: "https://instagram.com/luvia.accessory"
    }
];


const container = document.getElementById('product-container');

products.forEach(product => {
    const card = `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <span class="price">${product.price}</span>
            <a href="${product.link}" target="_blank" class="insta-btn">INSTAGRAM-DA SİFARİŞ ET</a>
        </div>
    `;
    container.innerHTML += card;
});
