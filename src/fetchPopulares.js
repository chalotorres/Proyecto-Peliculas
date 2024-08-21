const fetchPopulares = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4fce76bfa6d7adf0eda443642930c318&language=es-MX&page=1';
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.results;
    } catch (e) {
        console.log(e);
    }
}

export default fetchPopulares;