// ===== Ghar Ka Khana — menu data & small interactions =====

const DISHES = [
  {
    name: "Dal Makhani",
    desc: "Black urad dal simmered overnight with butter, cream and a smoky tadka. Rich, silky, Sunday-lunch famous.",
    price: 180,
    spice: 1,
  },
  {
    name: "Rajma Chawal",
    desc: "Slow-cooked kidney beans in a thick tomato-onion gravy, served over steamed jeera rice. The ultimate comfort plate.",
    price: 150,
    spice: 2,
  },
  {
    name: "Paneer Butter Masala",
    desc: "Soft paneer cubes in a creamy, mildly sweet tomato-cashew gravy, finished with kasuri methi and butter.",
    price: 220,
    spice: 1,
  },
  {
    name: "Aloo Paratha",
    desc: "Whole wheat parathas stuffed with spiced potato mash, cooked on the tawa with ghee. Served with curd and pickle.",
    price: 90,
    spice: 1,
  },
  {
    name: "Chole Bhature",
    desc: "Punjabi chickpeas in dark, tangy masala with puffed, pillowy bhature fried fresh to order. Pickled onions on the side.",
    price: 160,
    spice: 2,
  },
  {
    name: "Sarson Da Saag with Makki Di Roti",
    desc: "Winter classic: mustard greens slow-cooked with ginger and ghee, paired with hand-patted cornmeal rotis and white butter.",
    price: 200,
    spice: 2,
  },
  {
    name: "Baingan Bharta",
    desc: "Smoky roasted eggplant mashed and tossed with tomatoes, peas and freshly ground masala. Tastes like the tandoor it was roasted in.",
    price: 170,
    spice: 3,
  },
  {
    name: "Kheer",
    desc: "Rice and milk simmered low until thick and creamy, with cardamom, saffron, and roasted almonds. Served warm or chilled.",
    price: 80,
    spice: 0,
  },
];

const SPICE_LABELS = { 0: "No spice", 1: "Mild 🌶️", 2: "Medium 🌶️🌶️", 3: "Spicy 🌶️🌶️🌶️" };

function vegMark() {
  return `<span class="veg-mark" title="Pure veg" aria-label="Pure vegetarian"></span>`;
}

function spiceTag(level) {
  return `<span class="spice spice-${level}">${SPICE_LABELS[level]}</span>`;
}

function dishCard(dish, index) {
  return `
    <article class="dish-card" data-index="${index}">
      <div class="dish-head">
        <h3 class="dish-name">${dish.name}</h3>
        ${vegMark()}
      </div>
      <p class="dish-desc">${dish.desc}</p>
      <div class="dish-tags">
        <span class="dish-price">₹${dish.price}</span>
        ${spiceTag(dish.spice)}
      </div>
      <button class="btn-enquire" data-dish="${dish.name}">Enquire</button>
    </article>
  `;
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  grid.innerHTML = DISHES.map(dishCard).join("");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function wireEnquireButtons() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  grid.addEventListener("click", (event) => {
    const btn = event.target.closest(".btn-enquire");
    if (!btn) return;
    const dish = btn.dataset.dish;
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    showToast(`Great choice! Note "${dish}" down and reach us from the contact section. 🍽️`);
  });
}

function wireHeroButton() {
  const btn = document.getElementById("heroMenuBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu) menu.scrollIntoView({ behavior: "smooth" });
  });
}

function wireMobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  wireEnquireButtons();
  wireHeroButton();
  wireMobileNav();
  setYear();
});
