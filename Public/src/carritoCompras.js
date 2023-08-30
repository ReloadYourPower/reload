

// Elementos del DOM que necesito para el carrito
const buttons = document.getElementsByClassName('add-button');
const cartList = document.getElementById('cart-list');
const clearButton = document.getElementById('clear-button');
const cartDateElement = document.getElementById('cart-date');

// Obtener productos del Local Storage (si existen) o tomar un array vacío por defecto
let products = JSON.parse(localStorage.getItem('products')) || [];

// Agregar producto al carrito
function agregarProducto(productTitle, productImage, productPrice) {
    products.push({ name: productTitle, image: productImage, precio: productPrice });
    localStorage.setItem('products', JSON.stringify(products));
    renderCart();
}


// Función para mostrar los productos en el carrito
function renderCart(product) {
    cartList.innerHTML = '';
    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-product-image">
            <span>${product.name}</span>
            <p>Precio: ${product.precio}</p>
            <button class="remove-button" data-index="${index}">Eliminar</button>
        `;
        cartList.appendChild(li);
    });
}


// Eliminar producto del carrito
cartList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
        const index = parseInt(event.target.getAttribute('data-index'));
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        renderCart();
    }
});

// Vaciar carrito
clearButton.addEventListener('click', () => {
    products = [];
    localStorage.removeItem('products');
    renderCart();
});

// Agregar evento a los botones "Agregar"
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const productTitle = buttons[i].parentNode.querySelector('.product-name').textContent;
        const productImage = buttons[i].parentNode.querySelector('img').getAttribute('src');
        const productPrice = buttons[i].parentNode.querySelector('p').textContent;
        agregarProducto(productTitle, productImage, productPrice);
    });
}


// Mostrar productos al cargar la página
renderCart();




