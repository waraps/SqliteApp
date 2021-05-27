import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

// LocalStorage
import {localStorage} from '../Storage/LocalStorage'

const Auth = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try {
            if(username === 'waraps' && password === '123456') {
                await localStorage.setUser({username, password})
            } else {
                alert('Credenciales erradas!')
            }
        } catch (error) {
            alert('Ocurrio un error!')
        }
    } 

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.title}>LOGIN</Text>
                <Image style={styles.logo} source={require('../assets/img/sqlite.png')}/>
            </View>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Ingrese Username</Text>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor='#999'
                        value={username} 
                        placeholder='username ..'
                        onChangeText={setUsername}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Ingrese Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#999'
                        value={password} 
                        placeholder='* * * * * *'
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}>Iniciar sesion</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },
    banner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 70,
        fontSize: 35,
        color: '#444',
        textAlign: 'center'
    },
    logo: {
        width: 142,
        height: 142,
    },
    form: {
        marginTop: 100,
        marginBottom: 30,
        padding: 10,
        flex: 3,
        // justifyContent: 'center',
    },
    inputContainer: {
        width: '100%',
        padding: 5,
    },
    inputLabel: {
        marginBottom: 3,
        fontWeight: 'bold',
        color: '#444',
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        color: '#444',
        padding: 12,
    },
    button: {
        width: '100%',
        marginTop: 15,
        borderRadius: 4,
        backgroundColor: '#888',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    buttonText: {
        color: 'whitesmoke',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
