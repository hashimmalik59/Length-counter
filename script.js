// Character counter app

// Accessing Element
const input = document.querySelector("textarea");
const showLenght = document.querySelector("p");
console.log(input, showLenght);


input.addEventListener("input", function (e) {
    // Logic of Character counter
    const size = e.target.value.length; // Length of Character
    console.log(size);
    showLenght.textContent = `Length: ${size}`;
});