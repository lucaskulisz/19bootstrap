// Arreglo de objetos que representan los elementos de la galería
const galeria = [
  {
    titulo: 'Imagen 1',
    descripcion: 'Descripción de la imagen 1',
    imagen: 'imagenes/paisaje1.jpg',
    categoria: 'categoria1',
  },
  {
    titulo: 'Imagen 2',
    descripcion: 'Descripción de la imagen 2',
    imagen: 'imagenes/paisaje2.jpg',
    categoria: 'categoria2',
  },
  // Agrega más objetos según los elementos de tu galería
];

// Función para generar el contenido dinámico de la galería
function crearGaleria() {
  const galeriaContainer = document.getElementById('galeriaContainer');
  galeriaContainer.innerHTML = '';

  galeria.forEach((elemento) => {
    const card = document.createElement('div');
    card.classList.add('card', 'col-md-4', 'mb-4');
    card.setAttribute('data-titulo', elemento.titulo);

    const imagen = document.createElement('img');
    imagen.classList.add('card-img-top');
    imagen.src = elemento.imagen;
    imagen.alt = elemento.titulo;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = elemento.titulo;

    const descripcion = document.createElement('p');
    descripcion.classList.add('card-text');
    descripcion.textContent = elemento.descripcion;

    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);

    card.appendChild(imagen);
    card.appendChild(cardBody);

    galeriaContainer.appendChild(card);
  });
}

// Llama a la función para crear la galería cuando la página se cargue
document.addEventListener('DOMContentLoaded', crearGaleria);
// Función para filtrar la galería por categoría
function filtrarGaleria(categoria) {
  const galeriaContainer = document.getElementById('galeriaContainer');

  galeria.forEach((elemento) => {
    const tarjeta = galeriaContainer.querySelector(`[data-titulo="${elemento.titulo}"]`);
    if (categoria === 'todos' || elemento.categoria === categoria) {
      tarjeta.style.display = 'block';
    } else {
      tarjeta.style.display = 'none';
    }
  });
}

// Asigna el evento click a los botones de filtro
const botonesFiltro = document.querySelectorAll('.filtro');
botonesFiltro.forEach((boton) => {
  boton.addEventListener('click', () => {
    const categoria = boton.getAttribute('data-categoria');
    filtrarGaleria(categoria);
  });
});
// Función para ordenar la galería por título
function ordenarGaleria() {
  galeria.sort((a, b) => a.titulo.localeCompare(b.titulo));
  crearGaleria();
}

// Asigna el evento click al botón de ordenamiento
const botonOrdenar = document.getElementById('botonOrdenar');
botonOrdenar.addEventListener('click', ordenarGaleria);
