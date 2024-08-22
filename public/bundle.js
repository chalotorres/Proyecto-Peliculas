'use strict';

// Función para cargar las películas
const cargarTitulos = (resultados) => {
    // Se obtiene el container de las películas
    const contenedor = document.querySelector('#populares .main__grid');
    
    // Para cada película
    resultados.forEach((resultado) => {
        // Se creará una plantilla con la info
        const plantilla = `
            <div class="main__media">
                <a href="#" class="main__media-thumb">
                <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
                </a>
                <p class="main__media-titulo">${resultado.title}</p>
                <p class="main__media-fecha">2021</p>
            </div>`;

        // Se incrusta la platilla en el código HTML
        contenedor.insertAdjacentHTML('beforeend', plantilla);
    });
};

const fetchPopulares = async () => {
    // url de la api de peliculas
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4fce76bfa6d7adf0eda443642930c318&language=es-MX&page=1';
    try{
        // Se obtiene el json desde la url
        const respuesta = await fetch(url);
        // se obtiene los datos desde el json
        const datos = await respuesta.json();
        // se retornan los resultados
        return datos.results;
    } catch (e) {
        console.log(e);
    }
};

// Función que carga desde la API la información
const cargar = async () => {
    // Se obtiene las películas populares
    const resultados = await fetchPopulares();
    // Se mandan a cargar en la página
    cargarTitulos(resultados);
};

cargar();
//# sourceMappingURL=bundle.js.map
