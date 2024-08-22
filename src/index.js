import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

// Función que carga desde la API la información
const cargar = async () => {
    // Se obtiene las películas populares
    const resultados = await fetchPopulares();
    // Se mandan a cargar en la página
    cargarTitulos(resultados);
}

cargar();