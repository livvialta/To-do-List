import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const TelaInicial = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: 1, nome: 'Tarefa 1', descricao: 'Descrição da tarefa 1', preco: 10 },
    { id: 2, nome: 'Tarefa 2', descricao: 'Descrição da tarefa 2', preco: 20 },
    { id: 3, nome: 'Tarefa 3', descricao: 'Descrição da tarefa 3', preco: 30 },
  ]);

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    navigation.navigate('Formulário');
  };

  // Função para visualizar os detalhes de uma tarefa
  const verDetalhes = (task) => {
    navigation.navigate('Detalhes', { task });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text>Nome: {item.nome}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Preço: {item.preco}</Text>
            <Button title="Detalhes" onPress={() => verDetalhes(item)} />
          </View>
        )}
      />
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
    </View>
  );
};

export default TelaInicial;
