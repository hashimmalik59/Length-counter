// Character counter app

// Accessing Element
const input = document.querySelector("input");
const size = document.querySelector(".length");
const character = document.querySelector(".character");

input.addEventListener("input", function (e) {
    // Logic of Character counter
    const len = e.target.value.length; // Length of Character
    const char = e.target.value; // Character
    size.textContent = len;
    character.textContent = char;
});