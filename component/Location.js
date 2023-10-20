import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
const Location = () => {
    return (
        <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
            <Entypo name="location" size={24} color="black" />
            <Text style={{ marginLeft: 4 }}>Nguyễn Văn Bảo - Phường 4 Gò Vấp</Text>
        </View>
    )
}

export default Location