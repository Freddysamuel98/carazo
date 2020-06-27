import React from 'react';
import{NavigationContainer} from '@react-navigation/native'
import {createStackNavigator}  from    '@react-navigation/stack'
import login from './screns/login/login'
import main from './screns/main/main'
import signup from './screns/signup/signup'
import home from './screns/home/home'
import sanmarcos from './municipios/sanmarcos'
import Diriamba from './municipios/Diriamba'
import Dolores from './municipios/Dolores'
import Jinotepe from './municipios/Jinotepe'
import LaConquista from './municipios/Laconquista'
import LaPaz from './municipios/LaPaz'
import ElRosario from './municipios/ElRosario';
import Teresa from './municipios/Teresa';







const stack = createStackNavigator()
export default function App() {
  return (
  <NavigationContainer>
       <stack.Navigator initialRouteName="home">
            <stack.Screen  options={{headerTitle:'INICIO DE SESION'}} name="login" component={login}/>
            <stack.Screen options={{headerTitle:'CARAZO TOUR BIENVENIDOS'}} name="main" component={main}/>
            <stack.Screen options={{headerTitle:'CREAR USUARIO'}} name="signup" component={signup}/>
            <stack.Screen options={{headerTitle:'HOLA BIENVENIDOS'}} name="home" component={home}/>
            <stack.Screen options={{headerTitle:'SAN MARCOS'}} name="sanmarcos" component={sanmarcos}/>
            <stack.Screen options={{headerTitle:'DIRIAMBA'}} name="Diriamba" component={Diriamba}/>
            <stack.Screen options={{headerTitle:'DOLORES'}} name="Dolores" component={Dolores}/>
            <stack.Screen options={{headerTitle:'JINOTEPE'}} name="Jinotepe" component={Jinotepe}/>
            <stack.Screen options={{headerTitle:'LA CONQUISTA'}} name="LaConquista" component={LaConquista}/>
            <stack.Screen options={{headerTitle:'LA PAZ'}} name="LaPaz" component={LaPaz}/>
            <stack.Screen options={{headerTitle:'EL ROSARIO'}} name="ElRosario" component={ElRosario}/>
            <stack.Screen options={{headerTitle:'TERESA'}} name="Teresa" component={Teresa}/>

        </stack.Navigator>
  </NavigationContainer>
  );
}
