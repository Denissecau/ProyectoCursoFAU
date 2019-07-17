module.exports = { 
    // Se define un método local, para leer contenido Web
    leerExcel: function (ARCHIVO, HOJA, callback) {
      const readXlsxFile = require('read-excel-file/node')
  
      readXlsxFile(ARCHIVO, { sheet: HOJA })
      .then((data) => {
        console.log(data)
        let datos_extraidos = data.slice(1,1747).map((item)=>{
          return { 
            "type": "Feature", 
            "properties": { 
              "N": item[0],
              "Cod_exp": item[1],
              "Usuario": item[2],
              "Cauldal": item[3],
              "Año": item[4],
              "lat": item[5],
              "long": item[6],
            }, 
            "geometry": { 
              "type": "Point", 
              "coordinates": [item[6], item[5]] 
            } 
          }
        })
  
        let geojson = {
          "type": "FeatureCollection",
          "features": datos_extraidos
        }
  
        callback(null, geojson)
      })
      .catch((error) => {
        console.log("Se produjo un error al leer el archivo: " + ARCHIVO, error)
        callback(error)
      })
    },
  
    // Se define un método local, para escribir CSV
    escribirJSON: function (data){
      const fs = require('fs');
  
      fs.writeFile('Derechos_Copiapo.geojson', JSON.stringify(data), 'utf8', function(){
        console.log('Archivo json creado correctamente.')
      })
    }
  };