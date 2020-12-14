let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';
// Traer la info de la data la cual se le pasa un callback
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    // Hacer un llamado a una url abriendo una coleccion
    // Verbo HTTP, url api, async
    xhttp.open('GET', url_api, true);
    // Escuchar lo que va a hacer esa reaccion
    xhttp.onreadystatechange = (e) => {
        // Si el estado es satisfactorio
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                // error, response
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                // error, response
                return callback(error, null);
            }
        }
    }
    // Enviar solicitud
    xhttp.send();
}

fetchData(API, (error1, data1) => {
    if (error1) return console.error(error1);
    // Volver a hacer la peticion pero en este caso con el id del primer personaje
    // data1.results[0].id = 1
    fetchData(API + data1.results[0].id, (error2, data2) => {
        if (error2) return console.error(error2);
        // data2.origin.url = "https://rickandmortyapi.com/api/location/1"
        fetchData(data2.origin.url, (error3, data3) =>{
            if (error3) return console.error(error3);
            // https://rickandmortyapi.com/api/character
            console.log(data1.info.count);
            // https://rickandmortyapi.com/api/character/1
            console.log(data2.name);
            // https://rickandmortyapi.com/api/location/1
            console.log(data3.dimension);
        });
    });
});