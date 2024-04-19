import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';

const TelaInicial = ({ navigation }) => {
  const [tasks, setTasks] = useState([]); // Estado para armazenar as tarefas

  useEffect(() => {
    // Função para buscar as tarefas da API quando o componente for montado
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/'); 
        setTasks(response.data); // Atualiza o estado com as tarefas recebidas da API
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    fetchTasks(); // Chama a função fetchTasks para buscar as tarefas ao montar o componente
  }, []); // O segundo argumento vazio [] garante que esta função será executada apenas uma vez ao montar o componente

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
            <Text>Nome: {item.Title}</Text>
            <Text>Descrição: {item.Description}</Text>
            <Text>Preço: {item.Price}</Text>
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
