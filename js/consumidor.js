//pasos para configurar el consumidor API
//1. COnocer la url endpoint

let urlGET ="https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm/top-tracks?market=US";

//definir variables auxiliares

//1.1.1 identificar o referenciar la url del servicio que nos entregará el token
let urlPOST="https://accounts.spotify.com/api/token";


//i.1.2 Definición de Parámetros
let llave1="grant_type=client_credentials";
let llave2="client_id=c5d6dd91901146d69cb08249eaebe487";
let llave3="client_secret=e97d2ceff49c4902bcf87743cafe37f6";

let parametrosPOST={
    method:"POST",
    headers:{ "Content-Type":'application/x-www-form-urlencoded'},
    body:`${llave1}&${llave2}&${llave3}`

}

//1.1.3 usar fetch para comunicarnos con API
fetch(urlPOST, parametrosPOST)
    .then(respuesta=>respuesta.json())
    .then(datos=>obtenerToken(datos));

function obtenerToken(datos){
    let token = datos.token_type+" "+datos.access_token;
    let parametrosGET = {
        method: "GET",
        headers:{Authorization: token} 
    
    }
    fetch(urlGET, parametrosGET) 
    .then(respuesta=>respuesta.json()) 
    .then(datos=>pintarInformacion(datos));
}

function pintarInformacion(datos){
    let titulo1 = document.getElementById("titulo1");
    let imagen1 = document.getElementById("imagen1");
    let audio1 = document.getElementById("audio1");

    let titulo2 = document.getElementById("titulo2");
    let imagen2 = document.getElementById("imagen2");
    let audio2 = document.getElementById("audio2");

    let titulo3 = document.getElementById("titulo3");
    let imagen3 = document.getElementById("imagen3");
    let audio3 = document.getElementById("audio3");

    titulo1.textContent=datos.tracks[0].name;
    imagen1.src = datos.tracks[0].album.images[0].url;
    audio1.src = datos.tracks[0].preview_url;

    titulo2.textContent=datos.tracks[3].name;
    imagen2.src = datos.tracks[3].album.images[0].url;
    audio2.src = datos.tracks[3].preview_url;

    titulo3.textContent=datos.tracks[2].name;
    imagen3.src = datos.tracks[2].album.images[0].url;
    audio3.src = datos.tracks[2].preview_url;

}


