// Importa os componentes necessários do React Native
import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';

// Importa o ícone do MaterialCommunityIcons do Expo
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Importa a função de criação de usuário com e-mail e senha do Firebase Auth e a instância FIREBASE_AUTH
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from "../config/firebaseConfig";

// Componente de cadastro
const Cadastro = ({ navigation }) => {
    // Define os estados para armazenar o e-mail, senha e se houve erro no registro
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorRegister, setErrorRegister] = useState(false);

    // Obtém a instância de autenticação do Firebase
    const auth = FIREBASE_AUTH;

    // Função para registrar um novo usuário
    const register = async () => {
        try {
            // Tenta criar um novo usuário no Firebase com e-mail e senha fornecidos
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            // Se o registro for bem-sucedido, obtém o usuário e navega para a tela "Task" com o ID do usuário
            const user = userCredential.user;
            navigation.navigate("Task", { idUser: user.uid });
            console.log(user); 
            alert("Olhe seu e-mail!");
        } catch (error) {
            // Se ocorrer um erro no registro, define o estado de erro como verdadeiro e exibe uma mensagem de alerta com o erro
            setErrorRegister(true);
            alert('Registration failed: ' + error.message);
        }
    }

    // Retorna a interface do usuário
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>Criar uma Conta</Text>
            <TextInput style={styles.input} placeholder="Enter com seu E-mail" keyboardType="email-address" onChangeText={(text) => setEmail(text)} value={email}></TextInput>
            <TextInput style={styles.input} placeholder="Enter com sua Senha" secureTextEntry={true} onChangeText={(text) => setSenha(text)} value={senha}></TextInput>
            {errorRegister === true ?
                <View style={styles.contextAlert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                    <Text style={styles.warningAlert}>
                        E-mail ou Senha INVÁLIDO
                    </Text>
                </View> :
                <View></View>
            }
            {email === "" || senha === "" ?
                <TouchableOpacity disabled={true} style={styles.buttonRegister}>
                    <Text style={styles.textButtonRegister}>
                        Registre-se
                    </Text>
                </TouchableOpacity> :
                <TouchableOpacity style={styles.buttonRegister} onPress={register}>
                    <Text style={styles.textButtonRegister}>
                        Registre-se
                    </Text>
                </TouchableOpacity>
            }
            <Text style={styles.login}>Já é Registrado?<Text style={styles.linkSubscribe} onPress={() => navigation.navigate("Login")}> Entre!</Text></Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    contextAlert: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    warningAlert: {
        color: '#bdbdbd',
        marginLeft: 5,
    },
    buttonRegister: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    textButtonRegister: {
        color: '#fff',
        textAlign: 'center',
    },
    login: {
        marginTop: 20,
        textAlign: 'center',
    },
    linkSubscribe: {
        color: 'blue',
    },
});

// Exporta o componente Cadastro
export default Cadastro;
