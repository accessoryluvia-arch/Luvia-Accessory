
const sheetURL = 'https://sheetdb.io/api/v1/2daifxd4mxkup';

async function loadProducts() {
    const response = await fetch(sheetURL);
    const data = await response.json();
    

    const container = document.getElementById('product-container');
    
    data.rows.forEach(row => {
        container.innerHTML += `
            <div class="card">
                <img src="${row.sekil_linki}" alt="${row.ad}">
                <h3>${row.ad}</h3>
                <span class="price">${row.qiymet} AZN</span>
                <a href="https://instagram.com/luvia.accessory" class="insta-btn">Instagram-da Sifariş Et</a>
            </div>
        `;
    });
}

loadProducts();
