/** @type {HTMLElement} */
const themeToggler = document.querySelector("#toggle-theme");

themeToggler.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  themeToggler.innerText = isDark ? "Light Theme" : "Dark Theme";
});
