import React from 'react';
import { Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from  './styles'
//import Carousel from '../components/Carousel'
//import { dummyData } from '../data/Data'
import Carousel from '../../components/Carousel'
import{dummyData} from '../../data/Data'


const main = ({navigation}) => {
  return (
    
        
      <ScrollView>
         
         <Carousel data = {dummyData}/>
         <Text style={styles.title}>SELECCIONA UN MUNICIPIO</Text>
          <TouchableOpacity style={styles.btnsanmarcos} onPress={() => navigation.navigate('sanmarcos')}>
        <Text style={styles.text}>San Marcos</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.btnsanmarcos} onPress={() => navigation.navigate('Jinotepe')}>
        <Text style={styles.text}>Jinotepe</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.btnsanmarcos} onPress={() => navigation.navigate('Dolores')}>
        <Text style={styles.text}>Dolores</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.btnsanmarcos}onPress={() => navigation.navigate('Diriamba')}>
        <Text style={styles.text}>Diriamba</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.btnsanmarcos} onPress={() => navigation.navigate('LaConquista')}>
        <Text style={styles.text}>La Conquista</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnsanmarcos} onPress={() => navigation.navigate('LaPaz')}>
        <Text style={styles.text}>La Paz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnsanmarcos} onPress={() => navigation.navigate('ElRosario')}>
        <Text style={styles.text}>El Rosario</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnsanmarcos} onPress={() => navigation.navigate('Teresa')}>
        <Text style={styles.text}>Teresa</Text>
      </TouchableOpacity>
    
      </ScrollView>
  )
}
export default main