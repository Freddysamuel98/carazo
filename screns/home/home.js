import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import styles from  './styles'

const home = ({navigation}) => {
  return (
    
    <View style={styles.container}>
    <Image style={styles.foto} source={require('./logocarazotour.jpg')}/> 
      <TouchableHighlight   style={styles.buttom} onPress={() => navigation.navigate('login')} >
          <Text style={styles.textbuttom}>
              INICIAR
          </Text>

      </TouchableHighlight>
    </View>
  );
}
export default home