// Product data (all collections merged with unique ids)
const products = [
    {
        id: 1,
        section: "Luxury Sofa",
        title: "Luxury Sofa",
        price: "$1,199",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-Brand/sofas/sofa-1/sofa-1-img-1.webp",
            "./Article-Brand/sofas/sofa-1/sofa-1-img-2.webp",
            "./Article-Brand/sofas/sofa-1/sofa-1-img-3.webp",
            "./Article-Brand/sofas/sofa-1/sofa-1-img-4.webp",
            "./Article-Brand/sofas/sofa-1/sofa-1-img-5.webp",
            "./Article-Brand/sofas/sofa-1/sofa-1-img-6.webp",
        ],
        specs: {
            dimensions: "W:220cm D:90cm H:85cm",
            materials: "Wood & Fabric",
            custom: "Choose color"
        }
    },

    {
        id: 2,
        section: "Luxury Sofa",
        title: "Luxury Sofa",
        price: "$1,299",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-Brand/sofas/sofa-2/sofa-2-img-1.webp",
            "./Article-Brand/sofas/sofa-2/sofa-2-img-2.webp",
            "./Article-Brand/sofas/sofa-2/sofa-2-img-3.webp",
            "./Article-Brand/sofas/sofa-2/sofa-2-img-4.webp",
            "./Article-Brand/sofas/sofa-2/sofa-2-img-5.webp",
            "./Article-Brand/sofas/sofa-2/sofa-2-img-6.webp",
        ],
        specs: {
            dimensions: "W:220cm D:90cm H:85cm",
            materials: "Wood & Fabric",
            custom: "Choose color"
        }
    },

    {
        id: 3,
        section: "Luxury Sofa",
        title: "Luxury Sofa",
        price: "$1,399",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-Brand/sofas/sofa-3/sofa-3-img-1.webp",
            "./Article-Brand/sofas/sofa-3/sofa-3-img-2.webp",
            "./Article-Brand/sofas/sofa-3/sofa-3-img-3.webp",
            "./Article-Brand/sofas/sofa-3/sofa-3-img-4.webp",
            "./Article-Brand/sofas/sofa-3/sofa-3-img-5.webp",
            "./Article-Brand/sofas/sofa-3/sofa-3-img-6.webp",
        ],
        specs: {
            dimensions: "W:220cm D:90cm H:85cm",
            materials: "Wood & Fabric",
            custom: "Choose color"
        }
    },

    {
        id: 4,
        section: "Luxury Sofa",
        title: "Luxury Sofa",
        price: "$1,499",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-Brand/sofas/sofa-4/sofa-4-img-1.webp",
            "./Article-Brand/sofas/sofa-4/sofa-4-img-2.webp",
            "./Article-Brand/sofas/sofa-4/sofa-4-img-3.webp",
            "./Article-Brand/sofas/sofa-4/sofa-4-img-4.webp",
            "./Article-Brand/sofas/sofa-4/sofa-4-img-5.webp",
            "./Article-Brand/sofas/sofa-4/sofa-4-img-6.webp",
        ],
        specs: {
            dimensions: "W:220cm D:90cm H:85cm",
            materials: "Wood & Fabric",
            custom: "Choose color"
        }
    },

    {
        id: 5,
        section: "Luxury Sofa",
        title: "Luxury Sofa",
        price: "$1,599",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-Brand/sofas/sofa-5/sofa-5-img-1.webp",
            "./Article-Brand/sofas/sofa-5/sofa-5-img-2.webp",
            "./Article-Brand/sofas/sofa-5/sofa-5-img-3.webp",
            "./Article-Brand/sofas/sofa-5/sofa-5-img-4.webp",
            "./Article-Brand/sofas/sofa-5/sofa-5-img-5.webp",
            "./Article-Brand/sofas/sofa-5/sofa-5-img-6.webp",
        ],
        specs: {
            dimensions: "W:220cm D:90cm H:85cm",
            materials: "Wood & Fabric",
            custom: "Choose color"
        }
    },

    {
        id: 6,
        section: "Luxury Sofa",
        title: "Luxury Sofa",
        price: "$1,699",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-Brand/sofas/sofa-6/sofa-6-img-1.webp",
            "./Article-Brand/sofas/sofa-6/sofa-6-img-2.webp",
            "./Article-Brand/sofas/sofa-6/sofa-6-img-3.webp",
            "./Article-Brand/sofas/sofa-6/sofa-6-img-4.webp",
            "./Article-Brand/sofas/sofa-6/sofa-6-img-5.webp",
        ],
        specs: {
            dimensions: "W:220cm D:90cm H:85cm",
            materials: "Wood & Fabric",
            custom: "Choose color"
        }
    },

    {
        id: 7,
        section: "Luxury Sofa",
        title: "Luxury Sofa",
        price: "$1,799",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-Brand/sofas/sofa-7/sofa-7-img-1.webp",
            "./Article-Brand/sofas/sofa-7/sofa-7-img-2.webp",
            "./Article-Brand/sofas/sofa-7/sofa-7-img-3.webp",
            "./Article-Brand/sofas/sofa-7/sofa-7-img-4.webp",
            "./Article-Brand/sofas/sofa-7/sofa-7-img-5.webp",
        ],
        specs: {
            dimensions: "W:220cm D:90cm H:85cm",
            materials: "Wood & Fabric",
            custom: "Choose color"
        }
    },

    {
        id: 8,
        section: "Luxury Sofa",
        title: "Luxury Sofa",
        price: "$1,899",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-Brand/sofas/sofa-8/sofa-8-img-1.webp",
            "./Article-Brand/sofas/sofa-8/sofa-8-img-2.webp",
            "./Article-Brand/sofas/sofa-8/sofa-8-img-3.webp",
            "./Article-Brand/sofas/sofa-8/sofa-8-img-4.webp",
            "./Article-Brand/sofas/sofa-8/sofa-8-img-5.webp",
        ],
        specs: {
            dimensions: "W:220cm D:90cm H:85cm",
            materials: "Wood & Fabric",
            custom: "Choose color"
        }
    },
    

    





    {
        id: 101,
        section: "Luxury Love Seat",
        title: "Luxury Love Seat",
        price: "$1,299",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-brand/love-seats/love-seat-1/love-seat-1-img-1.webp",
            "./Article-brand/love-seats/love-seat-1/love-seat-1-img-2.webp",
            "./Article-brand/love-seats/love-seat-1/love-seat-1-img-3.webp",
            "./Article-brand/love-seats/love-seat-1/love-seat-1-img-4.webp",
            "./Article-brand/love-seats/love-seat-1/love-seat-1-img-5.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 102,
        section: "Luxury Love Seat",
        title: "Luxury Love Seat",
        price: "$1,499",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-brand/love-seats/love-seat-2/love-seat-2-img-1.webp",
            "./Article-brand/love-seats/love-seat-2/love-seat-2-img-2.webp",
            "./Article-brand/love-seats/love-seat-2/love-seat-2-img-3.webp",
            "./Article-brand/love-seats/love-seat-2/love-seat-2-img-4.webp",
            "./Article-brand/love-seats/love-seat-2/love-seat-2-img-5.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 103,
        section: "Luxury Love Seat",
        title: "Luxury Love Seat",
        price: "$1,699",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-brand/love-seats/love-seat-3/love-seat-3-img-1.webp",
            "./Article-brand/love-seats/love-seat-3/love-seat-3-img-2.webp",
            "./Article-brand/love-seats/love-seat-3/love-seat-3-img-3.webp",
            "./Article-brand/love-seats/love-seat-3/love-seat-3-img-4.webp",
            "./Article-brand/love-seats/love-seat-3/love-seat-3-img-5.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 104,
        section: "Luxury Love Seat",
        title: "Luxury Love Seat",
        price: "$1,899",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-brand/love-seats/love-seat-4/love-seat-4-img-1.webp",
            "./Article-brand/love-seats/love-seat-4/love-seat-4-img-2.webp",
            "./Article-brand/love-seats/love-seat-4/love-seat-4-img-3.webp",
            "./Article-brand/love-seats/love-seat-4/love-seat-4-img-4.webp",
            "./Article-brand/love-seats/love-seat-4/love-seat-4-img-5.webp",
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },






    {
        id: 201,
        section: "Luxury Sectionals",
        title: "Luxury Sectionals",
        price: "$1,199",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-brand/sectionals/sectional-1/sectional-1-img-1.webp",
            "./Article-brand/sectionals/sectional-1/sectional-1-img-2.webp",
            "./Article-brand/sectionals/sectional-1/sectional-1-img-3.webp",
            "./Article-brand/sectionals/sectional-1/sectional-1-img-4.webp",
            "./Article-brand/sectionals/sectional-1/sectional-1-img-5.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 202,
        section: "Luxury Sectionals",
        title: "Luxury Sectionals",
        price: "$1,299",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-brand/sectionals/sectional-2/sectional-2-img-1.webp",
            "./Article-brand/sectionals/sectional-2/sectional-2-img-2.webp",
            "./Article-brand/sectionals/sectional-2/sectional-2-img-3.webp",
            "./Article-brand/sectionals/sectional-2/sectional-2-img-4.webp",
            "./Article-brand/sectionals/sectional-2/sectional-2-img-5.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 203,
        section: "Luxury Sectionals",
        title: "Luxury Sectionals",
        price: "$1,399",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-brand/sectionals/sectional-3/sectional-3-img-1.webp",
            "./Article-brand/sectionals/sectional-3/sectional-3-img-2.webp",
            "./Article-brand/sectionals/sectional-3/sectional-3-img-3.webp",
            "./Article-brand/sectionals/sectional-3/sectional-3-img-4.webp",
            "./Article-brand/sectionals/sectional-3/sectional-3-img-5.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 204,
        section: "Luxury Sectionals",
        title: "Luxury Sectionals",
        price: "$1,499",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-brand/sectionals/sectional-4/sectional-4-img-1.webp",
            "./Article-brand/sectionals/sectional-4/sectional-4-img-2.webp",
            "./Article-brand/sectionals/sectional-4/sectional-4-img-3.webp",
            "./Article-brand/sectionals/sectional-4/sectional-4-img-4.webp",
            "./Article-brand/sectionals/sectional-4/sectional-4-img-5.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    },

    {
        id: 205,
        section: "Luxury Sectionals",
        title: "Luxury Sectionals",
        price: "$1,599",
        desc: "A minimal and elegant sofa.",
        images: [
            "./Article-brand/sectionals/sectional-5/sectional-5-img-1.webp",
            "./Article-brand/sectionals/sectional-5/sectional-5-img-2.webp",
            "./Article-brand/sectionals/sectional-5/sectional-5-img-3.webp",
            "./Article-brand/sectionals/sectional-5/sectional-5-img-4.webp",
            "./Article-brand/sectionals/sectional-5/sectional-5-img-5.webp"
        ],
        specs: {
            dimensions: "W:200cm D:85cm H:80cm",
            materials: "Wood & Fabric",
            custom: "Choose fabric"
        }
    }

    


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

