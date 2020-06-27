
import React, { useState } from 'react';
import { Text,Image, View, TouchableHighlight, TextInput } from 'react-native';
import styles from "./styles";
import firebaseservice from '../../service/firebase';






const login =({navigation}) =>{

    const [user, setUser] = useState('')
   const [pass, setPass] = useState('')

   const onPressLogin = async () =>{
    try {
        await firebaseservice.login(user, pass)
     // await firebaseService.login(user, pass)
      navigation.navigate('main')
    } catch (e) {
      alert(e)
    }
      }

  return (

    <View style={styles.container}>
      
      <Image style={styles.foto} source={require('./usuarioicon.png')}/> 

    
    
        <View>
  <Text style={styles.intro}>Introduzca su correo </Text>
      <TextInput style={styles.inputtext}  placeholder='Email'
      value={user}
      onChange={(e) => setUser (e.nativeEvent.text)}
      /> 
     
      <Text style={styles.intro}>Introduzca su contraseña </Text> 
      <TextInput style={styles.inputtext}  secureTextEntry={true} placeholder='Password'
         value={pass}
         onChange={(e) => setPass (e.nativeEvent.text)}
      />
      </View>
     
<TouchableHighlight style={styles.buttom} onPress={(onPressLogin) } >
 <Text style={styles.textbuttom}>
   login
 </Text>

</TouchableHighlight>
<TouchableHighlight style={styles.buttom} onPress={() => navigation.navigate('signup')} >
 <Text style={styles.textbuttom}>
     Crear Usuario
 </Text>

</TouchableHighlight>

    </View>
  );
}
export default login 