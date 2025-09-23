
const products = [
  { id: 1, name: "t-shirt", price: 15000, image: "./icons/tshirt.jpg" },
  { id: 2, name: "shirt", price: 2000, image: "./icons/shirt.jpg" },
  { id: 3, name: "shoes", price: 3000, image: "./icons/shoes.jpg" },
  { id: 4, name: "watch", price: 5000, image: "./icons/watch1.jpg" },
  { id: 5, name: "jeans", price: 5000, image: "./icons/jeans1.jpg" },
  { id: 6, name: "t-shirt", price: 15000, image: "./icons/tshirt.jpg" },
  { id: 7, name: "shirt", price: 2000, image: "./icons/shirt.jpg" },
  { id: 8, name: "shoes", price: 3000, image: "./icons/shoes.jpg" },
  { id: 9, name: "watch", price: 5000, image: "./icons/watch1.jpg" },
  { id: 10, name: "jeans", price: 5000, image: "./icons/jeans1.jpg" },
  { id: 11, name: "watch", price: 5000, image: "./icons/watch1.jpg" },
  { id: 12, name: "jeans", price: 5000, image: "./icons/jeans1.jpg" }
];

// Render products into main section
const productList = document.getElementById("product-list");

function renderProducts(productsToRender) {
  productList.innerHTML = "";
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

// render
renderProducts(products);

// Cart functionality
function addToCart(id) {
  const product = products.find(p => p.id === id);
  alert(product.name + " added to cart!");
}

// Search + Filter combined
const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");

function filterProducts() {
  const query = searchBar.value.toLowerCase();
  const selected = categoryFilter.value.toLowerCase();

  let filtered = products;

  // filter by category
  if (selected !== "all") {
    filtered = filtered.filter(p => p.name.toLowerCase() === selected);
  }

  // filter by search query
  if (query) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
  }

  renderProducts(filtered);
}

// Events
searchBar.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
