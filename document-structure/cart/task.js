const addToCartButtons = document.querySelectorAll('.product__add');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    let productElement = this.closest('.product');
    let productImage = productElement.querySelector('.product__image').src;
    let productQuantity = parseInt(productElement.querySelector('.product__quantity-value').textContent);
    let existingProduct = document.querySelector('.cart__product[data-id="' + productElement.dataset.id + '"]');

    if (existingProduct) {
      let countElement = existingProduct.querySelector('.cart__product-count');
      let count = parseInt(countElement.textContent);
      count += productQuantity;
      countElement.textContent = count;
    } else {
      let cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.dataset.id = productElement.dataset.id;
      let cartProductImage = document.createElement('img');
      cartProductImage.classList.add('cart__product-image');
      cartProductImage.src = productImage;
      cartProduct.appendChild(cartProductImage);
      let cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = productQuantity;
      cartProduct.appendChild(cartProductCount);
      let cartProducts = document.querySelector('.cart__products');
      cartProducts.appendChild(cartProduct);
    }
  });
});

let quantityControls = document.querySelectorAll('.product__quantity-control');
quantityControls.forEach(function(control) {
  control.addEventListener('click', function() {
    let valueElement = this.parentElement.querySelector('.product__quantity-value');
    let quantity = parseInt(valueElement.textContent);
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