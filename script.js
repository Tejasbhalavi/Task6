// Product data (you can fetch from API later)
const products = [
    {
        id: 1,
        name: "T-shirt",
        price: 15000,
        image: "./icons/tshirt.jpg"
    },
    {
        id: 2,
        name: "Shirt",
        price: 2000,
        image: "./icons/shirt.jpg"
    },
    {
        id: 3,
        name: "Shoes",
        price: 3000,
        image: "./icons/shouse.jpg"
    },
    {
        id: 4,
        name: "Watch",
        price: 5000,
        image: "./icons/watch1.jpg"
    },
    {
        id: 5,
        name: "jeans",
        price: 5000,
        image: "./icons/jeans1.jpg"
    },
    {
        id: 6,
        name: "T-shirt",
        price: 15000,
        image: "./icons/tshirt.jpg"
    },
    {
        id: 7,
        name: "Shirt",
        price: 2000,
        image: "./icons/shirt.jpg"
    },
    {
        id: 8,
        name: "Shoes",
        price: 3000,
        image: "./icons/shouse.jpg"
    },
    {
        id: 9,
        name: "Watch",
        price: 5000,
        image: "./icons/watch1.jpg"
    },
    {
        id: 10,
        name: "jeans",
        price: 5000,
        image: "./icons/jeans1.jpg"
    }
    ,
    {
        id: 11,
        name: "Watch",
        price: 5000,
        image: "./icons/watch1.jpg"
    },
    {
        id: 12,
        name: "jeans",
        price: 5000,
        image: "./icons/jeans1.jpg"
    }
];


// Render products into main section
const productList = document.getElementById("product-list");

function renderProducts(productsToRender) {
  productList.innerHTML = ""; // clear old items
  productsToRender.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

// Initial render
renderProducts(products);

// Cart functionality
function addToCart(id) {
  const product = products.find(p => p.id === id);
  alert(product.name + " added to cart!");
}

// Search products
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");

searchBtn.addEventListener("click", () => {
  const query = searchBar.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
});

// Category filter
const categoryFilter = document.getElementById("categoryFilter");

categoryFilter.addEventListener("change", () => {
  const selected = categoryFilter.value.toLowerCase();
  if (selected === "all") {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.name.toLowerCase().includes(selected));
    renderProducts(filtered);
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




