const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const bag = document.querySelector("[data-bag]");
const bagItem = document.querySelector("[data-bag-item]");
const reserveLink = document.querySelector("[data-reserve-link]");
const bagClose = document.querySelector("[data-bag-close]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
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

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.dataset.add;
    bagItem.textContent = item;
    reserveLink.href = `mailto:hello@ringo.example?subject=${encodeURIComponent(`RINGO reservation: ${item}`)}`;
    bag.hidden = false;
  });
});

bagClose.addEventListener("click", () => {
  bag.hidden = true;
});
