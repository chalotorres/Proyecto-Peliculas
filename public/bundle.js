'use strict';

const cargarTitulos = (resultados) => {
    const contenedor = document.querySelector('#populares .main__grid');
    
    resultados.forEach((resultado) => {
        const plantilla = `
            <div class="main__media">
                <a href="#" class="main__media-thumb">
                <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
                </a>
                <p class="main__media-titulo">${resultado.title}</p>
                <p class="main__media-fecha">2021</p>
            </div>`;

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

const cargar = async () => {
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
};
cargar();
//# sourceMappingURL=bundle.js.map
