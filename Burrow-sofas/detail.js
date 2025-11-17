// Product data (all collections merged with unique ids)
const products = [
    {
        id: 1,
        section: "Nomand Collection",
        title: "Elegant Sofa",
        price: "$1,499",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-1/sofa-1-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-1/sofa-1-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-1/sofa-1-img-3.jpg",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-1/sofa-1-img-4.webp"
        ],
        specs: {
            dimensions: "W:220cm D:90cm H:85cm",
            materials: "Wood & Fabric",
            custom: "Choose color"
        }
    },

    {
        id: 2,
        section: "Nomand Collection",
        title: "Modern Sofa",
        price: "$1,299",
        desc: "Stylish modern sofa.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-2/sofa-2-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-2/sofa-2-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-2/sofa-2-img-3.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 3,
        section: "Nomand Collection",
        title: "Luxury Sofa",
        price: "$1,799",
        desc: "Premium luxury sofa.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-3/sofa-3-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-3/sofa-3-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-3/sofa-3-img-3.webp"
        ],
        specs: {
            dimensions: "W:230cm D:95cm H:90cm",
            materials: "High-quality wood & fabric",
            custom: "Custom color"
        }
    },

    {
        id: 4,
        section: "Nomand Collection",
        title: "Luxury Sofa",
        price: "$1,799",
        desc: "Premium luxury sofa.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-4/sofa-4-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-4/sofa-4-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-4/sofa-4-img-3.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-4/sofa-4-img-4.webp"
        ],
        specs: {
            dimensions: "W:230cm D:95cm H:90cm",
            materials: "High-quality wood & fabric",
            custom: "Custom color"
        }
    },

    {
        id: 5,
        section: "Nomand Collection",
        title: "Luxury Sofa",
        price: "$1,799",
        desc: "Premium luxury sofa.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-5/sofa-5-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-5/sofa-5-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-5/sofa-5-img-3.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-5/sofa-5-img-4.webp"
        ],
        specs: {
            dimensions: "W:230cm D:95cm H:90cm",
            materials: "High-quality wood & fabric",
            custom: "Custom color"
        }
    },

    {
        id: 6,
        section: "Nomand Collection",
        title: "Luxury Sofa",
        price: "$1,799",
        desc: "Premium luxury sofa.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-6/sofa-6-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-6/sofa-6-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-6/sofa-6-img-3.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-6/sofa-6-img-4.webp"
        ],
        specs: {
            dimensions: "W:230cm D:95cm H:90cm",
            materials: "High-quality wood & fabric",
            custom: "Custom color"
        }
    },

    {
        id: 7,
        section: "Nomand Collection",
        title: "Luxury Sofa",
        price: "$1,799",
        desc: "Premium luxury sofa.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-7/sofa-7-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-7/sofa-7-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-7/sofa-7-img-3.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-7/sofa-7-img-4.webp"
        ],
        specs: {
            dimensions: "W:230cm D:95cm H:90cm",
            materials: "High-quality wood & fabric",
            custom: "Custom color"
        }
    },

    {
        id: 8,
        section: "Nomand Collection",
        title: "Luxury Sofa",
        price: "$1,799",
        desc: "Premium luxury sofa.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-8/sofa-8-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-8/sofa-8-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-8/sofa-8-img-3.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-8/sofa-8-img-4.webp"
        ],
        specs: {
            dimensions: "W:230cm D:95cm H:90cm",
            materials: "High-quality wood & fabric",
            custom: "Custom color"
        }
    },

    {
        id: 9,
        section: "Nomand Collection",
        title: "Luxury Sofa",
        price: "$1,799",
        desc: "Premium luxury sofa.",
        images: [
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-9/sofa-9-img-1.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-9/sofa-9-img-2.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-9/sofa-9-img-3.webp",
            "./Burrow-Brand/Nomand-Collection-imgs/sofa-9/sofa-9-img-4.webp"
        ],
        specs: {
            dimensions: "W:230cm D:95cm H:90cm",
            materials: "High-quality wood & fabric",
            custom: "Custom color"
        }
    },





    {
        id: 101,
        section: "Range Collection",
        title: "Range Sofa 1",
        price: "$1,299",
        desc: "Range collection sofa 1.",
        images: [
            "./Burrow-Brand/Range-collection-imgs/sofa-1-imgs/sofa-1-img-1.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-1-imgs/sofa-1-img-2.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 102,
        section: "Range Collection",
        title: "Range Sofa 2",
        price: "$1,299",
        desc: "Range collection sofa 2.",
        images: [
            "./Burrow-Brand/Range-collection-imgs/sofa-2-imgs/sofa-2-img-1.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-2-imgs/sofa-2-img-2.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-2-imgs/sofa-2-img-3.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-2-imgs/sofa-2-img-4.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-2-imgs/sofa-2-img-5.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 103,
        section: "Range Collection",
        title: "Range Sofa 3",
        price: "$1,299",
        desc: "Range collection sofa 3.",
        images: [
            "./Burrow-Brand/Range-collection-imgs/sofa-3-imgs/sofa-3-img-1.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-3-imgs/sofa-3-img-2.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-3-imgs/sofa-3-img-3.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-3-imgs/sofa-3-img-4.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 104,
        section: "Range Collection",
        title: "Range Sofa 4",
        price: "$1,299",
        desc: "Range collection sofa 4.",
        images: [
            "./Burrow-Brand/Range-collection-imgs/sofa-4-imgs/sofa-4-img-1.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-4-imgs/sofa-4-img-2.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-4-imgs/sofa-4-img-3.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 105,
        section: "Range Collection",
        title: "Range Sofa 5",
        price: "$1,299",
        desc: "Range collection sofa 5.",
        images: [
            "./Burrow-Brand/Range-collection-imgs/sofa-5-imgs/sofa-5-img-1.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-5-imgs/sofa-5-img-2.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 106,
        section: "Range Collection",
        title: "Range Sofa 6",
        price: "$1,299",
        desc: "Range collection sofa 6.",
        images: [
            "./Burrow-Brand/Range-collection-imgs/sofa-6-imgs/sofa-6-img-1.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-6-imgs/sofa-6-img-2.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-6-imgs/sofa-6-img-3.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 107,
        section: "Range Collection",
        title: "Range Sofa 7",
        price: "$1,299",
        desc: "Range collection sofa 7.",
        images: [
            "./Burrow-Brand/Range-collection-imgs/sofa-7-imgs/sofa-7-img-1.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-7-imgs/sofa-7-img-2.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-7-imgs/sofa-7-img-3.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-7-imgs/sofa-7-img-4.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 108,
        section: "Range Collection",
        title: "Range Sofa 8",
        price: "$1,299",
        desc: "Range collection sofa 8.",
        images: [
            "./Burrow-Brand/Range-collection-imgs/sofa-8-imgs/sofa-8-img-1.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-8-imgs/sofa-8-img-2.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-8-imgs/sofa-8-img-3.webp",
            "./Burrow-Brand/Range-collection-imgs/sofa-8-imgs/sofa-8-img-4.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },






    {
        id: 201,
        section: "RUSSET COLLECTION",
        title: "Russet Sofa 1",
        price: "$1,899",
        desc: "Range collection sofa 1",
        images: [
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-1/sofa-1-img-1.webp",
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-1/sofa-1-img-2.webp",
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-1/sofa-1-img-3.webp",
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-1/sofa-1-img-4.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 202,
        section: "RUSSET COLLECTION",
        title: "Russet Sofa 2",
        price: "$1,899",
        desc: "Range collection sofa 2",
        images: [
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-2/sofa-2-img-1.webp",
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-2/sofa-2-img-2.webp",
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-2/sofa-2-img-3.webp",
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-2/sofa-2-img-4.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 203,
        section: "RUSSET COLLECTION",
        title: "Russet Sofa 3",
        price: "$1,899",
        desc: "Range collection sofa 3",
        images: [
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-3/sofa-3-img-1.webp",
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-3/sofa-3-img-2.webp",
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-3/sofa-3-img-3.webp",
            "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-3/sofa-3-img-4.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },


];

// get id from URL
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));
const product = products.find(p => p.id === id);

if (product) {
    // fill main info
    document.getElementById('sectionTitle').textContent = product.section;
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDesc').textContent = product.desc;

    // specs
    const specsDiv = document.getElementById('productSpecs');
    specsDiv.innerHTML = `
        <h4>Dimensions:</h4><p>${product.specs.dimensions}</p>
        <h4>Materials:</h4><p>${product.specs.materials}</p>
        <h4>Custom Options:</h4><p>${product.specs.custom}</p>
    `;

    // gallery thumbnails active state
    const thumbsDiv = document.getElementById('thumbs');
    thumbsDiv.innerHTML = "";
    product.images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        if (index === 0) img.classList.add('active');
        img.onclick = () => {
            document.getElementById('mainImage').src = src;
            // remove active from all
            document.querySelectorAll('#thumbs img').forEach(i => i.classList.remove('active'));
            img.classList.add('active');
        }
        thumbsDiv.appendChild(img);
    });
    document.getElementById('mainImage').src = product.images[0];

}

// Related Products
const relatedDiv = document.getElementById('relatedProducts');
relatedDiv.innerHTML = "";

// filter same section products excluding current product
const related = products.filter(p => p.section === product.section && p.id !== product.id);

// show max 4 related products
related.slice(0, 4).forEach(rp => {
    const card = document.createElement('div');
    card.classList.add('related-card');
    card.onclick = () => {
        window.location.href = `detail.html?id=${rp.id}`;
    };
    card.innerHTML = `
        <img src="${rp.images[0]}" alt="${rp.title}">
        <h4>${rp.title}</h4>
        <p>${rp.price}</p>
    `;
    relatedDiv.appendChild(card);
});

