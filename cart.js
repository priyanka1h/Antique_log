// Get the "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll(".add-to-cart");

// Add event listeners to the buttons
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCart);
}

// Function to add items to the cart
function addToCart(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the product information from the button's data attributes
  var productName = event.currentTarget.dataset.name;
  var productPrice = event.currentTarget.dataset.price;

  // Create a new row in the cart table
  var cartTable = document.querySelector(".cart-table");
  var newRow = cartTable.insertRow(-1);

  // Create the cells for the row
  var productNameCell = newRow.insertCell(0);
  var productPriceCell = newRow.insertCell(1);

  // Set the values for the cells
  productNameCell.innerHTML = productName;
  productPriceCell.innerHTML = productPrice;
}
