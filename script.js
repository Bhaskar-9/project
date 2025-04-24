document.querySelector(".arrow-btn").addEventListener("click", () => {
    alert("You clicked the arrow button!");
  });
  const searchBtn = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert("Please enter something to search.");
  }
});

const arrowBtn = document.querySelector('.arrow-btn');
const cardsSection = document.querySelector('.mini-imgs');

arrowBtn.addEventListener('click', () => {
  cardsSection.scrollIntoView({ behavior: 'smooth' });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`You clicked: ${card.querySelector('h4').innerText}`);
  });
});

// Modal logic
// DOM Elements
// DOM Elements
const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');

// Open modal
loginBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on background click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Form submit
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && password) {
    // Save to localStorage
    localStorage.setItem('loggedInUser', username);
    alert(`Welcome, ${username}!`);
    modal.style.display = 'none';
    loginForm.reset();
    showLoggedInUser();
  } else {
    alert('Please enter username and password.');
  }
});

// If user is logged in, show greeting + logout button
function showLoggedInUser() {
  const user = localStorage.getItem('loggedInUser');
  if (user) {
    loginBtn.innerText = `👋 ${user}`;
    loginBtn.style.pointerEvents = "none";
    loginBtn.style.backgroundColor = "#ddd";
    logoutBtn.style.display = 'inline-block';
  }
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  alert('Logged out!');
  location.reload(); // Reset UI
});

// Call on page load
showLoggedInUser();


