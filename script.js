const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const checkoutMessage = document.querySelector("[data-checkout-message]");

const PAYMENT_LINKS = {
  "obsidian-mirror": {
    6: "https://buy.stripe.com/REPLACE_OBSIDIAN_MIRROR_SIZE_6",
    7: "https://buy.stripe.com/REPLACE_OBSIDIAN_MIRROR_SIZE_7",
    8: "https://buy.stripe.com/REPLACE_OBSIDIAN_MIRROR_SIZE_8",
    9: "https://buy.stripe.com/REPLACE_OBSIDIAN_MIRROR_SIZE_9",
    10: "https://buy.stripe.com/REPLACE_OBSIDIAN_MIRROR_SIZE_10",
    11: "https://buy.stripe.com/REPLACE_OBSIDIAN_MIRROR_SIZE_11",
    12: "https://buy.stripe.com/REPLACE_OBSIDIAN_MIRROR_SIZE_12",
  },
  "obsidian-matte": {
    6: "https://buy.stripe.com/REPLACE_OBSIDIAN_MATTE_SIZE_6",
    7: "https://buy.stripe.com/REPLACE_OBSIDIAN_MATTE_SIZE_7",
    8: "https://buy.stripe.com/REPLACE_OBSIDIAN_MATTE_SIZE_8",
    9: "https://buy.stripe.com/REPLACE_OBSIDIAN_MATTE_SIZE_9",
    10: "https://buy.stripe.com/REPLACE_OBSIDIAN_MATTE_SIZE_10",
    11: "https://buy.stripe.com/REPLACE_OBSIDIAN_MATTE_SIZE_11",
    12: "https://buy.stripe.com/REPLACE_OBSIDIAN_MATTE_SIZE_12",
  },
  "arctic-pearl": {
    6: "https://buy.stripe.com/REPLACE_ARCTIC_PEARL_SIZE_6",
    7: "https://buy.stripe.com/REPLACE_ARCTIC_PEARL_SIZE_7",
    8: "https://buy.stripe.com/REPLACE_ARCTIC_PEARL_SIZE_8",
    9: "https://buy.stripe.com/REPLACE_ARCTIC_PEARL_SIZE_9",
    10: "https://buy.stripe.com/REPLACE_ARCTIC_PEARL_SIZE_10",
    11: "https://buy.stripe.com/REPLACE_ARCTIC_PEARL_SIZE_11",
    12: "https://buy.stripe.com/REPLACE_ARCTIC_PEARL_SIZE_12",
  },
  "rose-quartz": {
    6: "https://buy.stripe.com/REPLACE_ROSE_QUARTZ_SIZE_6",
    7: "https://buy.stripe.com/REPLACE_ROSE_QUARTZ_SIZE_7",
    8: "https://buy.stripe.com/REPLACE_ROSE_QUARTZ_SIZE_8",
    9: "https://buy.stripe.com/REPLACE_ROSE_QUARTZ_SIZE_9",
    10: "https://buy.stripe.com/REPLACE_ROSE_QUARTZ_SIZE_10",
    11: "https://buy.stripe.com/REPLACE_ROSE_QUARTZ_SIZE_11",
    12: "https://buy.stripe.com/REPLACE_ROSE_QUARTZ_SIZE_12",
  },
};

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function setCheckoutMessage(message, isError = false) {
  if (!checkoutMessage) return;
  checkoutMessage.textContent = message;
  checkoutMessage.style.color = isError ? "#8f2f24" : "#5a554d";
}

function getSelectedProduct(button) {
  const card = button.closest("[data-product-card]");
  const sizeSelect = card.querySelector("[data-ring-size]");

  return {
    id: card.dataset.productId,
    name: card.dataset.productName,
    size: sizeSelect.value,
  };
}

function getPaymentLink(product) {
  return PAYMENT_LINKS[product.id]?.[product.size];
}

function startCheckout(button) {
  const product = getSelectedProduct(button);
  const paymentLink = getPaymentLink(product);

  if (!paymentLink || paymentLink.includes("REPLACE_")) {
    setCheckoutMessage(
      `Add the Stripe Payment Link for ${product.name}, size ${product.size}, in script.js.`,
      true
    );
    return;
  }

  button.disabled = true;
  button.textContent = "Opening checkout...";
  setCheckoutMessage(`Opening secure checkout for ${product.name}, size ${product.size}.`);
  window.location.href = paymentLink;
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-checkout]").forEach((button) => {
  button.addEventListener("click", () => startCheckout(button));
});
