import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Order = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        const getdata = async () => {
            const res = await axios.get(`https://65474b9e902874dff3ac2238.mockapi.io/order?name=TOAN`)
            setDatas(res.data)
            console.log(res.data);
        }
        getdata()
    }, [])
    return (
        <ScrollView>
            {datas ?
                <View>{datas.map((item, index) => (
                    <View>
                        <View>{
                            item.productBuy.map((i, d) => (
                                <View style={{ flexDirection: 'row', borderBottomColor: '#aaa', borderBottomWidth: 1, position: 'relative', }}>
                                    <Image source={{ uri: i.thumbnail }} style={{ width: 170, height: 170, resizeMode: 'contain' }} />
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginVertical: 10 }}>{i.title}</Text>
                                        <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 15, color: '#aaa', width: 200 }}>{i.description}</Text>
                                        <View style={{ position: 'absolute', bottom: 15, right: 15 }}>
                                            <Text style={{}}>Giá Niêm Yết: <Text style={{ fontWeight: 'bold' }}>{i.price}</Text></Text>
                                            <Text style={{ marginVertical: 5 }}> Thành Tiền: <Text style={{ fontWeight: 'bold' }}>{i.price + i.price * 10 / 100}</Text></Text>
                                            <View style={{ backgroundColor: '#FF6633', justifyContent: 'center', alignItems: 'center', width: 163, height: 40, borderRadius: 4 }}>
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Xem Chi Tiết Đơn Hàng</Text>
                                            </View>
                                        </View>

                                    </View>
                                    {item.status ? <Text style={{
                                        color: 'green', position: 'absolute', left: 0, bottom: 11, fontSize: 9, fontWeight
                                            : 'bold'
                                    }}>'Đơn Hàng Đã Được Xác Nhận'</Text> : <Text style={{ color: 'red', position: 'absolute', left: 0, bottom: 11, fontSize: 9, fontWeight: 'bold' }}>Đơn Hàng Đang Đợi Người bán Phản Hồi</Text>}
                                </View>
                            ))}</View>

                    </View>
                ))}</View>
                : <View>2</View>}
        </ScrollView>
    )
}

export default Order

const styles = StyleSheet.create({})