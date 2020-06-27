import React from 'react';
import { View, Text, StyleSheet, ScrollView, _ScrollView } from 'react-native';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Dolores'

const Dolores = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
      <Carousel data={dummyData} />
      <Text style={styles.history}>
        Existen dos teorías sobre el origen del nombre del municipio, algunos
        historiadores aseguran que entre los años 1890 a 1895 se encontró en el
        lugar la imagen de la Santísima Virgen de los Dolores y fue llevada en
        una procesión hacia la iglesia parroquial de Jinotepe lugar de su
        asiento definitivo. Otra versión sostiene que el nombre se debe a una de
        las primeras familias fundadoras del municipio, en la cual había una
        señora llamada Dolores, razón por la cual se tomó el nombre que hoy
        lleva el municipio. Dolores fue elevado a la categoría de Pueblo por
        Ley Legislativa el 14 de octubre de 1904.
      </Text>
      <Text style={styles.title}>
      ¿Cómo llegar?
      </Text>
      
      <Text style={styles.history}>
Para llegar al municipio de Dolores, debés tomar un bus interlocal en la terminal de buses frente a la Universidad Centroamericana (UCA) en Managua, con destino a Jinotepe, e indicarle al conductor o ayudante que te baje en Dolores. 
Está localizado a tan solo tres kilómetros del municipio de Diriamba. Esta ruta dura aproximadamente una hora si se viaja en bus colectivo. Los buses salen de Managua con destino a Jinotepe cada 10 minutos.
En vehículo particular la duración del recorrido es de 50 minutos aproximadamente, viajando por la Carretera Panamericana Sur, pasando por El Crucero y Diriamba debés seguir rumbo al municipio de Dolores.

      </Text>
      <Text style={styles.title}>
   Cultura
      </Text>
      <Text style={styles.history}>
      Los antiguos pobladores autóctonos de Dolores estaban íntimamente conectados con los chorotegas-dirianes, de Diriamba y Jinotepe, correspondían a la misma etnia y hablaban la lengua “mangue”. Estos indígenas se desarrollaron independientemente hasta el siglo XIV, cuando los nicaraos se asentaron en Rivas y les influyeron cultural y lingüísticamente. 
A inicios del siglo XIX, Dolores estaba formada por casitas de paja y una sola calle que llegaba hasta Jinotepe, con alumbrado de mechones de ocote y agua que se obtenía en las vertientes, entre ellos del pozo "Las Lajas".
A finales del siglo XIX este municipio era parte de la ruta del ferrocarril del Pacífico, que conectaba a Granada con Masaya, Carazo, Managua y el occidente de Nicaragua, eso ayudó a impulsar el desarrollo junto con la llegada de migrantes que iniciaron el cultivo de café.
A los vecinos de Dolores se les conoce popularmente con el mote de “pizotes” debido a que en el siglo pasado sus habitantes caminaban al atardecer, en fila india de regreso (como lo hacen los pizotes), por la única calle de acceso a su pueblo. Dolores fue elevada a la categoría de pueblo en 1904 y el 14 de octubre de ese año se inauguró la primera alcaldía.

      </Text>
      
      <Text style={styles.title}>
      Atractivos Turísticos
      </Text>
      <Text style={styles.turismo}>
      *Centro Eudista Betania
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Historico Cultural
•	Servicios: Retiros espirituales, encuentros juveniles, venta de palmeras, plátanos y naranjas.
•	Experiencia Turística: CULTURA
•	Contacto: Sr. Edgar Gaitan Hernandez. Tel. 25325481. Ubicada de plásticos modernos 1 km al oeste, barrio los Ramos

      </Text>  
      <Text style={styles.turismo}>
      *Finca La Providencia
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Senderismo, Conocimiento sobre cultivos prácticas agrícolas, Orquídeario,
•	Experiencia Turística: NATURALEZA
•	Contacto: María Rosales de Arce. 25323985 La finca se ubica del centro de salud de Dolores una cuadra al sur y 25 varas al oeste. - - -

      </Text>  
      <Text style={styles.turismo}>
      *Museo Histórico comunitario EL Pulgarcito
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Historico Cultural
•	Servicios: Recorrido por el lugar observación de piezas históricas
•	Experiencia Turística: CULTURA
•	Contacto: El museo se ubica en el parque “Rubén Darío” Francisco Rojas Sandino Núm. De teléfono: 82474218 Horario de atención: 8:00 am-4:00 pm - 
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

export default Dolores;
