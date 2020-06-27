import React, { useState } from 'react';
import { Text,Image, View, TouchableHighlight, TextInput } from 'react-native';
import styles from "./styles";
import firebaseservice from '../../service/firebase';

const signup =({navigation}) =>{

    const [name, setName] = useState('')
   const [user, setUser] = useState('')
   const [pass, setPass] = useState('')
   const crearnewuser = async() =>{
try {
  await firebaseservice.createuser(name, user, pass)
  navigation.navigate('main')
} catch (e) {
  alert(e)
}

   }

   
  return (
    <View style={styles.container}>
            <Image style={styles.foto} source={require('./usersingnup.png')}/> 

        <View>
        <Text style={styles.intro}>Introduzca su nombre </Text>
      <TextInput style={styles.inputtext} placeholder='name'
      value={name}
      onChange={(e) => setName(e.nativeEvent.text)}
      /> 
       <Text style={styles.intro}>Introduzca su correo </Text>
       <TextInput style={styles.inputtext} placeholder='Email'
      value={user}
      onChange={(e) => setUser (e.nativeEvent.text)}
      /> 
     
      <Text style={styles.intro}>Introduzca su contraseña </Text> 
      <TextInput style={styles.inputtext}  secureTextEntry={true} placeholder='Password'
         value={pass}
         onChange={(e) => setPass (e.nativeEvent.text)}
      />
      </View>
     



<TouchableHighlight style={styles.buttom} onPress={(crearnewuser)} >
 <Text style={styles.textbuttom}>
     Crear Usuario
 </Text>

</TouchableHighlight>
    </View>
  );
}
export default signup