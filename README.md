# Trabajo Final de Curso

Se presenta una breve descripción del trabajo:

## Intención
Se pretende generar un mapa con información descriptiva de forma interactiva.

## Archivos:

+ **index.html**

Este archivo es donde se ejecuta la pagina web

+ **mapa.js**

En este archivo se ejecuta la lectura de geoJSON con la información espacial de poligonos de humedales (una muestra) y puntos de derechos de aprovechamiento de aguas subterráneos (una muestra). Se les da color a los poligonos segun su tamaño. Se les agrega información (popup) al hacer click sobre ellos.
Por otra parte, se agrega un gráfico interactivo que reacciona a los click sobre los polignos de humedales, mostrando la inforación para cada uno a la vez.

+ **chart_1.js**

Este era el antiguo archivo para los graficos que tuvo que ser movido ya que era necesario que interactuara con el mapa.

+ **table.js**

Archivo que genera una tabla a partir de los datos del json "Derechos_Copiapo".

+ **lib.js**

Se crea modulo para procesar un archivo .xlsx y trasnformarlo en un .geoJSON

+ **convert.js**

Ejecuta lib para transformar Derechos_copiapo.xlsx en un geoJSON.

+ **ValleAncho**

Existe tanto en .json como en .js ya que al asignarle un nombre de variable con un .js permite leerlo desde otros .js.

+ **Modificar coord**

Es un archivo .R que fue utilizado para formatear la tabla excel a utilizar.

## COMENTARIOS
+ El gráfico tiene un juego cuando uno apreta mas de un humedal, ya que cuando uno pasa el mouse por encima se modifica, pero no logro entender el la razon aun.
