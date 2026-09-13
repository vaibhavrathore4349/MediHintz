const screens = { home: [document.getElementById("home-screen"), document.getElementById("home-footer")], signup: [document.getElementById("signup-screen")], login: [document.getElementById("login-screen")] };
function showScreen(name) { Object.values(screens).flat().forEach((element) => element.classList.remove("active")); screens[name].forEach((element) => element.classList.add("active")); window.scrollTo({ top: 0, behavior: "smooth" }); window.location.hash = name === "home" ? "" : name; }
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => showScreen(button.dataset.view)));
if (window.location.hash === "#signup") showScreen("signup");
if (window.location.hash === "#login") showScreen("login");
