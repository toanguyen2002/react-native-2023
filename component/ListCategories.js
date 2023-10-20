import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const ListCategories = () => {
    const list = [
        {
            key: "0",
            image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
            name: "Home",
        },
        {
            key: "1",
            image:
                "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
            name: "Deals",
        },
        {
            key: "3",
            image:
                "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
            name: "Electronics",
        },
        {
            key: "4",
            image:
                "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
            name: "Mobiles",
        },
        {
            key: "5",
            image:
                "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
            name: "Music",
        },
        {
            key: "6",
            image: "https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg",
            name: "Fashion",
        },
    ];
    return (
        <ScrollView horizontal >
            {list.map((item, index) => (
                <View key={index} style={{ marginRight: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={{ uri: item?.image }} />
                    <Text>{item?.name}</Text>
                </View>
            ))}
        </ScrollView>
    )
}

export default ListCategories