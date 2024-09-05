// Define the price of the product
const productPrice = 289;

function toggleDropdown() {
    const options = document.getElementById('quantityOptions');
    const arrow = document.getElementById('arrow');
    if (options.style.display === "none" || !options.style.display) {
        options.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    } else {
        options.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }
}

// Update the selected quantity and close the dropdown
function selectQuantity(quantity) {
    document.getElementById('selectedQuantity').innerText = quantity;

    // Adjust options based on selected quantity
    const quantityOptions = document.getElementById('quantityOptions');
    quantityOptions.innerHTML = '';  // Clear existing options

    // If 1 is selected, start from 2, else start from 1
    let start = quantity === 1 ? 2 : 1;

    for (let i = start; i <= 10; i++) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerText = i;
        optionDiv.onclick = function() { 
            selectQuantity(i); 
            toggleDropdown(); // Close the dropdown after selecting a quantity
        };
        quantityOptions.appendChild(optionDiv);
    }
}

// Initialize the dropdown options without opening the dropdown
window.onload = function() {
    // Set the default quantity without toggling the dropdown
    selectQuantity(1);
}

// Handle the "Buy Now" button click
document.getElementById('buyNowButton').addEventListener('click', function() {
    const selectedQuantity = parseInt(document.getElementById('selectedQuantity').innerText);
    const totalPrice = selectedQuantity * productPrice;

    // Redirect to order.html with quantity and total price as URL parameters
    window.location.href = `order.html?quantity=${selectedQuantity}&totalPrice=${totalPrice}`;
});



// image Changer
function showImage(clickedImage) {
    const bigImage = document.getElementById('bigImage');
    bigImage.src = clickedImage.src;
}