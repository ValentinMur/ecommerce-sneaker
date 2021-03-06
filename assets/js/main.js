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


import { stockProductos } from "./stock.js";

let carrito = []

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById("carrito-contenedor")

stockProductos.forEach((producto) => {
    const article = document.createElement('article');
    article.classList.add('sneaker');
    article.innerHTML = `
    <img class="sneaker__img" src=${producto.imagen} alt=''>
    <span class="sneaker__name">${producto.nombre}</span>
    <span class="sneaker__preci">Precio:$ ${producto.precio}</span>
    <button href="" id="${producto.id}" class="button-light">Add to Cart <i class='bx bx-right-arrow-alt button-icon'></i></button>
    `

    contenedorProductos.appendChild(article)

    const boton = document.getElementById(`${producto.id}`)

    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);

    })
})


const agregarAlCarrito = (idProducto) => {
    const item = stockProductos.find((producto) => producto.id === idProducto)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)

}

const eliminarDelCarrito = (idProducto) => {
    const item = carrito.find((producto) => producto.id === idProducto)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ''

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: <span id='cantidad'>${producto.cantidad}<p>
        <button id='botonEliminar' class='boton-eliminar'><i class='bx bx-trash'></i></button>
        `
        contenedorCarrito.appendChild(div)

        let boton = document.getElementById('botonEliminar');
        boton.addEventListener('click', () => {
            eliminarDelCarrito()
        })
    })

}



