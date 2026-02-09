const toggle = document.getElementById("darkToggle");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
}

const savedTheme = localStorage.getItem("darkMode");
applyTheme(savedTheme === "true");

toggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark);
});
