import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fazerCadastro = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log('Usuário cadastrado com sucesso!', userCredential.user);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);
      Alert.alert('Erro', 'Erro ao criar a conta, tente novamente.');
    }
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
      <Button title="Cadastrar" onPress={fazerCadastro} />
    </View>
  );
};

export default Cadastro;
