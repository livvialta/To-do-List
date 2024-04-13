import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const TelaInicial = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  // Simulação de tarefas iniciais
  useEffect(() => {
    // Aqui você pode buscar as tarefas da API
    // Exemplo de simulação:
    setTasks([
      { id: 1, nome: 'Tarefa 1', descricao: 'Descrição da Tarefa 1', preco: 'R$ 10,00' },
      { id: 2, nome: 'Tarefa 2', descricao: 'Descrição da Tarefa 2', preco: 'R$ 15,00' },
    ]);
  }, []);

  const adicionarTarefa = () => {
    navigation.navigate('Formulario');
  };

  const verDetalhes = (task) => {
    navigation.navigate('Detalhes', { task });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
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
