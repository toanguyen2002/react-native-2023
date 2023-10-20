import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const Search = () => {
    const cart = useSelector(state => state.cart.cart)
    const nav = useNavigation();

    return (
        <View style={{ backgroundColor: '#FF4500', height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ borderRadius: 30, backgroundColor: '#aaa', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Entypo name="magnifying-glass" size={24} color="black" />
                <TextInput style={{ height: 35, width: 270, marginRight: 5, marginLeft: 5 }} placeholder=' Enter name product' I />
            </View>


            <Entypo style={{ marginLeft: 5 }} name="mic" size={24} color="black" />
            <Pressable
                onPress={() => nav.navigate("CartScreen")}
            >
                {cart.length > 0 ? cart.map(item => item.quantity).reduce((numpr, total) => { return numpr + total }) > 0
                    ? <Text style={styles.numproduct}>{cart.map(item => item.quantity).reduce((numpr, total) => { return numpr + total }) < 99 ? cart.map(item => item.quantity).reduce((numpr, total) => { return numpr + total }) : '99+'}</Text>
                    : null : null}

                <AntDesign style={{ marginLeft: 5 }} name="shoppingcart" size={24} color="black" />
            </Pressable>

        </View>
    )
}


const styles = StyleSheet.create({
    numproduct: {
        color: 'black',
        position: 'absolute',
        zIndex: 99999999,
        backgroundColor: 'red',
        width: 19, height: 19, fontSize: 10,
        borderRadius: 20,
        top: 0,
        left: 0, textAlign: 'center'
    }
})

export default Search