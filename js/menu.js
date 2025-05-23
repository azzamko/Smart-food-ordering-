document.addEventListener("DOMContentLoaded", () => {
  fetch("data/menu.json")
    .then((res) => res.json())
    .then((items) => {
      const menuContainer = document.getElementById("menu");
      items.forEach((item) => {
        const card = document.createElement("div");
        card.className = "menu-item";
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span>${item.price} د.إ</span>
        `;
        menuContainer.appendChild(card);
      });
    })
    .catch((err) => console.error("خطأ في تحميل القائمة:", err));
});
