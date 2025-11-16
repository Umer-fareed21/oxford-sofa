const products = [
    {
        id: 1,
        title: "Elegant Sofa",
        price: "$1,499",
        image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-1/sofa-1-img-1.webp"
    },
    {
        id: 2,
        title: "Modern Sofa",
        price: "$1,299",
        image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-2/sofa-2-img-1.webp"
    },
    {
        id: 3,
        title: "Luxury Sofa",
        price: "$1,799",
        image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-3/sofa-3-img-1.webp"
    }
];

const productGrid = document.getElementById('productGrid');

products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product-card');
    div.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
    `;

    // click event → open detail.html with id
    div.onclick = () => {
        window.location.href = `detail.html?id=${product.id}`;
    }

    productGrid.appendChild(div);
});
