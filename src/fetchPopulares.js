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
}

export default fetchPopulares;