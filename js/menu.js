(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");

  });
  
  const navAboutUs = document.getElementById("header-nav__link-aboutUs");
  navAboutUs.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open")
  });
  const navProducts = document.getElementById("header-nav__link-products");
  navProducts.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open")
  });
  const navContacts = document.getElementById("header-nav__link-contacts");
  navContacts.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open")
  });
})();