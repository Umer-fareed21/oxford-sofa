// 1️⃣ Nomand Collection
// Nomand Collection
const sofas = [
    { id: 1, title: "Luxury Sofa", price: "$1,199", image: "./joy-bird-brand/sofas/sofa-1/sofa-1-img-1.avif" },
    { id: 2, title: "Luxury Sofa", price: "$1,299", image: "./joy-bird-brand/sofas/sofa-2/sofa-2-img-1.webp" },
    { id: 3, title: "Luxury Sofa", price: "$1,399", image: "./joy-bird-brand/sofas/sofa-3/sofa-3-img-1.webp" },
    { id: 4, title: "Luxury Sofa", price: "$1,499", image: "./joy-bird-brand/sofas/sofa-4/sofa-4-img-1.webp" },
    { id: 5, title: "Luxury Sofa", price: "$1,599", image: "./joy-bird-brand/sofas/sofa-5/sofa-5-img-1.webp" },
    { id: 6, title: "Luxury Sofa", price: "$1,699", image: "./joy-bird-brand/sofas/sofa-6/sofa-6-img-1.webp" },
];

// Range Collection
const loveSeats = [
    {
        id: 101,
        title: "Luxury Love Seat",
        price: "$1,299",
        image: "./joy-bird-brand/love-seats/love-seat-1/love-seat-1-img-1.webp"
    },

    {
        id: 102,
        title: "Luxury Love Seat",
        price: "$1,499",
        image: "./joy-bird-brand/love-seats/love-seat-2/love-seat-2-img-1.webp"
    },

    {
        id: 103,
        title: "Luxury Love Seat",
        price: "$1,699",
        image: "./joy-bird-brand/love-seats/love-seat-3/love-seat-3-img-1.avif"
    },

    {
        id: 104,
        title: "Luxury Love Seat",
        price: "$1,899",
        image: "./joy-bird-brand/love-seats/love-seat-4/love-seat-4-img-1.avif"
    },


];

// Russet Collection
const sectionals = [
    {
        id: 201,
        title: "Luxury Sectionals",
        price: "$1,199",
        image: "./joy-bird-brand/sectionals/sectional-1/sectional-1-img-1.avif"
    },

    {
        id: 202,
        section: "Sectionals",
        title: "Luxury Sectionals",
        price: "$1,299",
        image: "./joy-bird-brand/sectionals/sectional-2/sectional-2-img-1.avif"
    },

    {
        id: 203,
        section: "Sectionals",
        title: "Luxury Sectionals",
        price: "$1,399",
        image: "./joy-bird-brand/sectionals/sectional-3/sectional-3-img-1.avif"
    },

    {
        id: 204,
        section: "Sectionals",
        title: "Luxury Sectionals",
        price: "$1,499",
        image: "./joy-bird-brand/sectionals/sectional-4/sectional-4-img-1.avif"
    },
];

// function to load product cards
function loadProducts(list, containerId) {
    const container = document.getElementById(containerId);

    list.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product-card');

        div.innerHTML = `
            <div class="product-card-img">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-card-info">
                <h3>${product.title}</h3>
                <p class="price">${product.price}</p>
                <button class="view-btn">View Details</button>
            </div>
        `;

        div.onclick = () => {
            window.location.href = `detail.html?id=${product.id}`;
        };

        container.appendChild(div);
    });
}

// load all 3 collections
loadProducts(sofas, "nomandGrid");
loadProducts(loveSeats, "rangeGrid");
loadProducts(sectionals, "russetGrid");
