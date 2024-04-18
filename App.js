import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import TelaInicial from './src/pages/TelaInicial';
import Formulario from './src/pages/Formulario';
import DetalhesTarefa from './src/pages/DetalhesItem';

// Cria uma pilha de navegação
const Stack = createStackNavigator();

// Componente principal do aplicativo
function App() {
  return (
    <NavigationContainer>
      {/* Define a pilha de navegação com as telas */}
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