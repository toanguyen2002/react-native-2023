import { View, Text, ScrollView, Image, Pressable, Modal, SafeAreaView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReduce';

const ListProduct = () => {
    const [products, setproducts] = useState([]);
    const [numproducts, setNumproducts] = useState(20)
    const nav = useNavigation()
    const [visibleDetail, setVisibleDetail] = useState(false)
    const [payproduct, setPayproduct] = useState(null)
    var cart = useSelector(state => state.cart.cart)
    const dispacth = useDispatch()
    const setopenModal = (item) => {
        setPayproduct(item)
        setVisibleDetail(true)
    }

    const setcolorModal = () => {
        setPayproduct(null)
        setVisibleDetail(false)
    }

    const addItemToCart = (item) => {
        dispacth(addToCart(item));
        console.log(cart);
    };

    const upNumproduct = () => {
        console.log(numproducts);
        setNumproducts(numproducts + 20)

    }
    useEffect(() => {
        const getAllProduct = async () => {
            const respone = await axios.get(`https://dummyjson.com/products?limit=${numproducts}`);
            setproducts(respone.data.products);
        };
        getAllProduct();
    }, [numproducts]);
    return (
        <ScrollView >
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', marginTop: 10 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Sản Phẩm Được Bán Nhiều Nhất</Text></View>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'white' }}>
                {products.map((item, index) => (
                    <Pressable style={{ marginVertical: 5 }} key={index} onPress={() => nav.push("ItemsScreen", {
                        id: item?.id,
                        title: item?.title,
                        price: item?.price,
                        carouselImages: item?.images,
                        stock: item?.stock,
                        size: item?.brand,
                    })}>
                        <Image style={{ width: 150, height: 150, resizeMode: 'contain' }} source={{ uri: item?.images[0] }} />
                        <Text style={{ width: 150 }}>{item?.title}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <Text>{item?.price}$</Text>
                            <Text style={{ fontWeight: 'bold', color: '#CC9933' }}>{item?.rating} ratings</Text>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        marginVertical: 5,
                                        backgroundColor: pressed ? 'yellow' : "#fff",
                                        padding: 13,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 20,
                                        width: 140,
                                        borderWidth: 1,
                                        borderColor: '#C41E3A'
                                    }
                                ]}
                                onPress={() => setopenModal(item)}
                            >
                                <Text style={{ fontSize: 15, color: '#C0C0C0' }}>Buy Now</Text>
                            </Pressable>
                            <Pressable
                                style={({ pressed }) => [{
                                    backgroundColor: pressed ? "#aaa" : "#FFC72C",
                                    padding: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 20,
                                    width: 140,
                                }]}
                                onPress={() => addItemToCart(item)}  >
                                <Text style={{ textShadowColor: 2, color: "brown" }}>
                                    Add To Cart
                                </Text>
                            </Pressable>
                        </View>
                    </Pressable>
                ))}

            </View>
            <Pressable style={{ alignItems: 'center', justifyContent: 'center', height: 60, borderWidth: 1, borderColor: '#660066' }} onPress={() => upNumproduct()}>
                <Text style={{ fontWeight: 'bold', color: '#660066', }}>More Item</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visibleDetail}
                style={{ bottom: 0 }}
            >
                <View style={{
                    marginTop: 290,
                    backgroundColor: '#aaa',
                    alignItems: 'center',
                    justifyContent: 'center', padding: 10
                    , height: Dimensions.get('window').height / 2
                }}>
                    <Pressable
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 0
                        }}
                        onPress={setcolorModal}>
                        <FontAwesome name="remove" size={40} color="black" />
                    </Pressable>
                    {payproduct &&
                        <SafeAreaView>
                            <View >
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>{payproduct?.title}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 5 }}>
                                <View>
                                    <Image style={{ width: 150, height: 150, resizeMode: 'contain', marginRight: 10 }} source={{ uri: payproduct?.images[0] }} />
                                </View>
                                <View style={{ justifyContent: 'space-around' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Sản Phẩm: {payproduct?.title}</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Giá bán: {payproduct?.price}$</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Số Lượng Sản Phẩm : {payproduct?.stock}</Text>
                                    <Text style={{ textAlign: 'center', marginVertical: 20, backgroundColor: '#71BC68', padding: 10 }}>Mua Ngay</Text>
                                </View>
                            </View>
                        </SafeAreaView>
                    }
                </View>
            </Modal>
        </ScrollView>

    )
}

export default ListProduct