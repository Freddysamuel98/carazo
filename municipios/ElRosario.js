import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Carousel from '../components/Carousel';
import { dummyData } from '../data/ElRosario';

const ElRosario = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
      <Carousel data={dummyData} />
      <Text style={styles.history}>
      El Rosario es un pueblo históricamente dedicado al cultivo de la caña de azúcar seguidamente de la introducción de la producción del café, prácticas trasmitidas de generación en generación, así como sus tradiciones y fervor religioso hacia la Virgen del Rosario, visitá este pedacito de Nicaragua, sin duda una experiencia que te encantará.
El municipio se encuentra a 51 kilómetros de la ciudad de Managua. Limita al norte con Masatepe, al sur con Santa Teresa, al este con La Paz y al oeste con Jinotepe.
La principal actividad económica del municipio es el cultivo del café, granos básicos y caña de azúcar.

      </Text>
      <Text style={styles.title}>
      ¿Cómo llegar?
      </Text>
      
      <Text style={styles.history}>
      Para llegar a este municipio debés abordar una unidad de transporte con rumbo a Jinotepe, en la terminal de buses ubicada frente a la Universidad Centroamericana (UCA), o en la terminal del Mercado Israel Lewites; posteriormente en Jinotepe tomar otro bus con dirección al municipio El Rosario, o bien tomás un taxi o caponera que te traslade.
Podés llegar en vehículo privado, tomando la Carretera Panamericana Sur, te desvías en el cruce de Nejapa hacia la izquierda, siguiendo la carretera con rumbo a Jinotepe hasta ver en la entrada del municipio un rótulo que da la bienvenida a los visitantes.


      </Text>
      <Text style={styles.title}>
   Cultura
      </Text>
      <Text style={styles.history}>
      La población actual es consecuencia de un asentamiento formado por desplazados del municipio de Masaya a inicios del siglo XX, cuyas primeras familias eran de apellido Ruiz y Nicaragua. El nombre del caserío inicial era El Chompipe.
El 09 de marzo de 1848, por decreto legislativo, se fijaron los límites del municipio, dicha ley otorgó el nombre del nuevo pueblo: El Rosario.

      </Text>
      
      <Text style={styles.title}>
      Atractivos Turísticos
      </Text>
      <Text style={styles.turismo}>
      *Parque Natural El Rosario
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Contacto con la naturaleza
•	Experiencia Turística: NATURALEZA
•	Contacto: Blanca Jimenez. Cel. 89487877

      </Text>  
      <Text style={styles.turismo}>
      *Vivero Municipal
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Contacto con la naturaleza
•	Experiencia Turística: NATURALEZA
•	Contacto: Blanca Jiménez. cel. 89487877

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

export default ElRosario;
