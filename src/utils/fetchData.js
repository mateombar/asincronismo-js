let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// Traer la info de la data la cual se le pasa un callback
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        // Hacer un llamado a una url abriendo una coleccion
        // Verbo HTTP, url api, async
        xhttp.open('GET', url_api, true);
        // Escuchar lo que va a hacer esa reaccion
        xhttp.onreadystatechange = () => {
            // Si el estado es satisfactorio
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ' + url_api))
            }
        }
        // Enviar solicitud
        xhttp.send();

    });
}

module.exports = fetchData;