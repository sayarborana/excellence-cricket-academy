function submitDemo(e){
  e.preventDefault();
  document.getElementById("form-msg").textContent="Demo form submitted successfully. Later we can connect this form to email/WhatsApp.";
  e.target.reset();
  return false;
}