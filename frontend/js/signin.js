const loginForm = document.getElementById("loginForm");
const loginPhone = document.getElementById("loginPhone");
const loginOtp = document.getElementById("loginOtp");
const loginMessage = document.getElementById("loginMessage");
let loginOtpSent = false;

document.getElementById("sendLoginOtp").addEventListener("click", () => {
  if (!/^\d{10}$/.test(loginPhone.value.replace(/\D/g, ""))) {
    loginMessage.textContent = "Enter a valid 10-digit phone number first.";
    loginMessage.style.color = "#bb4c3e";
    loginPhone.focus();
    return;
  }
  loginOtpSent = true;
  loginMessage.textContent = "OTP sent to your mobile number.";
  loginMessage.style.color = "#00866d";
  loginOtp.focus();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!loginForm.checkValidity() || !loginOtpSent || !/^\d{6}$/.test(loginOtp.value)) {
    loginMessage.textContent = "Enter your phone number, request an OTP, and enter its 6 digits.";
    loginMessage.style.color = "#bb4c3e";
    return;
  }
  loginMessage.textContent = "Phone verified. Welcome back!";
  loginMessage.style.color = "#00866d";
  window.setTimeout(() => showScreen("home"), 700);
});
