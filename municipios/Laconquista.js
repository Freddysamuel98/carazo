import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/LaConquista'

const LaConquista = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
      <Carousel data={dummyData} />
      <Text style={styles.history}>
      Un pueblo católico lleno de devoción, reconocido por la imagen de su Santo Patrono el Señor de Esquipulas o cristo Negro y una pequeña poza que se atribuye el mismo nombre de su santo patrono, la cual es muy visitada por feligreses en busca de milagros. Es famosa su romería del tercer viernes de Cuaresma, porque llegan promesantes de Nicaragua y de otros países del mundo a solicitar milagros o a pagar milagros recibidos, los feligreses suelen llevar agua de esta pilita donde se cree apareció la imagen del santo.
El municipio de La Conquista se encuentra a 60 kilómetros de la ciudad de Managua. Limita al norte y al oeste con Jinotepe, al sur y al este con Santa Teresa.
La actividad económica del municipio es la agricultura y la ganadería, los pobladores cultivan: maíz, fríjol criollo, trigo copete, plátanos y otros.

      </Text>
      
      <Text style={styles.title}>
      ¿Cómo llegar?
      </Text>
      
      <Text style={styles.history}>
      Para llegar al municipio de La Conquista debés tomar un microbús en la terminal de buses frente a la Universidad Centroamericana (UCA), con destino a Jinotepe, al llegar podrás tomar un bus o taxi que te traslade a La Conquista.
Si viajás en vehículo privado tomá la Carretera Panamericana Sur con dirección a El Crucero hasta llegar a Jinotepe, luego seguir la carretera hasta el kilómetro 52, girar a la derecha entrando a Santa Teresa, y seguir al sur hasta llegar a La Conquista.


      </Text>
      <Text style={styles.title}>
   Cultura
      </Text>
      <Text style={styles.history}>
      El 4 de octubre los pobladores de La Conquista celebran el aniversario de ser elevado a municipio. Se realiza presentación cultural, con juegos tradicionales como el huevo y la cuchara, el encostalado, el que se come la piña más rápido, entre otros.
Sus primeros pobladores eran chorotegas y hablaban la lengua mangue. El nombre de “La Conquista” surge en alusión al primer combate entre los pobladores autóctonos del territorio nicaragüense con los primeros españoles, al mando de Gil González. En este combate murieron muchos indígenas, pero los invasores se retiraron con solo un herido, frente a la imposibilidad de enfrentar al numeroso pueblo local.
Durante mucho tiempo el territorio era un valle del municipio de Santa Teresa, pero el 4 de octubre de 1899, fue elevado a municipio.

      </Text>
      
      <Text style={styles.title}>
      Atractivos Turísticos
      </Text>
      <Text style={styles.turismo}>
      *Balneario de Cascalojoche
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Natación
•	Experiencia Turística: NATURALEZA
•	Contacto: puente el gigante 500 metros al Sur 

      </Text>  
      <Text style={styles.turismo}>
      *Balneario El Caimito
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Baño,, senderismo, avistamiento de aves.
•	Experiencia Turística: NATURALEZA
•	Contacto: ubicado del casco urbano 8 km al Oeste.

      </Text>  
    </View>
    </ScrollView>
  );
};
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

export default LaConquista;
