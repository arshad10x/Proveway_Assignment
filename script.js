const cards = document.querySelectorAll(".card-container");
const totalPriceElement = document.getElementById("totalPrice");

// Loop through each card to add functionality
cards.forEach((card) => {
    // Get the radio button and dropdown container within the card
    const radioButton = card.querySelector("input[type='radio']");
    const dropdownContainer = card.querySelector(".dropdown-container");

    // Add an event listener to the radio button
    radioButton.addEventListener("change", () => {
        // Close all dropdowns and reset styles for all cards
        cards.forEach((otherCard) => {
            const otherDropdown = otherCard.querySelector(
                ".dropdown-container"
            );
            const otherRadio = otherCard.querySelector("input[type='radio']");

            // Hide dropdown and uncheck radio button if it's not the current card
            if (otherCard !== card) {
                otherDropdown.style.display = "none";
                otherRadio.checked = false;
                otherCard.style.backgroundColor = "#ffffff"; 
            }
        });

        // Show or hide the dropdown for the selected card
        if (radioButton.checked) {
            dropdownContainer.style.display = "block"; // Show dropdown
            card.style.backgroundColor = "#ffecef"; // Highlight card with pink background
        } else {
            dropdownContainer.style.display = "none"; // Hide dropdown
            card.style.backgroundColor = "#ffffff"; // Reset background color
        }
    });
});

// Get all radio buttons across cards
const radioButtons = document.querySelectorAll("input[type='radio']");

// Add functionality to update total price when a radio button is selected
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
        // Get the price from the data attribute of the selected radio button
        const price = this.getAttribute("data-price");

        // Update the total price in the footer
        totalPriceElement.textContent = `Total: $${price}.00 USD`;
    });
});
