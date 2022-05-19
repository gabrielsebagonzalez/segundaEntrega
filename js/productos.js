const productos = [
    {id: 0, nombre:"Notebook", marca:"Dell", precio: 89990, imagen:"./images/notebook.jpg"},
    {id: 1, nombre:"Teclado", marca:"Logitech", precio: 2250, imagen:"./images/teclado.jpg"},
    {id: 2, nombre:"Mouse", marca:"Logitech", precio: 1215, imagen:"./images/mouse.jpg"},
    {id: 3, nombre:"Auricular", marca:"Redragon", precio:5390, imagen:"./images/auricular.jpg"},
    {id: 4, nombre:"Webcam", marca: "Logitech", precio: 10990, imagen:"./images/webcam.jpg"},
    {id: 5, nombre:"Parlante", marca:"Logitech", precio: 2390,  imagen:"./images/parlantes.jpg"},
    {id: 6, nombre:"Tablet", marca:"Lenovo", precio: 30579, imagen:"./images/tablet.jpg"},
    {id: 7, nombre:"Microfono", marca:"Hiperx", precio: 17490, imagen:"./images/microfono.jpg"}];


    function productosLocalStorage(productos) {
        localStorage.setItem("productos", JSON.stringify(productos));
    } 

    function cargarProductosLocalStorage() {
        return JSON.parse(localStorage.getItem("productos"));
    }
