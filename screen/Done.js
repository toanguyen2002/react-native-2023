import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllCart } from '../redux/CartReduce'
import { Ionicons } from '@expo/vector-icons';
const Done = () => {
    const [loadPay, setLoadPay] = useState(true)
    const rou = useRoute()
    const nav = useNavigation()
    const cart = useSelector((state) => state.cart.cart)
    const distpath = useDispatch()
    const ClickpayDone = () => {
        distpath(removeAllCart(cart))
        fetch(`https://65474b9e902874dff3ac2238.mockapi.io/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "Quang Toan",
                productBuy: cart,
                Date: 1699171487,
                status: false,
            })
        }).then(() => {
            distpath(removeAllCart(cart))
        }).then(() => setLoadPay(false))
    }
    const totalvalue = useMemo(() => {
        const total = cart
            .map((item) => item.quantity * item.price)
            .reduce((value, preValue) => value + preValue, 0);
        return total
    }, [cart]
    )
    return (
        <View style={{ backgroundColor: '#aaa', position: 'relative', width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignItems: 'center' }}>
            {
                loadPay ?
                    (<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: 'white', borderRadius: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', width: 380, borderRadius: 10, height: 35 }}>Tổng Số  Tiền Thanh Toán: {totalvalue}$</Text>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', width: 380, borderRadius: 10, height: 35, textDecorationLine: 'underline' }}>Phương Thức Thanh Toán {rou.params?.pptt}</Text>
                    </View>)
                    : (<View style={{ alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height }}>
                        <Ionicons name="checkmark-done-circle-outline" size={150} color="rgb(124,252,0)" />
                        <Text style={{ color: 'white' }}>Cảm Ơn Quý Khách</Text>
                    </View>)
            }
            {
                loadPay ? <Pressable style={{ bottom: 20, position: 'absolute', width: Dimensions.get('window').width - 30, height: 40, borderRadius: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => ClickpayDone()}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Hoàn Tất</Text>
                </Pressable> : <Pressable style={{ bottom: 20, position: 'absolute', width: Dimensions.get('window').width - 30, height: 40, borderRadius: 10, backgroundColor: 'rgb(124,252,0)', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => nav.navigate('main')}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Về Nhà</Text>
                </Pressable>
            }
        </View>
    )
}

export default Done

const styles = StyleSheet.create({})