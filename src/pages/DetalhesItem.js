import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
import axios from 'axios';

// Componente DetalhesTarefa
const DetalhesTarefa = ({ route, navigation }) => {
  // Extrai a tarefa passada como parâmetro de navegação
  const { task } = route.params;

  // Estado para controlar se a tarefa está concluída ou não
  const [concluida, setConcluida] = useState(task.concluida);

  // Função para editar a tarefa
  const editarTarefa = () => {
    navigation.navigate('Atualizar');
  };

  // Função para deletar a tarefa
  const deletarTarefa = async () => {
    try {
      // Faz uma solicitação DELETE para a API para excluir a tarefa com base no ID
      await axios.delete(`http://127.0.0.1:8000/api/delete/${task.id}`);
      // Redireciona de volta para a tela anterior após a exclusão
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    }
  };


  // Retorna a interface do usuário
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: {task.Title}</Text>
      <Text>Descrição: {task.Description}</Text>
      <Text>Preço: {task.Price}</Text>
      <View style={styles.switchContainer}>
        <Text>Concluída: {concluida ? 'Sim' : 'Não'}</Text>
      </View>
      <Button title="Editar" onPress={editarTarefa} />
      <Button title="Deletar" onPress={deletarTarefa} />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

// Exporta o componente DetalhesTarefa
export default DetalhesTarefa;
