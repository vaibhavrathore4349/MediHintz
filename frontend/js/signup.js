const signupForm = document.getElementById("signupForm");
const signupPhone = document.getElementById("signupPhone");
const signupOtp = document.getElementById("signupOtp");
const signupMessage = document.getElementById("signupMessage");
let signupOtpSent = false;

document.getElementById("sendSignupOtp").addEventListener("click", () => {
  if (!/^\d{10}$/.test(signupPhone.value.replace(/\D/g, ""))) {
    signupMessage.textContent = "Enter a valid 10-digit phone number first.";
    signupMessage.style.color = "#bb4c3e";
    signupPhone.focus();
    return;
  }
  signupOtpSent = true;
  signupMessage.textContent = "OTP sent to your mobile number.";
  signupMessage.style.color = "#00866d";
  signupOtp.focus();
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const validOtp = /^\d{6}$/.test(signupOtp.value);
  if (!signupForm.checkValidity() || !document.getElementById("signupTerms").checked || !signupOtpSent || !validOtp) {
    signupMessage.textContent = "Enter your phone number, request an OTP, and enter its 6 digits.";
    signupMessage.style.color = "#bb4c3e";
    return;
  }
  signupMessage.textContent = "Phone verified. Your account has been created!";
  signupMessage.style.color = "#00866d";
  window.setTimeout(() => showScreen("home"), 850);
});
