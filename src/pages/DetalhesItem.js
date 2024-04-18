import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';

// Componente DetalhesTarefa
const DetalhesTarefa = ({ route, navigation }) => {
  // Extrai a tarefa passada como parâmetro de navegação
  const { task } = route.params;

  // Estado para controlar se a tarefa está concluída ou não
  const [concluida, setConcluida] = useState(task.concluida);

  // Função para editar a tarefa
  const editarTarefa = () => {
    // Lógica para editar a tarefa
    navigation.navigate('');
  };

  // Função para deletar a tarefa
  const deletarTarefa = () => {
    // Lógica para deletar a tarefa
    navigation.goBack();
  };

  // Função para alternar o estado de conclusão da tarefa
  const toggleConcluida = () => {
    setConcluida(!concluida);
    // Aqui você pode adicionar lógica para atualizar o estado da tarefa no banco de dados, por exemplo.
  };

  // Retorna a interface do usuário
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: {task.nome}</Text>
      <Text>Descrição: {task.descricao}</Text>
      <Text>Preço: {task.preco}</Text>
      <View style={styles.switchContainer}>
        <Text>Concluída:</Text>
        <Switch
          value={concluida}
          onValueChange={toggleConcluida}
        />
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
