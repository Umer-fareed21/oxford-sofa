// Product data
const products = [
    {
        id: 1,
        title: "Elegant Sofa",
        price: "$1,499",
        desc: "A minimal and elegant sofa made from natural materials, perfect for modern interiors.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-1/sofa-1-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-1/sofa-1-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-1/sofa-1-img-3.jpg"
        ],
        specs: {
            dimensions: "W: 220cm | D: 90cm | H: 85cm",
            materials: "Solid wood frame, natural fabric upholstery",
            custom: "Choose color and fabric"
        }
    },
    {
        id: 2,
        title: "Modern Sofa",
        price: "$1,299",
        desc: "Stylish modern sofa for living rooms.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-2/sofa-2-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-2/sofa-2-img-2.webp"
        ],
        specs: {
            dimensions: "W: 200cm | D: 85cm | H: 80cm",
            materials: "Wood and fabric",
            custom: "Choose fabric"
        }
    },
    {
        id: 3,
        title: "Luxury Sofa",
        price: "$1,799",
        desc: "Premium luxury sofa for high-end interiors.",
        images: [
            "./Burrow Brand/Nomand Collection imgs/sofa-3/sofa-3 img-1.webp",
            "./Burrow Brand/Nomand Collection imgs/sofa-3/sofa-3 img-2.webp"
        ],
        specs: {
            dimensions: "W: 230cm | D: 95cm | H: 90cm",
            materials: "High-quality wood and fabric",
            custom: "Custom color & fabric"
        }
    }
];

// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id')) || 1;
const product = products.find(p => p.id === id);

if (product) {
    // Main info
    document.getElementById('mainImage').src = product.images[0];
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDesc').textContent = product.desc;

    // Specs
    const specsDiv = document.getElementById('productSpecs');
    specsDiv.innerHTML = `
        <h4>Dimensions:</h4><p>${product.specs.dimensions}</p>
        <h4>Materials:</h4><p>${product.specs.materials}</p>
        <h4>Custom Options:</h4><p>${product.specs.custom}</p>
    `;

    // Gallery thumbnails
    const thumbsDiv = document.getElementById('thumbs');
    product.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.onclick = () => document.getElementById('mainImage').src = src;
        thumbsDiv.appendChild(img);
    });
}
