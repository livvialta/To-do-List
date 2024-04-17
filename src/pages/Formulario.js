import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

const AdicionarTarefa = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [concluido, setConcluido] = useState(false);

  const adicionarTarefa = () => {
    // Aqui você pode enviar os dados para a API para adicionar a nova tarefa
    const novaTarefa = { nome, descricao, preco, concluido };
    console.log('Nova tarefa:', novaTarefa);
    // Resetar os campos após adicionar a tarefa
    setNome('');
    setDescricao('');
    setPreco('');
    setConcluido(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da Tarefa:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={text => setDescricao(text)}
      />
      <Text style={styles.label}>Preço:</Text>
      <TextInput
        style={styles.input}
        value={preco}
        onChangeText={text => setPreco(text)}
        keyboardType="numeric"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Concluído:</Text>
        <Switch
          value={concluido}
          onValueChange={value => setConcluido(value)}
        />
      </View>
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default AdicionarTarefa;
