  $.getJSON("ValleAncho.json", function (json) {
                // console.log(json)
            var labels = json.features.map(function(item) {  //features es un arreglo con []
                //console.log(item)
                //console.log(item.properties)
            return item.properties;
    });
    //console.log(labels)
    

    var ID = 704;
    datos = labels.filter(function(dato){
        if(dato.Id == ID){
            return dato
        }
    })
    //console.log(datos)

    var datos2 = datos[0]
    document.getElementById("texto").innerHTML= "Feature: " + ID
    console.log(datos2)

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
  });



// Fuente EJEMPLO:
// https://stackoverflow.com/questions/32977262/loading-an-external-json-into-chartjs