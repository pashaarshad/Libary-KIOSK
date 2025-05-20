// Change text color based on background gradient step
const colors = ['white', 'black', 'red'];
const elements = document.querySelectorAll('.welcome-text, .kiosk-text, .designed-by');

let colorIndex = 0;

setInterval(() => {
  elements.forEach(el => {
    el.style.color = colors[colorIndex];
  });
  colorIndex = (colorIndex + 1) % colors.length;
}, 2000); // Change every 2 seconds

// Redirect to Google after 10 seconds
setTimeout(() => {
  window.location.href = "https://www.google.com";
}, 10000); // 10 seconds
