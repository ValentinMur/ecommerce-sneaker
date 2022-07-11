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
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add(active)

        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove(active)
        }
    })
}

/*===== CHANGE COLOR HEADER =====*/

window.onscroll = () => {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}


///////////*===== DESAFIO COMPLEMENTARIO CODER =====*////////////////

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let precio = parseFloat(prompt('INGRESAR NUMERO'));
// let descuento20 = precio - (precio * 0.2);
// console.log(descuento20);


// const sneakers1 = prompt('FIRST SNEAKER');
// const sneakers2 = prompt('SECOND SNEAKER');
// const sneakers3 = prompt('THIRD SNEAKER');
// const sneakers4 = prompt('QUARTER SNEAKER');
// const sneakers5 = prompt('FIFTH SNEAKER');
// const espacio = ' ';

// if ((sneakers1 != '') && (sneakers2 != '') && (sneakers3 != '') && (sneakers4 != '') && (sneakers5 != '')) {
//     let carrito = sneakers1 + ' ' + sneakers2 + ' ' + sneakers3 + espacio + sneakers4 + espacio + sneakers5
//     console.log(carrito);
// } else {

//     console.log('ERROR NEED FIVE SNEAKERS')
// }

// function Perro(nombre, edad, vivo) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.vivo = vivo;
// };

// const labrador = new Perro('inca', 20, false);
// console.log(labrador);

// const caniche = new Perro('tobi', 7, true);
// console.log(caniche);

// function Human(name, country, age) {
//     this.name = name;
//     this.country = country;
//     this.age = age;
// };

// const asian = new Human('VinoToro', 'Argentinian', 23);
// console.log(asian);


// class Celular {
//     constructor(color, peso, rdp, rdc, ram) {
//         this.color = color;
//         this.peso = peso;
//         this.resolucionDePantalla = rdp;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }
//     botonEncendido() {
//         if (this.encendido == false) {
//             alert('celular prendido')
//             this.encendido = true;
//         } else {
//             alert('celular apagado');
//         }
//     }

//     reiniciar() {
//         if (this.encendido == true) {
//             alert('reiniciando celular');
//         } else {
//             alert('el celular esta apagado')
//         }
//     }

//     tomarFoto() {
//         alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
//     }

//     grabarVideo() {
//         alert(`grabar video en: ${this.resolucionDeCamara}`)
//     }
// }


// celular1 = new Celular('rojo', '150g', '5', 'full hd', '2GB');




////////////////////////*===== DESAFIO ENTREGABLE CODER =====*////////////////////




// const arrayProductos = ['Nike Free RN, ' + 'Adidas Flex, ' + 'Nike Jordan']



// for (let i = 0; i < arrayProductos.length; i++) {
//     console.log(arrayProductos[i])
// }

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre,
            this.precio = Number(precio),
            this.stock = stock
    };
}

let nikeFreeRn = new Producto('Nike Free Rn', 100, 10)
let adidasFlex = new Producto('Adidas Flex', 70, 10)
let nikeJordan = new Producto('Nike Jordan', 100, 10)

// alert('Hola bienvenidos a ruby\n\nestos son los productos en el catalogo \n\n *Nike Free RN $100\n *Adidas Flex $70\n *Nike Jordan $100');



function agregarCarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if (tenemosStock === 'tenemos stock') {
        console.log('Agregas producto al carrito: ' + producto + ' ' + stock);
    } else {
        console.log('No hay productos agregados');
    }


}


function validarStock(stockdelProducto) {
    if (stockdelProducto > 0) {
        return 'tenemos stock'
    } else {
        return 'no hay stock'
    }
}

function precioFinal() { }


agregarCarrito('Nike Jordan', 1)
agregarCarrito('Nike Air', 5)