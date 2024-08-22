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
}

export default cargarTitulos;