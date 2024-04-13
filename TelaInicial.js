import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const TelaInicial = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    navigation.navigate('Formulario');
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
