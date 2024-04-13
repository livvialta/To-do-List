import React from 'react';
import { View, Text, Button } from 'react-native';

const DetalhesTarefa = ({ route, navigation }) => {
  const { task } = route.params;

  const editarTarefa = () => {
    // Lógica para editar a tarefa
    navigation.navigate('Editar', { task });
  };

  const deletarTarefa = () => {
    // Lógica para deletar a tarefa
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: {task.nome}</Text>
      <Text>Descrição: {task.descricao}</Text>
      <Text>Preço: {task.preco}</Text>
      <Button title="Editar" onPress={editarTarefa} />
      <Button title="Deletar" onPress={deletarTarefa} />
    </View>
  );
};

export default DetalhesTarefa;
