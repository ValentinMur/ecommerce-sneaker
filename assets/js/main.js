/*===== MENU SHOW =====*/



const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')

        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== CHANGE COLOR HEADER =====*/

// window.onscroll = () => {
//     const nav = document.getElementById('header')
//     if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
// }


///////////*===== DESAFIO COMPLEMENTARIO CODER =====*////////////////



////////////////////////*===== DESAFIO ENTREGABLE CODER =====*////////////////////




let carrito = JSON.parse(localStorage.getItem('carrito')) ?? []

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById("carrito-contenedor")
const botonVaciar = document.getElementById('vaciar-carrito')
const botonComprar = document.getElementById('comprar-carrito')
const contadorCarrito = document.getElementById('contador-carrito')
const precioTotal = document.getElementById('precioTotal')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


botonComprar.addEventListener('click', () => {

    swal({
        title: "Checkout",
        text: "press cancel to continue shopping or confirm to make the purchase",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("thank you for choosing us!", {
                    icon: "success",

                });
                carrito.length = 0
            } else {
                swal("keep buying!");

            }
            actualizarCarrito()
        });
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    swal({
        title: "Delete all",
        text: "D:",
        icon: "success",
    })
    actualizarCarrito()
})

const buscarUnProductoEnMeli = () => {
    fetch('assets/js/productos.json')
        .then((response) => response.json())
        .then(stockProductos => {
            stockProductos.forEach((producto) => {
                const article = document.createElement('article');
                article.classList.add('sneaker');
                article.innerHTML = `
    <img class="sneaker__img" src=${producto.imagen} alt=''>
    <span class="sneaker__name">${producto.nombre}</span>
    <span class="sneaker__preci">Price:$ ${producto.precio}</span>
    <button href="" id="${producto.id}" class="button-light">Add to Cart <i class='bx bx-right-arrow-alt button-icon'></i></button>
    `

                contenedorProductos.appendChild(article)

                const boton = document.getElementById(`${producto.id}`)

                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto.id);


                })
            })


        })
}

buscarUnProductoEnMeli()


const agregarAlCarrito = (idProducto) => {
    const existe = carrito.some(producto => producto.id === idProducto)

    if (existe) {
        const producto = carrito.map(producto => {
            if (producto.id === idProducto) {
                producto.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((producto) => producto.id === idProducto)
        carrito.push(item)
        console.log(carrito)
    }

    swal({
        title: "Add to cart",
        text: ":D",
        icon: "success",
    });

    actualizarCarrito()
}

const eliminarDelCarrito = (idProducto) => {
    const item = carrito.findIndex((producto) => producto.id === idProducto)
    carrito.splice(item, 1)

    actualizarCarrito()


}


const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ''

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Price: ${producto.precio}</p>
        <p>Amount: <span id='cantidad'>${producto.cantidad}<p>
        <button onclick="eliminarDelCarrito(${producto.id})" class='boton-eliminar'><i class='bx bx-trash'></i></button>
        <button class='boton-eliminar'></button>
        `
        contenedorCarrito.appendChild(div)


    })
    localStorage.setItem('carrito', JSON.stringify(carrito))
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
}

