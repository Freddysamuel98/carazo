import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Jinotepe'


const Jinotepe = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
         <Carousel data = {dummyData}/>
         <Text style={styles.history}>
         Conocé este municipio donde los habitantes se caracterizan por ser personas con carácter amistoso, honradas, amantes del estudio y el trabajo, de arraigadas costumbres familiares y tradicionales. 
Con un clima privilegiado y variados recursos para disfrutar de la naturaleza como playas, ríos y cascadas para el disfrute de sus habitantes y visitantes. Jinotepe es también cuna de la primera plantación de café del país.
El municipio de Jinotepe se encuentra a 46 kilómetros de la ciudad de Managua. Limita al norte con San Marcos y Masatepe, al sur con el Océano Pacífico, al este con El Rosario, Santa Teresa y La Conquista y al oeste con Diriamba y Dolores.
La actividad económica fundamental del municipio es la agricultura de hortalizas, cítricos, granos básicos, musáceas y café.

      </Text>
      <Text style={styles.title}>
      ¿Cómo llegar?
      </Text>
      
      <Text style={styles.history}>
      A la ciudad de Jinotepe podés llegar desde Managua tomando una unidad de transporte en la terminal de buses en frente a la Universidad Centroamericana (UCA) y en el mercado Israel Lewites. Jinotepe también tiene conexión de buses que viajan hacia Rivas, Nandaime, Granada y varias ciudades del departamento de Masaya.
También podés viajar en vehículo particular tomando la Carretera Panamericana Sur pasando por El Crucero y Diriamba, hasta llegar al municipio, la carretera se encuentra en buenas condiciones.

      </Text>
      <Text style={styles.title}>
   Cultura
      </Text>
      <Text style={styles.history}>
      Sus antiguos pobladores autóctonos eran Chorotegas y su lengua el mangue, ellos nos legaron tradiciones, toponimias y objetos de la vida pretérita como cerámica policroma, arte rupestre y esculturas de piedra, el término Jinotepe procede de la lengua náhuatl, Xolotl=Chilote y tepelt=cerro, significa Cerro de los Chilotes.
Al igual que Diriamba, Jinotepe se relaciona con el cacique Diriangén, guerrero de los Dirianes, que dirigió la primera derrota de los conquistadores españoles en suelo nicaragüense, el 17 de abril de 1522. Durante la colonia, Jinotepe pertenecía al departamento de Granada, junto con Managua, Carazo y Masaya. Sus productos en esa época eran: maíz, algodón, telas, sal, pollos, cera y miel.
A finales del siglo XIX la industria azucarera y el inicio de la caficultura dieron un importante empuje a la economía del municipio. En 1882 fuera elevada a ciudad y fue el 17 abril de 1891 fue creado el departamento de Carazo. 
Expresiones y manifestaciones artísticas.

      </Text>
      
      <Text style={styles.title}>
      Atractivos Turísticos
      </Text>
      <Text style={styles.turismo}>
      *Cascada Paso Real
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Cascada donde puede darse un baño y ver los monos congos, avsitamiento de aves y disfrutar de la aventura en los senderos.
•	Experiencia Turística: NATURALEZA
•	Contacto: La entrada a esta cascada es por el municipio de Dolores del parque central (acceso en vehículo) 13 km al sur, comunidad de Pazo Real.

      </Text>  
      <Text style={styles.turismo}>
      *Puente Colgante del Panamá
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Senderos, Fotografías
•	Experiencia Turística: NATURALEZA
•	Contacto: Comunidad El Panamá de Jinotepe

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

export default Jinotepe;
