const products = [
  { name: "Laptop", price: 850000 },
  { name: "Mouse", price: 15000 },
  { name: "Keyboard", price: 30000 },
];

const productList = document.querySelector("#product-list");

const cartCount = document.querySelector("#cart-count")

const cartTotal = document.querySelector("#cart-total");

// productList.innerHTML = "";

function listOfProduct() {
  products.forEach((product) => {
    const card = document.createElement("div");

    card.style.border = "1px solid purple";
    card.style.margin = "10px";
    card.style.padding = "10px";

    card.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: NGN ${product.price.toLocaleString()}</p>
    <button id="card-btn">Add to Cart</button>
    `;

    const button = card.querySelector("#card-btn");

    button.addEventListener("click", () => {
    addToCart(product)
      
      totalPrice()
    });

    productList.appendChild(card);
  });
}
listOfProduct();

let cart = [];

function addToCart(product) {
  cart.push(product);
  cartCount.textContent = cart.length;
}

function totalPrice() {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  cartTotal.textContent = total.toLocaleString();
}

