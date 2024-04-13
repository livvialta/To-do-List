import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fazerLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      console.log('Usuário logado com sucesso!', userCredential.user);
      navigation.navigate('TelaInicial');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Credenciais inválidas, tente novamente.');
    }
  };

  const irParaCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={fazerLogin} />
      <Button title="Ir para Cadastro" onPress={irParaCadastro} />
    </View>
  );
};

export default Login;
