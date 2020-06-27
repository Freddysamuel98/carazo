import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/LaPaz'

const LaPaz = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
      <Carousel data={dummyData} />
      <Text style={styles.history}>
        Este municipio es uno de los más pequeños del departamento de Carazo,
        esta a 8 Km. de la Cabecera Departamental, Jinopete.Hace 104 años, era
        un caserío, sus primeros habitantes fueron de Niquinohomo, el Diriá y
        San Juan de Oriente.Las primeras familias eran López, Potosme, Nicoya y
        Salazar. El primer Alcalde de esta Ciudad fue don Néstor Alemán,
        procedente del Diriá, después se fueron casando con personas de otros
        lugares, como Santa Teresa y así trajeron los apellidos como Rodríguez,
        Vado Ramírez y Jiménez.
      </Text>
      <Text style={styles.title}>
      ¿Cómo llegar?
      </Text>
      
      <Text style={styles.history}>
      Para llegar a La Paz de Carazo podés abordar un microbús con destino a Jinotepe en la terminal frente a la Universidad Centroamericana (UCA), una vez en Jinotepe agarra un taxi o una caponera que te llevará hasta La Paz de Carazo.
También podés ir en vehículo privado tomando la carretera a Masaya, luego pasará por Ticuantepe, La Concepción hasta llegar a Jinotepe desde donde debés seguir ocho kilómetros hacia la izquierda.

      </Text>
      <Text style={styles.title}>
   Cultura
      </Text>
      <Text style={styles.history}>
      En la época prehispánica este municipio era parte del territorio dominado de los chorotegas de lengua mangue. Las primeras familias del poblado actual eran originarias de Niquinohomo, Diriá y San Juan de Oriente.
Las primeras familias eran López, Potosme, Nicoya y Salazar, se asentaron sobre las tierras de Rafaela Herrera, en lo que se conocía como comarca La Chompipa, porque estaba compuesto por familias que se dedicaban a la crianza de chompipes. 
El nombre de La Paz se debe a que un campesino arando la tierra se encontró con una imagen de la Virgen que al preguntarle al sacerdote dice que era nuestra Señora Reina de La Paz y por eso los habitantes decidieron ponerle ese nombre al municipio en 1896.
La localidad en 1858 movilizó familias de las fincas vecinas para completar la población urbana. En 1863 se adquiere la condición de municipio y se obtiene la venia de las autoridades para denominarse con su nombre actual: La Paz de Oriente.
Sus pobladores actuales son personas unidas, amables y serviciales.
      </Text>
      <Text style={styles.title}>
      Atractivos Turísticos
      </Text>
      <Text style={styles.turismo}>
      *Museo Comunitario La “Chompipa
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Historico Cultural
•	Servicios: Recorridos guiados, exposiciones de piezas antiguas, historia del municipio.
•	Experiencia Turística: CULTURA
•	Contacto: Casco urbano, costado norte de la casa materna.

      </Text>  
      <Text style={styles.turismo}>
      *Bar
DON PEDRO

      </Text>
      <Text style={styles.sitios}>
      •	Teléfono: 25327004
•	Dirección: ALCALDIA MUNICIPAL 1 1/2C. AL ESTE.
</Text> 
     
    </View>
    </ScrollView>  
  )
};
const styles = StyleSheet.create({


    btnsanmarcos: {
        width: -55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#2b6ebb',
        justifyContent: 'center',
        marginTop: 15,
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

export default LaPaz
