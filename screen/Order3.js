import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListProduct from '../component/ListProduct'


const Order3 = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/a.png')} style={{ width: 250, height: 250, resizeMode: 'contain' }} />
            <ListProduct value={""} title={"Có thể Bạn Cần"} />
        </View>
    )
}

export default Order3

const styles = StyleSheet.create({})