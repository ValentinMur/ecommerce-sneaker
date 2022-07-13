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


class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre,
            this.precio = Number(precio),
            this.stock = stock
    };
}

let carrito = []


let stockProductos = [
    {
        id: 1,
        nombre: 'nike jordan',
        precio: 180,
        stock: 1000,
        imagen: "assets/img/featured1.png",
    },
    {
        id: 2,
        nombre: 'nike sply',
        precio: 70,
        stock: 1000,
        imagen: "assets/img/new2.png",
    },

]



const contenedorProductos = document.getElementById('contenedor-productos')

stockProductos.forEach((producto) => {
    const article = document.createElement('article');
    article.classList.add('sneaker');
    article.innerHTML = `
    <img class="sneaker__img" src=${producto.imagen} alt=''>
    <span class="sneaker__name">${producto.nombre}</span>
    <span class="sneaker__preci">Precio:$ ${producto.precio}</span>
    <button href="" onclick="agregarAlCarrito(${producto.id})" class="button-light">Add to Cart <i class='bx bx-right-arrow-alt button-icon'></i></button>
    `

    contenedorProductos.appendChild(article)
})


const agregarAlCarrito = (idProducto) => {
    const item = stockProductos.find((producto) => producto.id === idProducto)
    carrito.push(item)
    console.log(carrito)
}

function carritoCompra() {
    console.log(carrito);
}