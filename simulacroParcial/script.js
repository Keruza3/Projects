const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/L-65.B518-1.webp?v=106'
  },
  {
    id: 2,
    nombre: 'Producto 2',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/L-65.B513-1.webp?v=106'
  },
  {
    id: 3,
    nombre: 'Producto 3',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/L-65.B515-1.webp?v=106'
  },
  {
    id: 4,
    nombre: 'Producto 4',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/L-67.B941.4-1.webp?v=106'
  },
  {
    id: 5,
    nombre: 'Producto 5',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/L-67.B942.4-1.webp?v=106'
  },
  {
    id: 6,
    nombre: 'Producto 6',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/523-F240-1.webp?v=106'
  },
  {
    id: 7,
    nombre: 'Producto 7',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/523-F213-1.webp?v=106'
  },
  {
    id: 8,
    nombre: 'Producto 8',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/524-R98-1.webp?v=106'
  },
  {
    id: 9,
    nombre: 'Producto 9',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/AFANTTRORKNU-1.webp?v=106'
  },
  {
    id: 10,
    nombre: 'Producto 10',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/536-5981-1.webp?v=106'
  },
  {
    id: 11,
    nombre: 'Producto 11',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/536-4934-1.webp?v=106'
  },
  {
    id: 12,
    nombre: 'Producto 12',
    precio: 0,
    img: 'https://elparaisodepaso.com.ar/imagenes/prod-webp/536-6107-1.webp?v=106'
  },
];

const contenedorProductos = document.querySelector(".container-productos");

let tarjetaProductos = ""

function mostrarproductos() {

    for(let i = 0; i < productos.length; i++){

        tarjetaProductos +=      
                    `<div class="tarjeta-productos">
                        <img src="${productos[i].img}" alt="${productos[i].nombre}" class="producto">
                        <h3>${productos[i].nombre}</h3>
                        <p>precio: ${productos[i].precio}$</p>
                        <button class="boton-carrito">Agregar a carrito</button>
                    </div>`
    }
    return tarjetaProductos;
}

let datos = mostrarproductos();

contenedorProductos.innerHTML = datos;

