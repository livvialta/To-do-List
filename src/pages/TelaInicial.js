import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

// Componente TelaInicial
const TelaInicial = ({ navigation }) => {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([
    { id: 1, nome: 'Tarefa 1', descricao: 'Descrição da tarefa 1', preco: 10, concluida: true },
    { id: 2, nome: 'Tarefa 2', descricao: 'Descrição da tarefa 2', preco: 2, concluida: false },
    { id: 3, nome: 'Tarefa 3', descricao: 'Descrição da tarefa 3', preco: 30, concluida: true},
  ]);

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    navigation.navigate('Formulário');
  };

  // Função para visualizar os detalhes de uma tarefa
  const verDetalhes = (task) => {
    navigation.navigate('Detalhes', { task });
  };

  // Retorna a interface do usuário
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Lista de tarefas */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text>Nome: {item.nome}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Preço: {item.preco}</Text>
            {/* Botão para visualizar detalhes da tarefa */}
            <Button title="Detalhes" onPress={() => verDetalhes(item)} />
          </View>
        )}
      />
      {/* Botão para adicionar uma nova tarefa */}
      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
    </View>
  );
};

export default TelaInicial;
