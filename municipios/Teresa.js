import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Teresa'


const Teresa = ({navigation}) =>{
    return (
      <ScrollView>
        <View>
            <Carousel data = {dummyData}/>
           
            <Text style={styles.history}>
            Santa Teresa es un municipio caracterizado por sus prácticas agrícolas y es reconocida por sus deliciosas rosquillas. 
Es un lugar tranquilo rodeado de naturaleza, en su interior resguarda uno de los sitios más importantes del país por su riqueza biológica, el Refugio de Vida Silvestre Río Escalantte - Chacocente, una de las pocas playas donde se aprecian las arribadas de tortugas paslamas.
El municipio de Santa Teresa se encuentra a 53 kilómetros de la ciudad de Managua. Limita al norte con La Paz y El Rosario, al sur con el Océano Pacífico, al este con Nandaime, Belén y Tola y al oeste con La Conquista y Jinotepe.
La actividad económica fundamental del municipio es la ganadería y el cultivo de maíz, frijoles, sorgo y en pequeños porcentajes hortalizas y tubérculos. Además de caña de azúcar del cual se deriva el dulce de panela conocido nacionalmente como dulce de rapadura del mismo se derivan los deliciosos alfeñiques.

      </Text>
      <Text style={styles.title}>
      ¿Cómo llegar?
      </Text>
      
      <Text style={styles.history}>
      Para ir a este municipio podés abordar un microbús en la terminal de buses frente a la Universidad Centroamericana (UCA), con destino a Jinotepe donde al llegar a la terminal tomarás un taxi o interlocal que te llevará a Santa Teresa.
Si viajás en vehículo privado tomar la Carretera Panamericana Sur pasando por El Crucero, Diriamba y Dolores hasta llegar a Jinotepe al kilómetro 51.5, tomando en cuenta la señalización seguir la carretera a la derecha.

      </Text>
      <Text style={styles.title}>
   Cultura
      </Text>
      <Text style={styles.history}>
      El nombre del municipio se atribuye a Santa Teresa, cuya imagen aparecida en la época fundacional, fue trasladada varias veces a la casa del párroco, volviendo aparecer en el predio de origen, razón por la cual se estipuló construirle su templo en ese espacio.
La situación territorial de este municipio, en la frontera entre los nahuas de Rivas y los chorotegas de la meseta del actual departamento de Carazo, se evidencia en los restos prehispánicos dejados por los pobladores autóctonos.
El territorio de Santa Teresa es uno de los primeros en ver aparecer a los conquistadores españoles, por lo que su integración a la colonia se realizó rápidamente. Los restos de poblaciones cercanas se conglomeraron para ir formando el pueblo en 1729. 
Las poblaciones autóctonas se complementaron con la llegada de inmigrantes que inicialmente se establecieron en la zona de Guitital, llamado Puertas Viejas. Estos primeros colonos se dedicaron a cultivar caña de azúcar, café y crianza de ganado vacuno.
Para 1860, figura como pueblo; En 1916, se le otorgó el título de villa y el 17 de noviembre de 1949, se otorgó el título de ciudad.
   </Text>
      
      <Text style={styles.title}>
      Atractivos Turísticos
      </Text>
      <Text style={styles.turismo}>
      *Cooperativa de Servicios múltiples Chacocente
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Socio Economico
•	Servicios: Hospedaje, guías, senderos, cabalgatas y Alimentación, venta de miel, avistamiento de tortugas marinas (paslamas)
•	Experiencia Turística: NATURALEZA
•	Contacto: Sr. Casto Vado Cel. 84811202

      </Text>  
      <Text style={styles.turismo}>
      *Museo Comunitario “El Huistitall”
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Historico Cultural
•	Servicios: Visitas guiadas, Exposiciones de vestigios históricos, historia de la ciudad de Santa Teresa
•	Experiencia Turística: CULTURA
•	Contacto: Casco urbano, de la Policía ½ cuadra al Norte.


      </Text>  
      
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  btnsanmarcos: {
    width: -55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#2b6ebb',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 17,
    textAlign: 'center',
  },
  history: {
    fontSize: 15,
    textAlign:"justify",
    padding:10,
    marginHorizontal: 10,
  
    
  },
  title:{
    fontSize: 30,
    textAlign:"justify",
    padding:10,
    marginHorizontal: 20,
    
  },
  turismo:{
    fontSize: 20,
    textAlign:"left",
    padding:10,
    marginHorizontal: 20,

  },
  sitios:{
    fontSize: 15,
    textAlign:"left",
    padding:10,
    marginHorizontal: 20,

  }
  
});

export default Teresa