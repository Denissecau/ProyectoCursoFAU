//FUNCIONES
//Creo una nueva función de estilo
function estilo(feature) {
    let col2 = (feature.properties.Area_TA<300) ? 'red' : 'green'
    return {
        fillColor: col2,
        weight: 1,
        opacity: 1,
        color: '#0033cc',
        dashArray: '1',
        fillOpacity: 0.5
    };
}

//redefinir el funcionamiento por defecto de la función style
style: 

var ext = L.geoJSON(humedales);

//var map = L.map("map").setView([-26.8638, -69.5069], 10);
var map = L.map("map").fitBounds(ext.getBounds()); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// L.geoJSON(EXT).addTo(map);
var capa = L.geoJSON(humedales, {style: estilo}).addTo(map);


capa.eachLayer(function (layer) {
    layer.bindPopup("Id: " + layer.feature.properties.Id);
});












/* PREGUNTAS:

1. ¿Cómo puedo llamar el archivo geojson o js sin tener que definirlo aca? 
Ejemplo que no me funciona: https://gist.github.com/sigdeletras/931e41a6cb34936a2079e97a3b7ccca6
Funcionó! había que agregar el script leafle-src.js ¿Cómo saber eso pa la prox?


 COMENTARIOS
Para agregar popups 
geojson.eachLayer(function (layer) {
    layer.bindPopup(layer.feature.properties.name);
});

 */