const productList = [
  {
    imgPath: "./headphone.jpg",
    name: "HeadPhones",
    category: "Electronics",
    rating: 5,
    price: 30.0,
  },
  {
    imgPath: "./mobile.jpg",
    name: "Mobiles",
    category: "Electronics",
    rating: 4,
    price: 100.0,
  },
  {
    imgPath: "./shirts.jpg",
    name: "Shirts",
    category: "Clothing",
    rating: 2,
    price: 40.0,
  },
  {
    imgPath: "./oven.jpg",
    name: "Oven",
    category: "Appliance",
    rating: 4,
    price: 30.0,
  },
  {
    imgPath: "./books.jpg",
    name: "Harry Poter",
    category: "Books",
    rating: 3,
    price: 30.0,
  },
];

let cartProduct = new Set();

// Filtering Option
const filterAllProduct = document.querySelector("#all-products");
const filterElectronics = document.querySelector("#electronics");
const filterClothing = document.querySelector("#clothing");
const filterAppliances = document.querySelector("#appliances");
const filterBooks = document.querySelector("#books");

// Sorting Options

const sortLowHigh = document.querySelector("#sort-low-high");
const sortHighLow = document.querySelector("#sort-high-low");
const ratingHighLow = document.querySelector("#rating-high-low");
const ratingLowHigh = document.querySelector("#rating-low-high");

// Products

const productContainer = document.querySelector(".product-list");
const addProduct = document.querySelector("#add-product");

// Cart

const cartContainer = document.querySelector(".card-container");

// Summary
const summaryQuantity = document.querySelector("#summary-Quantity");
const summaryPrice = document.querySelector("#summary-price");

// Form
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#search-input");

// Add Product Dialog
const addProductContainer = document.querySelector(".dialog");
const closeButton = document.querySelector(".close-button");

const productForm = document.querySelector("#add-product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productRating = document.querySelector("#product-rating");
const productCategory = document.querySelector("#product-category");
const productImage = document.querySelector("#product-image");

function generateProductHTML(product, index) {
  return ` <div class="product" id = "item-${index}"> 
  <img src="${product.imgPath}" alt="${product.name}" /> 
  <div class="product-info"> <h4>${product.name}</h4> 
  <p class="category">${product.category}</p> 
  <div class="rating">${"⭐".repeat(product.rating)}</div> 
  <p>$${product.price.toFixed(2)}</p> 
  </div> <button>Add to Cart</button> </div> `;
}

function generateCardDetailsHTML(product, index) {
  return `<div class="cart-item" id="card-${index}">
            <img src="${product.imgPath}" alt="${product.name}"/>
            <div class="cart-item-info">
              <h4>${product.name}</h4>

              <p>Price: $${product.price}</p>
              <p>Quantity: 1</p>
            </div>
          </div>`;
}

function renderProducts(products) {
  productContainer.innerHTML = products
    .map((product, index) => generateProductHTML(product, index))
    .join("");
}

function renderCart(product) {
  cartContainer.innerHTML = product
    .map((product, index) => generateCardDetailsHTML(product, index))
    .join("");
}

function openProductForm() {
  addProduct.addEventListener("click", () => {
    addProductContainer.style.display = "block";
  });
}

function addProducts() {
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      imgPath: productImage.value,
      name: productName.value,
      category: productCategory.value,
      price: +productPrice.value,
      rating: +productRating.value,
    };

    productList.push(data);
    renderProducts(productList);

    addProductContainer.style.display = "none";

    console.log(e);
  });
}

function closeProductForm() {
  closeButton.addEventListener("click", () => {
    addProductContainer.style.display = "none";
  });
}

function sortProduct() {
  sortLowHigh.addEventListener("click", () => {
    productList.sort((a, b) => a.price - b.price);
    renderProducts(productList);
  });

  sortHighLow.addEventListener("click", () => {
    productList.sort((a, b) => b.price - a.price);
    renderProducts(productList);
  });

  ratingLowHigh.addEventListener("click", () => {
    productList.sort((a, b) => a.rating - b.rating);
    renderProducts(productList);
  });

  ratingHighLow.addEventListener("click", () => {
    productList.sort((a, b) => b.rating - a.rating);
    renderProducts(productList);
  });
}

function filterProduct() {
  filterAllProduct.addEventListener("click", () => {
    renderProducts(productList);
  });

  filterElectronics.addEventListener("click", () => {
    const filteredProduct = productList.filter(
      (product) => product.category === "Electronics"
    );
    renderProducts(filteredProduct);
  });

  filterBooks.addEventListener("click", () => {
    const filteredProduct = productList.filter(
      (product) => product.category === "Books"
    );
    renderProducts(filteredProduct);
  });
  filterAppliances.addEventListener("click", () => {
    const filteredProduct = productList.filter(
      (product) => product.category === "Appliance"
    );
    renderProducts(filteredProduct);
  });

  function abc() {
    const filteredProduct = productList.filter(
      (product) => product.category === "Clothing"
    );
    renderProducts(filteredProduct);
  }
  filterClothing.addEventListener("click", (a, b) => abc(a, b));
}

function searchByTitle() {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = searchInput.value.trim();

    if (title) {
      const filteredProduct = productList.filter(
        (product) => product.name.toLowerCase() === title.toLowerCase()
      );

      renderProducts(filteredProduct);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(productList);
  sortProduct();
  filterProduct();
  searchByTitle();
  closeProductForm();

  openProductForm();
  addProducts();
  productContainer.addEventListener("click", (event) => {
    const productElement = event.target.closest(".product");
    if (productElement) {
      const index = parseInt(productElement.id.split("-")[1]);

      console.log(productList[index]);
      cartProduct.add(productList[index]);

      renderCart([...cartProduct]);

      summaryQuantity.innerHTML = cartProduct.size;
      summaryPrice.innerHTML = [...cartProduct].reduce(
        (acc, curr) => acc + curr.price,
        0
      );
    }
  });

  cartContainer.addEventListener("click", (event) => {
    const cartElement = event.target.closest(".cart-item");

    if (cartElement) {
      if (cartElement) {
        console.log(cartElement);

        const index = parseInt(cartElement.id.split("-")[1]);

        console.log(productList[index]);

        cartProduct.delete(productList[index]);

        renderCart([...cartProduct]);

        summaryQuantity.innerHTML = cartProduct.size;
        summaryPrice.innerHTML = [...cartProduct].reduce(
          (acc, curr) => acc + curr.price,
          0
        );
      }
    }
  });
});
