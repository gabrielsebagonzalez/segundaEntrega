function buscarProducto(id) {
    let productos = cargarProductosLocalStorage();
    return productos.find(x => x.id == id);
}

function cargarProductosCarrito() {
     if(localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }
    return [];
}

function agregarAlCarrito(id) {
    let producto = buscarProducto(id);
    let productos_carrito = cargarProductosCarrito();
    productos_carrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(productos_carrito));
    actualizarBotonCarrito();
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
    carritoSeleccionados();
}

function actualizarBotonCarrito() {
    let productos_carrito = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn btn-warning position-relative"><img src="./images/carrito.png" height="32px" alt="carrito de compras">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${productos_carrito.length}<span class="visually-hidden">unread messages</span>
    </span>
  </button>`
    document.getElementById("boton_carrito").innerHTML = contenido;
}

function eliminarProducto(id) {
    let productos_carrito = cargarProductosCarrito();
    let carrito_actualizado = productos_carrito.filter(x => x.id != id); 
    localStorage.setItem("carrito", JSON.stringify(carrito_actualizado));
    actualizarBotonCarrito();
    carritoSeleccionados();
}

function carritoSeleccionados() {
    if(document.getElementById("productos_seleccionados")) {
        
        let productos = cargarProductosCarrito();
        let productos_seleccionados = document.getElementById("productos_seleccionados");
        let contenido = "";
        if(productos == 0) {
            contenido = "<p class='text-center'>No seleccionaste ningún producto!</p>"
            productos_seleccionados.innerHTML = contenido
    
        } else {
    
            let total = 0;
            contenido = `<table class="table table-hover mt-5">
            <tr>
            <th>Nombre</th>
            <th class="text-end">Precio</th>
            <th>&nbsp;</th>
            <tr>`;
        
        
            for(const producto of productos) {
                contenido += `<tr>
                <td>${producto.nombre}</td>
                <td class="text-end"><b>${producto.precio}</b></td>
                <td class="text-end"><button class="btn btn-danger" onclick="eliminarProducto(${producto.id});">[ X ]</button></td>
                </tr>`;
                total += producto.precio
            }
        
            contenido += `<tr>
            <td>Total a pagar</td>
            <td class="text-end"><b>$${total}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
        
            productos_seleccionados.innerHTML = contenido
        }
    }

    document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);
}
