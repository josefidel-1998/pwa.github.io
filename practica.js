'use strict'

/**
 * Declaramnos algunas variables Globales
 */
let carrito = [];
let result;
let can = 1;

/**
 * funcion que crea la barra de navegacion
 */
function navegacion() {
    let body = document.querySelector('body');
    let header = document.createElement('header');
    let nav = document.createElement('nav');
    let h1 = document.createElement('h1');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    div1.className = 'nav-container';
    div2.className = 'nav-items';

    let enlace1 = document.createElement('a');

    enlace1.href = '#';
    enlace1.id = 'enlace';
    let icono1 = document.createElement('i');
    let ul = document.createElement('ul');

    //icono1.className = 'fas fa-shopping-cart';
    icono1.className = 'fa fa-shopping-cart';
    icono1.id = 'carrito';
    ul.className = 'links-containers';

    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');

    li1.className = 'links-item';
    li2.className = 'links-item';
    li3.className = 'links-item';
    li4.className = 'links-item';

    let enlace3 = document.createElement('a');
    let enlace4 = document.createElement('a');
    let enlace6 = document.createElement('a');

    enlace3.href = '#particles-js';
    enlace4.href = '#productos';
    enlace6.href = '#formulario';

    enlace3.className = 'link';
    enlace4.className = 'link';
    enlace6.className = 'link';

    enlace3.innerHTML = 'Inicio';
    enlace4.innerHTML = 'Productos';
    enlace6.innerHTML = 'Contacto';

    li1.append(enlace3);
    li2.append(enlace4);
    li4.append(enlace6);

    ul.append(li1,li2,li4);

    enlace1.append(icono1);

    nav.append(div1, ul); // navegacion

    div1.append(h1, div2);

    div2.append(enlace1);

    header.append(nav);

    body.prepend(header);
}
navegacion(); // Ejecutamos la navegacion

/**
 * Definimos una variable para el contenedor principal
 */
let seccion1 = document.querySelector('#productos');
let bannerSeccion = document.querySelector('#bannerSeccion');

/**
 * Creamos el array de objetos de los productos
 */
 const productos = [
    {
        id: 1,
        nombre: 'Audifonos para PS4',
        descripcion: 'Audifonos inalambricos exclusivamente para PS4',
        precio: 4000,
        precioDescuento: 2000,
        imagen: 'imagenes/audifonos-ps4.jpg',
        categoria: 'Accesorios',
    },
    {
        id: 2,
        nombre: 'Audifonos para PS5',
        descripcion: 'Audifonos inalambricos exclusivamente para PS5',
        precio: 6000,
        precioDescuento: 3000,
        imagen: 'imagenes/audifonos-ps5.jpg',
        categoria: 'Accesorios',
    },
    {
        id: 3,
        nombre: 'Auriculares para Ps4',
        descripcion: 'Auriculares para tu control de Ps4',
        precio: 2000,
        precioDescuento: 1000,
        imagen: 'imagenes/auriculares-ps4.jpg',
        categoria: 'Accesorios',
    },
    {
        id: 4,
        nombre: 'Control para PS4',
        descripcion: 'Control inalambrico para tu PS4',
        precio: 7000,
        precioDescuento: 3500,
        imagen: 'imagenes/control-ps4.jpg',
        categoria: 'Accesorios',
    },
    {
        id: 5,
        nombre: 'Control PS5',
        descripcion: 'Control inalambrico para tu Ps5',
        precio: 12000,
        precioDescuento: 6000,
        imagen: 'imagenes/control-ps5.jpg',
        categoria: 'Accesorios',
    },
    {
        id: 6,
        nombre: 'Consola PS4',
        descripcion: 'Consola PS4 negra de 1TB de memoria externa y 8GB de ram con un control',
        precio: 35000,
        precioDescuento: 17500,
        imagen: 'imagenes/ps4.jpg',
        categoria: 'Consolas',
    },
    {
        id: 7,
        nombre: 'Consola PS5',
        descripcion: 'Consola PS5 blanca de 2TB de memoria externa y 16GB de ram con un control',
        precio: 88000,
        precioDescuento: 44000,
        imagen: 'imagenes/Ps5.jpg',
        categoria: 'Consolas',
    },
    {
        id: 8,
        nombre: 'Guardianes de la Galaxia',
        descripcion: 'Video-juego exclusivo para PS5',
        precio: 8500,
        precioDescuento: 4700,
        imagen: 'imagenes/ps5-guardianes.jpg',
        categoria: 'Video-juegos',
    },
    {
        id: 9,
        nombre: 'Spiderman Ps5',
        descripcion: 'Video-juego exclusivo para PS5',
        precio: 8000,
        precioDescuento: 4000,
        imagen: 'imagenes/spiderman-ps5.jpg',
        categoria: 'Video-juegos',
    },
    {
        id: 10,
        nombre: 'Spiderman Miles Morales Morales  Ps5',
        descripcion: 'Video-juego exclusivo para PS5',
        precio: 9000,
        precioDescuento: 4500,
        imagen: 'imagenes/ps5-Spiderman.jpg',
        categoria: 'Video-juegos',
    },
    {
        id: 11,
        nombre: 'Assasin Creed Valhalla Ps5',
        descripcion: 'Video-juego exclusivo para PS5',
        precio: 10000,
        precioDescuento: 5000,
        imagen: 'imagenes/assasinss-creed-valhalla-ps5.jpg',
        categoria: 'Video-juegos',
    },
    {
        id: 12,
        nombre: 'Resident Evil Village',
        descripcion: 'Video-juego exclusivo para PS5',
        precio: 7600,
        precioDescuento: 3800,
        imagen: 'imagenes/resident-evil8.jpg',
        categoria: 'Video-juegos',
    }
];

/**
 * Creacion de filtro de Categorias
 */

function filtrarCategoria(){
    agregarProductos(productos);
    let btnConsolas = document.createElement('button');
    btnConsolas.innerHTML = 'Consolas';
    let btnAccesorios = document.createElement('button');
    btnAccesorios.innerHTML = 'Accesorios';
    let btnVideoJuegos = document.createElement('button');
    btnVideoJuegos.innerHTML = 'Video-juegos';
    let btnTodos = document.createElement('button');
    btnTodos.innerHTML = 'btnTodos';
    let contentBtn = document.querySelector('#contenedor-btn')
    contentBtn.prepend(btnConsolas, btnAccesorios, btnVideoJuegos, btnTodos);
    
    btnConsolas.addEventListener('click', e =>{
        // pasar a una funcion para poder simplificar el codigo
        let filtroConsolas = productos.filter(productos => productos.categoria == 'Consolas');
        let bannerConsolas = document.createElement('img');
        bannerConsolas.alt = 'banner1';
        bannerConsolas.src = 'imagenes/oferta-consolas.jpg';
        bannerConsolas.className = 'animacion2';

        document.querySelector('#productos').innerHTML = ' ';
        document.querySelector('#bannerSeccion').innerHTML = '';
        bannerSeccion.prepend(bannerConsolas);
        contentBtn.prepend(btnConsolas, btnAccesorios, btnVideoJuegos, btnTodos);
        let contador = 0;
        let temporizador = () => {
            contador++;
            if(contador == 10){
                bannerConsolas.style.display = 'none';
                clearInterval(contando);
            }
        }
        let contando = setInterval (temporizador, 1000);
        agregarProductos(filtroConsolas);
    });

    btnAccesorios.addEventListener('click', e =>{
        let filtroConsolas = productos.filter(productos => productos.categoria == 'Accesorios');
        let bannerConsolas = document.createElement('img');
        bannerConsolas.alt = 'banner2';
        bannerConsolas.src = 'imagenes/oferta-accesorio.jpg';
        bannerConsolas.className = 'animacion2';

        document.querySelector('#productos').innerHTML = ' ';
        document.querySelector('#bannerSeccion').innerHTML = '';
        bannerSeccion.prepend(bannerConsolas);
        contentBtn.prepend(btnConsolas, btnAccesorios, btnVideoJuegos, btnTodos);
        let contador = 0;
        let temporizador = () => {
            contador++;
            if(contador == 10){
                bannerConsolas.style.display = 'none';
                clearInterval(contando);
            }
        }
        let contando = setInterval (temporizador, 1000);
        agregarProductos(filtroConsolas);
    });

    btnVideoJuegos.addEventListener('click', e =>{
        let filtroConsolas = productos.filter(productos => productos.categoria == 'Video-juegos');
        let bannerConsolas = document.createElement('img');
        bannerConsolas.alt = 'banner3';
        bannerConsolas.src = 'imagenes/oferta-video-juego.jpg';
        bannerConsolas.className = 'animacion2';

        document.querySelector('#productos').innerHTML = ' ';
        document.querySelector('#bannerSeccion').innerHTML = '';
        bannerSeccion.prepend(bannerConsolas);
        contentBtn.prepend(btnConsolas, btnAccesorios, btnVideoJuegos, btnTodos);
        let contador = 0;
        let temporizador = () => {
                contador++;

                if(contador == 10){
                    bannerConsolas.style.display = 'none';
                    clearInterval(contando);
                }
        }
        let contando = setInterval (temporizador, 1000);
        agregarProductos(filtroConsolas);
    });

    btnTodos.addEventListener('click', e =>{
        document.querySelector('#productos').innerHTML = ' ';
        document.querySelector('#bannerSeccion').innerHTML = '';
        contentBtn.prepend(btnConsolas, btnAccesorios, btnVideoJuegos, btnTodos);
        agregarProductos(productos);
    });
}
filtrarCategoria();

function agregarProductos (listaProds) { 

    for (const producto of listaProds) {
        //recorrida de elementos
        let item = document.createElement('article');
        let id = producto.id;
        let nombre = producto.nombre;
        let descripcion = producto.descripcion;
        let precio = producto.precio;
        let precioDescuento = producto.precioDescuento;
        let categoria = producto.categoria;
        let imagen = producto.imagen;
        //creacion de etiquetas
        let figure1 = document.createElement('figure');
        let tagNombre = document.createElement('h2');
        let tagDescripcion = document.createElement('p');
        let tagPrecio = document.createElement('span');
        let tagPrecioDescuento = document.createElement('span')
        let tagCategoria = document.createElement('h3');

        let span1 = document.createElement('span');
        span1.className = 'descuento';
        span1.innerHTML = '50% de descuento';

        let boton = document.createElement('button');
        boton.className = 'card-btn';
        boton.innerHTML = 'Añadir al carrito';
        boton.dataset.id = id;
        boton.dataset.nombre = nombre;
        boton.dataset.descripcion = descripcion;
        boton.dataset.categoria = categoria;
        boton.dataset.precio = precio;
        boton.dataset.valor = precioDescuento;
        boton.dataset.imagen = imagen;

        let tagImagen = document.createElement('img');
        tagImagen.alt = descripcion;
        tagImagen.src = imagen;
        tagImagen.dataset.categoria = categoria;
        tagImagen.dataset.valor = precioDescuento;
        tagImagen.dataset.descripcion = descripcion;
        tagImagen.dataset.id = id;
        tagImagen.dataset.imagen = imagen;
        tagImagen.dataset.nombre = nombre;

        //agregando elementos a la etiqueta figure
        figure1.append(span1,tagImagen);
        
        //asignando valor a las etiquetas
        tagNombre.innerHTML = nombre;
        tagDescripcion.innerHTML = descripcion;
        tagPrecio.innerHTML = precio;
        tagPrecioDescuento.innerHTML = precioDescuento;
        tagCategoria.innerHTML = categoria;

        //agregando elementos a la etiqueta Article
        item.append(figure1, tagNombre, tagDescripcion, tagPrecio, tagPrecioDescuento, tagCategoria, boton);
        
        //agregando el articulo a la seccion
        seccion1.append(item);

    }
    agregarAlCarrito();
}

function agregarAlCarrito(){
    let botones = document.querySelectorAll('.card-btn');
    for (const btn of botones) {
        btn.addEventListener('click', e =>{
            
            let id = e.target.dataset.id;
            let img = e.target.dataset.imagen;
            let nom = e.target.dataset.nombre;
            let val = e.target.dataset.valor;
            
            if (carrito.length === 0) {// es para evaluar si el carrito esta vacio

                carrito.push({id,img,nom,val,can});
                agregarProductoCarrito(carrito);
            
            }else{// Si existe algun elemento en el carrito 
                
                let resul = buscarEnCarrito(id);// buscamos en el carrito y le pasamos el parametro del producto que estamos buscando 
                
                if (resul >= 1) {// evaluamos si la funcion busqueda carrito con el ID del articulo que hicimos click reorna el valor 1
                    console.log(`Se ha actualizado el valor de cantidad en el carrito`);
                } else {// en caso que el resultado de la busqueda sea distinto a 1
                    carrito.push({id,img,nom,val,can});
                    agregarProductoCarrito(carrito);
                }
            }

        });
    }

}
agregarAlCarrito();

function buscarEnCarrito (id) {
    var cantidad = 0;
    var i = 0;
    var nuevacantidad = document.querySelectorAll(`.cantProds`);
    carrito.forEach(element => {//recorremos el array del carrito para conseguir la coincidencia
        if (element.id == id) {
            result = 'existe';
            cantidad = element.can+=1;
            nuevacantidad[i].innerHTML = `Cantidad ${cantidad}`;;
        }
        i+=1;
    });
    return cantidad;
}
var listArticulos = document.querySelector('.artCarrito');

function agregarProductoCarrito(obj){
    console.clear();
    console.log(obj);
    let tagart = document.createElement('article');
    let tagFig = document.createElement('figure')
    let tagimg = document.createElement('img');
    let tagNom = document.createElement('h2');
    let tagCan = document.createElement('p');
    let tagPre = document.createElement('h3');
    let btnEli = document.createElement('button');
    let contDes = document.createElement('div');
    let contVal = document.createElement('div');


    contDes.className = 'descrip';
    contVal.className = 'valor';
    tagCan.className = 'cantProds';
    btnEli.innerHTML = 'eliminar';

    for (const i of obj) {
        //console.log(`se ha añadido al carrito el elemento -> ${i.nom}`);
        tagNom.innerHTML = i.nom;
        tagimg.src = i.img;
        tagimg.height = 150;
        tagPre.innerHTML = `Precio ${i.val}`;
        tagCan.innerHTML = `Cantidad ${i.can}`;
        btnEli.id = i.id;
    }
    
    tagFig.append(tagimg);
    contDes.append(tagNom, btnEli);
    contVal.append(tagCan, tagPre)
    tagart.append(tagFig, contDes, contVal);
    listArticulos.append(tagart);
    
    btnEli.addEventListener('click', e =>{
        let id = e.target.id;
        document.getElementById(id).parentNode.parentNode.remove();

        carrito.forEach(element => {//recorremos el array del carrito para conseguir la coincidencia
            if (element.id == id) {
                //console.table(element);
                eliminaDelCarrito(carrito, element);
                //console.log(carrito);
            }
        });

    });



}

function eliminaDelCarrito( arr, item ){
    let i = arr.indexOf( item );
 
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
}

function comprar(){
    let compra = document.querySelector('.btn-compra');
    let btnCompra = document.createElement('button');
    btnCompra.id = 'btnComprar';
    btnCompra.innerHTML = 'Comprar'
    compra.append(btnCompra);
    // let btnComprar = document.querySelector('#btnComprar');
    btnCompra.addEventListener('click', e=>{
        let contentPago = document.querySelector('.datosPago');
        contentPago.style.display = "block";
        let contentCompra = document.querySelector('.artCarrito');
        contentCompra.style.display = "none"
        let total = calcTotal();
        let contentTotal = document.querySelector('#total');
        contentTotal.innerHTML = `El total es ${total}`;
        console.clear();
        console.log(carrito);
    });
}

function calcTotal (){
    let subtotal = 0;
    let total = 0;
    carrito.forEach(element =>{
        let valor = element.val;
        let cant = element.can;
        subtotal = valor*cant;
        total += subtotal;
    });
    return total;
}

// FUNCIONES DE LA VENTANA MODAL
let car = document.querySelector('#carrito');
let botonCerrar = document.querySelector('.cerrar > a');
let vaciarCarrito = document.querySelector('#btnVaciar');
let btnComprar = document.querySelector('#btnComprar');
let cancelar = document.querySelector('#btn-cancelar');
let pagar = document.querySelector('#btn-pagar')

botonCerrar.addEventListener('click', e =>{
    let ventana = document.querySelector('#modalCarrito');
    ventana.style.display = 'none';
    let aviso = document.querySelector('#aviso');
    aviso.style.display = 'none';
});
window.addEventListener('keydown', e =>{
    let ventana = document.querySelector('#modalCarrito');
    if(e.key == 'Escape' && document.querySelector('#modalCarrito')){
        ventana.style.display = 'none';
        let aviso = document.querySelector('#aviso');
        aviso.style.display = 'none';
    }
});
car.addEventListener('click', e => {
    let ventana = document.querySelector('#modalCarrito');
    ventana.style.display = 'flex';
});
vaciarCarrito.addEventListener('click', e=>{
    let listaCarrito = document.querySelector('.artCarrito');
    listaCarrito.innerHTML = '';
    carrito = [];
    console.clear();
});

btnComprar.addEventListener('click', e=>{
    if (typeof(Storage) !== 'undefined') {
        console.log('LocalStorage Disponible');
    } else {
        console.log('Incompatible con el LocalStorage');
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    if(carrito.length === 0) {
        let aviso = document.querySelector('#aviso');
        aviso.style.display = 'block';
        
    }else{
        recuperaCarrito();
    }
    let listaCarrito = document.querySelector('.artCarrito');
    listaCarrito.innerHTML = '';
});

function recuperaCarrito(){
    document.querySelector('#particles-js').style.display = 'none';
    document.querySelector('#contenedor-btn').style.display = 'none';
    document.querySelector('#bannerSeccion').style.display = 'none';
    document.querySelector('#productos').style.display = 'none';
    document.querySelector('#modalCarrito').style.display = 'none';
    document.querySelector('#formulario').style.display = 'none';
    document.querySelector('#contenedor').style.display = 'grid';
    let datosFact = document.querySelector('#factura');
    let recuperar = JSON.parse(localStorage.getItem('carrito'));
    let totalDiv = document.querySelector('#total');
    let listas = document.createElement('div');
    let totalPago = 0;
    for (const art of recuperar) {
        let listadoArt = document.createElement('ul');

        let nomArt = art.nom;
        let canArt = art.can;
        let valArt = art.val;
        let artItem = document.createElement('li');
        let artItem2 = document.createElement('li');
        let artItem3 = document.createElement('li');

        artItem.innerHTML = nomArt;
        artItem2.innerHTML = canArt;
        artItem3.innerHTML = valArt;

        let subtotal = canArt*valArt;

        totalPago+=subtotal;

        listadoArt.append(artItem,artItem2,artItem3);
        listas.append(listadoArt);
    }

    totalDiv.innerHTML = `El total es $${totalPago}`;

    datosFact.prepend(listas);
}
cancelar.addEventListener('click', e =>{
    document.querySelector('#particles-js').style.display = 'flex';
    document.querySelector('#contenedor-btn').style.display = 'grid';
    document.querySelector('#productos').style.display = 'grid';
    document.querySelector('#formulario').style.display = 'flex';
    document.querySelector('#contenedor').style.display = 'none';
    localStorage.clear();
    let facturachild = document.querySelector('#factura').firstChild;
    facturachild.remove(); 
    let listaCarrito = document.querySelector('.artCarrito');
    listaCarrito.innerHTML = '';
    carrito = [];
    document.querySelector('#spanNombre').style.display = 'none';
    document.querySelector('#spanApellido').style.display = 'none';
    document.querySelector('#spanDireccion').style.display = 'none';
    document.querySelector('#spanEmail').style.display = 'none';
});

// validacion de formularios

function quitarDom(){
    document.querySelector('header').style.display = 'none'
    document.querySelector('#particles-js').style.display = 'none';
    document.querySelector('#contenedor-btn').style.display = 'none';
    document.querySelector('#bannerSeccion').style.display = 'none';
    document.querySelector('#productos').style.display = 'none';
    document.querySelector('#modalCarrito').style.display = 'none';
    document.querySelector('#formulario').style.display = 'none';
    document.querySelector('#contenedor').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    let h2 = document.createElement('h2');
    h2.className = 'finalizar';
    h2.innerHTML = 'Gracias por su compra';
    let body = document.querySelector('body').append(h2);
    carrito = [];
    let listaCarrito = document.querySelector('.artCarrito');
    listaCarrito.innerHTML = '';
}
pagar.addEventListener('click', e =>{
    let inputNombre = document.querySelector('#nombre').value.trim();
    let inputApellido = document.querySelector('#apellido').value.trim();
    let inputDireccion = document.querySelector('#direccion').value.trim();
    let inputEmail = document.querySelector('#email').value.trim();

    let bandera = false;
    let contador = 0;
        do {

         do {
                if(inputNombre == '' && bandera == false) {
                    contador--;
                    console.log(contador)
                    let spanNombre = document.querySelector('#spanNombre');
                    spanNombre.style.cssText = 'display:block; background-color:rgba(5, 34, 78, 0.938); color:white';
                    bandera = true;
                }else{
                    bandera = false;
                    spanNombre.style.display = 'none';
                    contador++
                    console.log(contador)
                }
                bandera = false;
            } while (bandera == true);

            do {
                if(inputApellido == '' && bandera == false) {
                 contador--;
                 console.log(contador)
                let spanApellido = document.querySelector('#spanApellido');
                spanApellido.style.cssText = 'display:block; background-color:rgba(5, 34, 78, 0.938); color:white';
                bandera = true;
            }else{
                bandera = false;
                spanApellido.style.display = 'none';
                contador++;
                console.log(contador)
            }
                bandera = false;
            } while (bandera == true);

            do {
                if(inputDireccion == '' && bandera == false) {
                    contador--;
                    console.log(contador)
                    let spanDireccion = document.querySelector('#spanDireccion');
                    spanDireccion.style.cssText = 'display:block; background-color:rgba(5, 34, 78, 0.938); color:white';
                    bandera = true;
                }else{
                    bandera = false;
                    spanDireccion.style.display = 'none';
                    contador++;
                    console.log(contador)
                }
                bandera = false;
            } while (bandera == true);

            do {
                if(inputEmail == '' && bandera == false) {
                    contador--;
                    console.log(contador)
                    let spanEmail = document.querySelector('#spanEmail');
                    spanEmail.style.cssText = 'display:block; background-color:rgba(5, 34, 78, 0.938); color:white';
                    bandera = true;
                }else{
                    bandera = false;
                    spanEmail.style.display = 'none';
                    contador++;
                    console.log(contador)
                }
                 bandera = false;
            } while (bandera == true); 

            if(contador == 4){
                quitarDom();
            }

        } while (bandera == true);
    
});
// galeria de imagenes

function imagenesModal(){
    let productos = document.querySelectorAll('#productos article figure img');
    for(let producto of productos){
        producto.addEventListener('click', e =>{
            let seccionGaleria = document.querySelector('.galeriaModal');

            let divGaleria = document.createElement('div');
            divGaleria.className = 'divGaleria';
            let imagen = e.target.src;
            let descripcion = e.target.dataset.descripcion;
            let precio = e.target.dataset.valor;
            let nombre = e.target.dataset.nombre;

            let tagImagen = document.createElement('img');
            let tagDescripcion = document.createElement('h2');
            let tagPrecio = document.createElement('p');
            let tagNombre = document.createElement('p');

            tagImagen.src = imagen;
            tagDescripcion.innerHTML = descripcion;
            tagPrecio.innerHTML = `El precio es de ${precio} pesos`;
            tagNombre.innerHTML = nombre;
            seccionGaleria.style.display = 'flex';

            divGaleria.append(tagImagen,tagNombre,tagDescripcion,tagPrecio);
            seccionGaleria.prepend(divGaleria);
        });
    }
}
imagenesModal();

window.addEventListener('keydown', e =>{
    let ventana = document.querySelector('.galeriaModal');
    let divVentana = document.querySelector('.divGaleria');
    if(e.key == 'Escape' && document.querySelector('.galeriaModal')){
        ventana.style.display = 'none';
        divVentana.remove();
    }
});


let closeModal = document.querySelector('#cerrarGaleria');

closeModal.addEventListener('click', e =>{
    let galeria = document.querySelector('.galeriaModal');
    let divVentana = document.querySelector('.divGaleria');
    galeria.style.display = 'none';
    divVentana.remove();
});