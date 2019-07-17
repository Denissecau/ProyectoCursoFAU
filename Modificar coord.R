install.packages("xlsx")

library(xlsx)
library(sp)
library(rgdal)

dir<-"C:/Users/Denisse/Documents/ProyectoCursoFAU-Cambios"
file<-"C:/Users/Denisse/Documents/Derechos_Concedidos_Copiapo.xlsx"
t<-read.xlsx(file, 1, header = T)
names(t)<-c("N", "Cod_de_Expediente", 
            "Nombre_Usuario","Tipo.Derecho",
            "Naturaleza_del_Agua", "ClasificaciÃ³n.Fuente",
            "Uso_del_Agua", "Cuenca",
            "SubCuenca", "Ejer_del_Derecho",
            "Caudal_Anual_Prom", "Unidad_de_Caudal",
            "UTM_Norte", "UTM_Este", "Huso",
            "Datum", "Año") 
head(t)

coordinates(t)<-~UTM_Este+UTM_Norte
proj4string(t)<-CRS("+init=epsg:24879") #CRS ORIGINAL
latlon<-CRS("+init=epsg:4326") #WGS84
datos<-spTransform(t, latlon)

setwd(dir)
writeOGR(datos, dir, "Derechos_copiapo", driver="ESRI Shapefile")
coordinates(t)
coord<-coordinates(datos)
datos$lon<-coord[ ,1]
datos$lat<-coord[ ,2]

write.xlsx(datos, "C:/Users/Denisse/Documents/ProyectoCursoFAU-Cambios/Derechos_copiapo.xlsx")

