const cartIcon = document.querySelector('.cart-icon');
const cartCounter = document.querySelector('.cart-counter');
const cartDisplay = document.querySelector('.cart-display');
const cartItemsList = document.querySelector('.cart-items');
const totalAmountElement = document.getElementById("totalAmount");
const checkoutButton = document.getElementById("checkoutButton");

let cartItems = [];

const watchProducts = [
    {
        id: 1,
        name: 'ROCKSHELL MARK III SCUBA',
        price: 499.00,
        quantity: 1
    },
    {
        id: 2,
        name: 'COMPETENCE SKELETON III',
        price: 829.00,
        quantity: 1
    },
    {
        id: 3,
        name: 'DEEP SEA 200',
        price: 349.00,
        quantity: 1
    },
    {
        id: 4,
        name: 'PRIMELINE DAYDATE II',
        price: 799.00,
        quantity: 1
    },
    {
        id: 5,
        name: 'TEMPOMASTER CHRONO',
        price: 469.00,
        quantity: 1
    },
    {
        id: 6,
        name: 'VALAIS GENTS',
        price: 249.00,
        quantity: 1
    },
    {
        id: 7,
        name: 'VENUS DIAMOND',
        price: 329.00,
        quantity: 1
    },
    {
        id: 8,
        name: 'SEAROCK AUTOMATIC I',
        price: 829.00,
        quantity: 1
    },
    // Add more watches here...
];
cartIcon.addEventListener('click', function() {
    cartDisplay.style.display = cartDisplay.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        addToCart(productId);
    }
});

// Load cart items from local storage when the page loads
window.addEventListener('load', function() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
        updateCartCounter();
        renderCartItems();
        updateTotalPrice();
    }
});

checkoutButton.addEventListener("click", function() {
    // Calculate the total amount of all items in the cart
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    // Display the total amount
    totalAmountElement.textContent = `Total Amount: CHF ${totalAmount.toFixed(2)}`;

    // Clear the cartItems array and update the display
    cartItems = [];
    renderCartItems();
    updateCartCounter();

    // Clear cart items from local storage
    localStorage.removeItem('cartItems');
});

function saveCartItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function addToCart(productId) {
    const selectedProduct = watchProducts.find(product => product.id === productId);

    if (selectedProduct) {
        cartItems.push(selectedProduct);
        updateCartCounter();
        renderCartItems();
        updateTotalPrice();

        // Save cart items to local storage
        saveCartItemsToLocalStorage();
    }
}

function updateCartCounter() {
    cartCounter.textContent = cartItems.length;
}

function renderCartItems() {
    cartItemsList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} - CHF ${item.price.toFixed(2)}</span>
            <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        cartItemsList.appendChild(li);
    });
    cartDisplay.style.display = 'block';

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(button.getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
}

function removeFromCart(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
        renderCartItems();
        updateCartCounter();
        updateTotalPrice();

        // Save cart items to local storage
        saveCartItemsToLocalStorage();
    }
}

function updateTotalPrice() {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    totalAmountElement.textContent = `CHF ${totalPrice.toFixed(2)}`;
}
