const addToCartButton = document.querySelector('.add-to-cart-btn');
  const cartIcon = document.querySelector('.cart-icon');
  const cartCounter = document.querySelector('.cart-counter');
  const cartDisplay = document.querySelector('.cart-display');
  const cartItemsList = document.querySelector('.cart-items');
  
  let cartItems = [];
  
  addToCartButton.addEventListener('click', function() {
      addToCart();
  });
  
  function addToCart() {
      // In a real scenario, you'd have an object representing the product being added
      const product = {
          id: cartItems.length + 1,
          name: 'ROCKSHELL MARK III SCUBA',
          price: 499.00,
          quantity: 1
      };
      
      cartItems.push(product);
      updateCartCounter();
      renderCartItems();
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
      
      // Add event listeners to delete buttons
      const removeButtons = document.querySelectorAll('.remove-item');
      removeButtons.forEach(button => {
          button.addEventListener('click', function() {
              const itemId = parseInt(button.getAttribute('data-id'));
              removeFromCart(itemId);
          });
      });
  }
  
  function removeFromCart(itemId) {
      cartItems = cartItems.filter(item => item.id !== itemId);
      renderCartItems();
      updateCartCounter();
  }