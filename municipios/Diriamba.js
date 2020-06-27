import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Diriamba'

const Diriamba = ({ navigation }) => {
  return (
    <ScrollView>
        <Carousel data = {dummyData}/>
      <Text style={styles.history}>
        Diriamba es un nombre que procede de la lengua Chorotega, de las voces
        Diri: que significa Cerros y Mba: que significa Grande es decir:
        "Grandes Cerros o Colinas". No existe con una fuente histórica que
        señale con precisión el lugar del asentamiento de la primitiva Diriamba,
        ya que su origen se remonta a varios siglos y se pierde en el tiempo.
        Sin embargo, algunos historiadores suponen que su asentamiento fue en el
        Valle de Apompuá; por haberse encontrado en ese lugar vestigios urbanos,
        huesos humanos, cerámicas indígenas; que se identifican con la población
        indígena de Diriamba; otros historiadores aseguran que su asiento fue en
        el lugar que actualmente ocupa la población. Tomando en cuenta estas dos
        hipótesis, se llega a la conclusión, que de alguna forma la fundación de
        la antigua ciudad se le atribuye al cacique Diriangen, descendiente de
        la tribu de los Dirianes que ocupaban las alturas de los departamentos
        de Managua, Masaya y Carazo. La Villa de Diriamba fue elevada a Ciudad,
        durante el Gobierno de José Santos Zelaya, según decreto legislativo del
        6 de octubre de 1894, el que empezó a tener vigencia a partir del 10 de
        octubre de 1894
      </Text>
      
      <Text style={styles.title}>
      ¿Cómo llegar?
      </Text>
      
      <Text style={styles.history}>
      Para llegar al municipio de Diriamba, situada a 42 kilómetros desde la capital, debés tomar un interlocal en la terminal de buses frente a la Universidad Centroamericana (UCA). Estos buses salen cada 15 minutos desde las 5:30 am hasta las 8:30 pm; también en la terminal del Mercado Israel Lewites podés tomar un bus con destino a este municipio.
Si viajás en vehículo particular desde Managua, dirigite por la Carretera Panamericana Sur, pasando por el municipio de El Crucero.

      </Text>
      <Text style={styles.title}>
   Cultura
      </Text>
      <Text style={styles.history}>
      Los antiguos pobladores del municipio de Diriamba eran del grupo chorotega; su herencia cultural sigue siendo parte de la vida cotidiana y de sus costumbres y tradiciones.
Diriamba se relaciona con el Cacique Diriangén, un gran guerrero indígena y líder de los dirianes, que dirigió la primera derrota de los conquistadores españoles en suelo nicaragüense el 17 de abril de 1523; primer encuentro bélico entre dos pueblos o dos culturas, que luego se funden para formar el pueblo Nicaragüense.
Posteriormente el territorio pasó a ser una encomienda de la ciudad de Granada que pagaba tributo a la corona con frijoles, maíz, sal, petates, cera y miel.
El municipio se integró a producción de café a partir de siglo XIX, con las concesiones del Estado, activando la economía y la industria local. La villa de Diriamba fue elevada a ciudad el 10 de octubre de 1894.
En este municipio lo tradicional y moderno se funden en el espíritu del pueblo durante sus tradicionales fiestas patronales. Por lo cual el consejo municipal lo declaró Cuna del Teatro Folclórico Nacional en enero de 2002.

      </Text>
      
      <Text style={styles.title}>
      Atractivos Turísticos
      </Text>
      <Text style={styles.turismo}>
      *Balneario Las peñitas
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Baño , Fotografías, Observación de paisajes, Recorridos por la comunidad
•	Experiencia Turística: NATURALEZA
•	Contacto: Enrique Baltodano Gonzales 88769829 Se encuentra en el Km 57 y se encontrara con señalización que le ayudaran a llegar al sitio. 

      </Text>  
      <Text style={styles.turismo}>
      *Cascada San juan de la sierra
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Baño , Fotografías , Observación de paisajes, Recorridos por la comunidad
•	Experiencia Turística: NATURALEZA
•	Contacto: comunidad San juan de la sierra 

      </Text>  
 
     
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

export default Diriamba;
