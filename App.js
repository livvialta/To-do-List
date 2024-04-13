import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Cadastro from './Cadastro';
import TelaInicial from './TelaInicial';
import Formulario from './Formulario';
import DetalhesTarefa from './DetalhesItem';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={TelaInicial} />
        <Stack.Screen name="Formulário" component={Formulario} />
        <Stack.Screen name="Detalhes" component={DetalhesTarefa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
