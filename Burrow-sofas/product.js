// 1️⃣ Nomand Collection
// Nomand Collection
const nomandProducts = [
    { id: 1, title: "Elegant Sofa", price: "$1,499", image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-1/sofa-1-img-1.webp" },
    { id: 2, title: "Modern Sofa", price: "$1,299", image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-2/sofa-2-img-1.webp" },
    { id: 3, title: "Luxury Sofa", price: "$1,799", image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-3/sofa-3-img-1.webp" },
    { id: 4, title: "Luxury Sofa", price: "$1,799", image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-4/sofa-4-img-1.webp" },
    { id: 5, title: "Luxury Sofa", price: "$1,799", image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-5/sofa-5-img-1.webp" },
    { id: 6, title: "Luxury Sofa", price: "$1,799", image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-6/sofa-6-img-1.webp" },
    { id: 7, title: "Luxury Sofa", price: "$1,799", image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-7/sofa-7-img-1.webp" },
    { id: 8, title: "Luxury Sofa", price: "$1,799", image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-8/sofa-8-img-1.webp" },
    { id: 9, title: "Luxury Sofa", price: "$1,799", image: "./Burrow-Brand/Nomand-Collection-imgs/sofa-9/sofa-9-img-1.webp" }
];

// Range Collection
const rangeProducts = [
    { 
        id: 101, 
        title: "Range Sofa 1", 
        price: "$1,299", 
        image: "./Burrow-Brand/Range-collection-imgs/sofa-1-imgs/sofa-1-img-1.webp" 
    },

    { 
        id: 102, 
        title: "Range Sofa 2", 
        price: "$1,299", 
        image: "./Burrow-Brand/Range-collection-imgs/sofa-2-imgs/sofa-2-img-1.webp" 
    },

    { 
        id: 103, 
        title: "Range Sofa 3", 
        price: "$1,299", 
        image: "./Burrow-Brand/Range-collection-imgs/sofa-3-imgs/sofa-3-img-1.webp" 
    },

    { 
        id: 104, 
        title: "Range Sofa 4", 
        price: "$1,299", 
        image: "./Burrow-Brand/Range-collection-imgs/sofa-4-imgs/sofa-4-img-1.webp" 
    },

    { 
        id: 105, 
        title: "Range Sofa 5", 
        price: "$1,299", 
        image: "./Burrow-Brand/Range-collection-imgs/sofa-5-imgs/sofa-5-img-1.webp" 
    },

    { 
        id: 106, 
        title: "Range Sofa 6", 
        price: "$1,299", 
        image: "./Burrow-Brand/Range-collection-imgs/sofa-6-imgs/sofa-6-img-1.webp" 
    },

    { 
        id: 107, 
        title: "Range Sofa 7", 
        price: "$1,299", 
        image: "./Burrow-Brand/Range-collection-imgs/sofa-7-imgs/sofa-7-img-1.webp" 
    },

    { 
        id: 108, 
        title: "Range Sofa 8", 
        price: "$1,299", 
        image: "./Burrow-Brand/Range-collection-imgs/sofa-8-imgs/sofa-8-img-1.webp" 
    },


];

// Russet Collection
const russetProducts = [
    { 
        id: 201,
        section: "RUSSET COLLECTION",
        title: "Russet Sofa 1", 
        price: "$1,899", 
        image: "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-1/sofa-1-img-1.webp" 
    },

    { 
        id: 202,
        section: "RUSSET COLLECTION",
        title: "Russet Sofa 2", 
        price: "$1,699", 
        image: "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-2/sofa-2-img-1.webp" 
    },

    { 
        id: 203,
        section: "RUSSET COLLECTION",
        title: "Russet Sofa 3", 
        price: "$1,999", 
        image: "./Burrow-Brand/NEW-RUSSET-COLLECTION/sofa-3/sofa-3-img-1.webp" 
    }
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
loadProducts(nomandProducts, "nomandGrid");
loadProducts(rangeProducts, "rangeGrid");
loadProducts(russetProducts, "russetGrid");
