let header = document.getElementById("header");
let navBar = document.createElement("nav");
navBar.classList.add("header");
navBar.innerHTML = `<a class=" logo nav__link" href="index.html">LOGO</a>
<ul class="nav__menu">
   <li class="nav__item"><a class="nav__link" href="index.html">PRODUCTOS</a></li>
   <li class="nav__item"><a class="nav__link" href="#">CONTACTO</a></li>
   <a href = "carrito.html" id = "boton_carrito" title = "ver carrito"><button type="button" class="btn btn-warning position-relative"><img src="./images/carrito.png" height="32px" alt="carrito de compras">
   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0<span class="visually-hidden">unread messages</span>
   </span>
 </button>
    <a href = "#" id = "eliminar_carrito" title = "vaciar carrito"><button type="button" class="btn btn-warning"><img src="./images/trash3.svg" height="32px" alt="eliminar carrito"></button>
</ul>`
header.appendChild(navBar);


function cargarProductos() {
    cargarProductosLocalStorage();
    let card = "";
    let contenedor = document.getElementById("container");
    productos.forEach((producto, indice)=> {
        card = document.createElement("div");
        card.classList.add("card", "col-lg-3");
        card.innerHTML = `
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="precioProducto">Precio:$ ${producto.precio}</p>
          <a href="#" class="btn btn-primary" onClick = "agregarAlCarrito(${indice})">Comprar</a>
        </div>`
        contenedor.appendChild(card);
    })
}

productosLocalStorage(productos);
cargarProductos();
actualizarBotonCarrito();
document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);




