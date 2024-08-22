// Función que obtiene la lista de géneros de películas
const fetchGeneros = async () => {
    // url de la api de peliculas
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=4fce76bfa6d7adf0eda443642930c318&language=es-MX';
    try{
        // Se obtiene el json desde la url
        const respuesta = await fetch(url);
        // se obtiene los datos desde el json
        const datos = await respuesta.json();
        // se retornan los resultados
        return datos.genres;
    } catch (e) {
        console.log(e);
    }
}

export default fetchGeneros;