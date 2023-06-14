import mixitup from "mixitup";

let mixerProducts = mixitup(".products__content", {
  selectors: {
    target: ".products__card",
  },
  animation: {
    duration: 300,
  },
});

/* Default filter products */

mixerProducts.filter(".delicacies");

/* Link active products */
const linkProducts = document.querySelectorAll(".products__item");
function activeProducts() {
  linkProducts.forEach((l) => l.classList.remove("active-product"));
  this.classList.add("active-product");
}

linkProducts.forEach((l) => l.addEventListener("click", activeProducts));
