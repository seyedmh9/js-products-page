const products = document.querySelectorAll(".ProductCon");
const Categoreis = document.querySelectorAll(".CategoryList");
const nameInput = document.querySelector(".Search_input-name");
const priceInput = document.querySelector(".Search_input-price");

let lastCat;

const selectCategory = (event) => {
    
  if (lastCat) {
    lastCat.target.classList.remove("clickCategory");
  }
  const selectCategory = event.target.dataset.categoryName;
  event.target.classList.add("clickCategory");
  products.forEach((product) => {
    if (selectCategory === "All") {
      product.style.display = "flex";
      return;
    }
    const productsCategory = product.dataset.category;
    if (productsCategory !== selectCategory) {
      product.style.display = "none";
    } else {
      product.style.display = "flex";
    }
  });
  lastCat = event;
};

const searchName = (event) => {
  const valueName = event.target.value.toLowerCase().trim();
      products.forEach((product) => {
        const productName = product.children[1].children[0].innerText.toLowerCase();
        if (productName.includes(valueName)) {
          product.style.display = "flex";
          productsFillter.push(product)
        } else {
          product.style.display = "none";
        }
      });
};

const searchPrice = (event) => {
  const valuePrice = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productPrice =
      product.children[1].children[1].innerText.toLowerCase();
    if (valuePrice != "") {
      if (productPrice == `$ ${valuePrice}`) {
        product.style.display = "flex";
      } else {
        product.style.display = "none";
      }
    } else {
      product.style.display = "flex";
    }
  });
};


window.addEventListener("load", () => {
  Categoreis.forEach((category) => {
    category.addEventListener("click", selectCategory);
  });
  nameInput.addEventListener("input", searchName);
  priceInput.addEventListener("keyup", searchPrice);
});
