// Event Handling 🎈
document.getElementById("colorButton").addEventListener("click", () => {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").innerText = "You're hovering!";
});

document.getElementById("hoverBox").addEventListener("mouseout", () => {
  document.getElementById("hoverBox").innerText = "Hover Over Me";
});

document.getElementById("keypressInput").addEventListener("keypress", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

document.getElementById("secretButton").addEventListener("dblclick", () => {
  alert("Secret action triggered!");
});

// Interactive Elements 🎮
document.querySelectorAll(".gallery-img").forEach((img, index) => {
  img.addEventListener("click", () => {
    alert(`Image ${index + 1} clicked!`);
  });
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(content => content.classList.add("hidden"));
    const targetContent = document.getElementById(tab.dataset.content);
    targetContent.classList.remove("hidden");
  });
});

// Form Validation 📋✅
document.getElementById("email").addEventListener("input", (event) => {
  const emailFeedback = document.getElementById("emailFeedback");
  if (!event.target.validity.valid) {
    emailFeedback.textContent = "Please enter a valid email address.";
  } else {
    emailFeedback.textContent = "";
  }
});

document.getElementById("password").addEventListener("input", (event) => {
  const passwordFeedback = document.getElementById("passwordFeedback");
  if (event.target.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
  } else {
    passwordFeedback.textContent = "";
  }
});

document.getElementById("form").addEventListener("submit", (event) => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  if (!email.validity.valid || password.value.length < 8) {
    event.preventDefault();
    alert("Form validation failed. Please check your inputs.");
  }
});