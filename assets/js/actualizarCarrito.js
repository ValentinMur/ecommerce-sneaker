const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precioTotal');

const actualizarCarrito = (carritoDeCompras) => {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, item) => acc + item.cantidad, 0);
    precioTotal.innerText = carritoDeCompras.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);


} 