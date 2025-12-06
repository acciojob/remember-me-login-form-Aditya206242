//your JS code here. If required.
// script.js

// Run after DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");
  const form = document.querySelector("form");

  // Helper to show/hide "Login as existing user" button
  function updateExistingButtonVisibility() {
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");
    if (savedUser && savedPass) {
      existingBtn.style.display = ""; // show (default)
    } else {
      existingBtn.style.display = "none";
    }
  }

  // Initialize visibility on load
  updateExistingButtonVisibility();

  // Submit behavior (form submit or button press)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = (usernameInput && usernameInput.value) ? usernameInput.value : "";
      const password = (passwordInput && passwordInput.value) ? passwordInput.value : "";

      // Show alert
      alert(`Logged in as ${username}`);

      // Remember me handling
      if (checkbox && checkbox.checked) {
        // store credentials in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        // remove remembered credentials
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      // Update existing button visibility after submit
      updateExistingButtonVisibility();
    });
  }

  // Existing user login button behavior
  if (existingBtn) {
    existingBtn.addEventListener("click", () => {
      const savedUser = localStorage.getItem("username");
      if (savedUser) {
        alert(`Logged in as ${savedUser}`);
      } else {
        // Safety: hide button if nothing is saved
        updateExistingButtonVisibility();
      }
    });
  }

  // Make sure existingBtn is hidden if not present in DOM or not needed
  if (!existingBtn) {
    // nothing to do
  } else {
    // ensure CSS default is hidden if not set by HTML
    if (existingBtn.style.display === "") { /* leave as is */ }
    updateExistingButtonVisibility();
  }
});
