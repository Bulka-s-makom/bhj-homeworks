var addToCartButtons = document.querySelectorAll('.product__add');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var productElement = this.closest('.product');
    var productTitle = productElement.querySelector('.product__title').textContent;
    var productImage = productElement.querySelector('.product__image').src;
    var productQuantity = parseInt(productElement.querySelector('.product__quantity-value').textContent);
    var existingProduct = document.querySelector('.cart__product[data-id="' + productElement.dataset.id + '"]');

    if (existingProduct) {
      var countElement = existingProduct.querySelector('.cart__product-count');
      var count = parseInt(countElement.textContent);
      count += productQuantity;
      countElement.textContent = count;
    } else {
      var cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.dataset.id = productElement.dataset.id;
      var cartProductImage = document.createElement('img');
      cartProductImage.classList.add('cart__product-image');
      cartProductImage.src = productImage;
      cartProduct.appendChild(cartProductImage);
      var cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = productQuantity;
      cartProduct.appendChild(cartProductCount);
      var cartProducts = document.querySelector('.cart__products');
      cartProducts.appendChild(cartProduct);
    }
  });
});

var quantityControls = document.querySelectorAll('.product__quantity-control');
quantityControls.forEach(function(control) {
  control.addEventListener('click', function() {
    var valueElement = this.parentElement.querySelector('.product__quantity-value');
    var quantity = parseInt(valueElement.textContent);
    if (this.classList.contains('product__quantity-control_dec')) {
      if (quantity > 1) {
        quantity--;
      }
    } else if (this.classList.contains('product__quantity-control_inc')) {
      quantity++;
    }

    valueElement.textContent = quantity;
  });
});
