const openPopupButtons = document.querySelectorAll('.payment-grid button');
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopupButton = document.getElementById("close-popup");

// Function to open the popup and set dynamic content
function openPopup(content) {
    popup.style.display = "block";
    popupContent.innerHTML = content; // Set dynamic content in the popup
}

// Add event listeners to each button to open the popup with different content
openPopupButtons[0].addEventListener("click", function() {
    openPopup("Content for Option 1");
});
openPopupButtons[1].addEventListener("click", function() {
    openPopup("Content for Option 2");
});
openPopupButtons[2].addEventListener("click", function() {
    openPopup("Content for Option 3");
});

// Close the popup when the close button is clicked
closePopupButton.addEventListener("click", function() {
    popup.style.display = "none";
});