import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const SplashSCreen = () => {
    const nav = useNavigation()
    setTimeout(() => {
        nav.navigate('Login')
    }, 5000);
    return (
        <View>
            <Text>1</Text>
        </View>
    )
}

export default SplashSCreen