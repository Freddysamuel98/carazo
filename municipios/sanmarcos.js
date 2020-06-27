import React from 'react'
import {View, Text, StyleSheet, ScrollView, _ScrollView} from 'react-native'
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Sanmarcos'



const SanMarcos = ({navigation}) =>{
    return (
      <ScrollView>
        <View>
           
           <Carousel data = {dummyData}/>
          
           <Text style={styles.history}>
           San Marcos es un municipio que te encantará por su cultura, naturaleza y su gente amable orgullosos de su pueblo, conoce este bello municipio y enamorate de su arte y tradición.
El origen del nombre del municipio se deriva de la aparición de la imagen de San Marcos, en el lugar llamado Pilas de Sapasmapa.
El municipio de San Marcos se encuentra a 45 kilómetros de la ciudad de Managua. Limita al norte con La Concepción, al sur con Diriamba y Jinotepe, al este con Masatepe y al oeste con San Rafael del Sur.

La actividad económica del municipio es la agropecuaria, teniendo mayor importancia dentro de la actividad primaria el sector agrí¬cola; existen grandes áreas o plantíos dedicados al cultivo del café, granos básicos, cítricos, hortalizas, entre otros.

      </Text>
      <Text style={styles.title}>
      ¿Cómo llegar?
      </Text>
      
      <Text style={styles.history}>Al municipio de San Marcos podés llegar por varias carreteras que pasan por su casco urbano. Desde Managua, dirigiéndote por la Carretera Sur, desde donde debés girar en el Empalme de Las Esquinas hacia el este. 
También podés llegar por la carretera que pasa por Ticuantepe y La Concepción, tomando una unidad de transporte que sale desde la terminal de buses frente a la Universidad Centroamericana, (UCA), o en los mercados Israel Lewites y Roberto Huembes.

Es accesible desde el departamento de Masaya, por la carretera que viene desde Catarina y pasa por las ciudades de Niquinohomo y Masatepe. Hay buses y taxis desde cualquiera de esas ciudades. 

      </Text>
      <Text style={styles.title}>
   Cultura
      </Text>
      <Text style={styles.history}>
    Los primeros habitantes son de origen chorotega, cuya lengua era mangue, hasta la llegada de los españoles. El subsuelo de San Marcos guarda valiosos recuerdos de su historia que se manifiestan en forma de vasijas cerámicas monocromas y policromas, así como grabados rupestres.
En 1820 esta localidad fue reconocida como pueblo, luego en 1905 fue elevada a villa y su rango de ciudad lo recibió el 1 de marzo de 1916.

      </Text>
      
      <Text style={styles.title}>
      Atractivos Turísticos
      </Text>
      <Text style={styles.turismo}>
      *Cueva Manos Pintadas
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Natural
•	Servicios: Senderismo, Observación de petroglifos, Observación de flora y fauna
•	Experiencia Turística: NATURALEZA
•	Contacto: Se encuentran en la finca La Sahina en la comunidad San Pedro de los Molinos. - - -

      </Text>  
      <Text style={styles.turismo}>
      *Finca Yeguada - Majaloba
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Socio Economico
•	Servicios: Exhibición de Caballos, Senderos guiados.
•	Experiencia Turística: CULTURA
•	Contacto: En comunidad Concepción de María, carretera San Marcos - Masatepe 300 metros al norte.

      </Text>  
      <Text style={styles.turismo}>
      *Hacienda San Dionisio
      </Text>
      <Text style={styles.sitios}>
      •	Tipología del Recurso: Recurso Socio Economico
•	Servicios: Exhibición de Caballos, Senderos guiados.
•	Experiencia Turística: CULTURA
•	Contacto: En comunidad Concepción de María, carretera San Marcos - Masatepe 300 metros al norte.
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

export default SanMarcos