    import React, { useState, useEffect } from "react";
    import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, StyleSheet } from 'react-native';
    import { FIREBASE_AUTH, FIREBASE_APP, FIREBASE_DB } from "../config/firebaseConfig";
    import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
    import { MaterialCommunityIcons } from "@expo/vector-icons";


    const Login = ({ navigation }) => {
            // Estados para controlar o email, senha e mensagem de erro de login
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [errorLogin, setErrorLogin] = useState(""); 

        const auth = FIREBASE_AUTH;

        // Função assíncrona para efetuar o login do usuário
        const signIn = async () => {
            try {
                // Efetua o login com o email e senha fornecidos
                const response = await signInWithEmailAndPassword(auth, email, password);
                // Navega para a tela "Home" com o ID do usuário autenticado
                navigation.navigate("Home", { idUser: response.user.uid });
                console.log(response);
            // Em caso de erro, exibe uma mensagem de alerta
            } catch (error) {
                console.log(error);
                setErrorLogin(true); 
                alert('Sign in failed: ' + error.message);
            } finally {
            }
        };

        // Retorna a interface do usuário

        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter com seu E-mail" keyboardType="email-address" onChangeText={(text) => setEmail(text)} value={email}></TextInput>
                <TextInput style={styles.input} placeholder="Enter com sua Senha" secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password}></TextInput>
                {errorLogin === true ?
                    <View style={styles.contextAlert}>
                        <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                        <Text style={styles.warningAlert}>
                            E-mail ou Senha INVÁLIDO
                        </Text>
                    </View> :
                    <View></View>
                }
                {email === "" || password === "" ?
                    <TouchableOpacity disabled={true} style={styles.buttonLogin}>
                        <Text style={styles.textButtonLogin}>
                            Login
                        </Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.buttonLogin} onPress={signIn}>
                        <Text style={styles.textButtonLogin}>
                            Login
                        </Text>
                    </TouchableOpacity>
                }
                <Text style={styles.registration}>Não Tem Registro?<Text style={styles.linkSubscribe} onPress={() => navigation.navigate("Cadastro")}> Cria sua Conta!</Text></Text>
                <View style={{ height: 100 }} />
            </KeyboardAvoidingView>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#fff',
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
        buttonLogin: {
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
        },
        textButtonLogin: {
            color: '#fff',
            textAlign: 'center',
        },
        registration: {
            marginTop: 20,
            textAlign: 'center',
        },
        linkSubscribe: {
            color: 'blue',
        },
    });

    export default Login;
