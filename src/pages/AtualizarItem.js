import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';
import axios from 'axios';

// Componente AdicionarTarefa
const AtualizarTarefa = ({ navigation }) => {
  // Estados para armazenar os dados da nova tarefa
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [concluido, setConcluido] = useState(false);

  // Função para adicionar a nova tarefa
  const atualizarTarefa = async () => {
    try {
      // Enviar os dados da nova tarefa para a API
      const response = await axios.put(`http://127.0.0.1:8000/api/delete/${task.id}`, {
        Title: nome,
        Description: descricao,
        Price: preco,
        Completed: concluido
      });
      console.log('Atualizar a tarefa:', response.data);
      // Redireciona de volta para a tela anterior após a exclusão
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };

  // Retorna a interface do usuário
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
      <Button title="Atualizar Tarefa" onPress={atualizarTarefa} />
    </View>
  );
};

// Estilos CSS para o componente
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

// Exporta o componente AdicionarTarefa
export default AtualizarTarefa;
