import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
    const nav = useNavigation()
    setTimeout(() => {
        nav.replace('Login')
    }, 5000);
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../assets/start.gif')} />
        </View>
    )
}

export default StartScreen