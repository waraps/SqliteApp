import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

// LocalStorage
import {localStorage} from '../../Storage/LocalStorage'

const UserInfoScreen = () => {
    const [username, setUsername] = useState('')

    useEffect(() => {
        getUsername()
    }, [])

    const getUsername = async () => {
        try {
            const user = await localStorage.getUser()
            setUsername(user.username)
        } catch (error) {
            console.log(error)
        }    
    }

    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Text>Nombre de Usuario: {username}</Text>
        </View>
    )
}

export default UserInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
