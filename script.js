// Ensure text color adapts to the background gradient
const textElements = document.querySelectorAll('.welcome-text, .kiosk-text, .designed-by');
let colorIndex = 0;
const colors = ['white', 'black'];

function updateTextColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    textElements.forEach(el => el.style.color = colors[colorIndex]);
}

// Change text color every 3 seconds
setInterval(updateTextColor, 1000);

// Redirect to Google after 10 seconds
setTimeout(() => {
   window.location.href = 'https://mycampuz.co.in/visitor';
 //  window.location.href = 'https://mycampuz.co.in/visitor/#/visitor';
// i need check this again 
    // i have time till the date of 26/6/2025 i need to create the OS OR type of KIOSK system by using the linuex

}, 1530);
