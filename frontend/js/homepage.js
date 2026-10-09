const screens = { home: [document.getElementById("home-screen"), document.getElementById("home-footer")], signup: [document.getElementById("signup-screen")], login: [document.getElementById("login-screen")], care: [document.getElementById("care-screen"), document.getElementById("home-footer")], trust: [document.getElementById("trust-screen"), document.getElementById("home-footer"), document.getElementById("trust-disclaimer")], how: [document.getElementById("how-screen"), document.getElementById("home-footer")], emergency: [document.getElementById("emergency-screen"), document.getElementById("home-footer")], privacy: [document.getElementById("privacy-screen"), document.getElementById("home-footer")], terms: [document.getElementById("terms-screen"), document.getElementById("home-footer")] };
function showScreen(name) { Object.values(screens).flat().forEach((element) => element.classList.remove("active")); screens[name].forEach((element) => element.classList.add("active")); window.scrollTo({ top: 0, behavior: "smooth" }); window.location.hash = name === "home" ? "" : name; }
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => showScreen(button.dataset.view)));
if (window.location.hash === "#signup") showScreen("signup");
if (window.location.hash === "#login") showScreen("login");
if (window.location.hash === "#care") showScreen("care");
if (window.location.hash === "#trust") showScreen("trust");
if (window.location.hash === "#how") showScreen("how");
if (window.location.hash === "#emergency") showScreen("emergency");
if (window.location.hash === "#privacy") showScreen("privacy");
if (window.location.hash === "#terms") showScreen("terms");
