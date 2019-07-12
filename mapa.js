//FUNCIONES
//Creo una nueva función de estilo 3
function estilo(feature) {
    let col2 = (feature.properties.Area_TA < 300) ? 'red' : 'green'
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
var capa = L.geoJSON(humedales, { style: estilo }).addTo(map);

var ID;
capa.eachLayer(function (layer) {
    layer.bindPopup("Id: " + layer.feature.properties.Id);
    layer.addEventListener("click", function(event) {
        //var ID = event.target.feature.properties.Id
       
        document.getElementById("seleccion").innerHTML = "Feature: " + event.target.feature.properties.Id;
        ID = event.target.feature.properties.Id;
        console.log(ID)
        datos = labels.filter(function (dato) {
            if (dato.Id == ID) {
                return dato
            }
        })

        

        
        var datos2 = datos[0];
        graficarChart(datos2);
        document.getElementById("texto").innerHTML = "Feature: " + ID
      
        
    });

})


//CHART
$.getJSON("ValleAncho.json", function (json) {
    // console.log(json)
     labels = json.features.map(function (item) {  //features es un arreglo con []
        //console.log(item)
        //console.log(item.properties)
        return item.properties;
    });
    //console.log(labels)
}).done(function(data){

});


function graficarChart(datos2){

    var nombres = ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5', 'cat 6', 'cat 7']
var valores = [datos2.cat_1, datos2.cat_2, datos2.cat_3, datos2.cat_4, datos2.cat_5, datos2.cat_6, datos2.cat_7]
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nombres,
        datasets: [{
            label: '# de pixeles',
            data: valores,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

 //var ID = 704;

}












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