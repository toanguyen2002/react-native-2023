import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Order from './Order'
import Order1 from './Order1'
import Search from '../component/Search'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const TabView = () => {
    const Tab = createMaterialTopTabNavigator()
    const nav = useNavigation()
    return (

        <View>
            <View style={{ backgroundColor: '#FF4500', height: 50, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                    <Pressable onPress={() => nav.goBack()}>
                        <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    </Pressable>
                    <Text style={{ fontWeight: 'bold', marginLeft: 10, fontSize: 20, color: 'white' }}>Đơn Mua</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                    <Feather name="search" size={24} color="black" style={{ marginRight: 10 }}></Feather>
                    <Entypo name="chat" size={24} color="black" style={{ marginRight: 10 }} />
                </View>
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 10 }
                }}>
                <Tab.Screen component={Order} name='Đơn Hàng Đang Mua' />
                <Tab.Screen component={Order1} name='Đơn Hàng Đang vận chuyển' />
                <Tab.Screen component={Order1} name='Đơn Hàng Đã thanh Toán' />
                <Tab.Screen component={Order1} name='Đơn Hàng chưa phản hồi' />
            </Tab.Navigator>
        </View>

    )
}

export default TabView

const styles = StyleSheet.create({})