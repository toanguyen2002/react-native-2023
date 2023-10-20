import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const PayScreen = () => {
  const nav = useNavigation()
  const Choice = ({ icon, title, deal }) => (
    <Pressable
      onPress={(() => nav.navigate('done', {
        pptt: title
      }))}>
      <View style={{
        alignItems: 'center',
        marginVertical: 10,
        // justifyContent: 'center',
        height: 66, backgroundColor: 'white',
        width: Dimensions.get('window').width - 20,
        borderRadius: 10,
        flexDirection: 'row',
        position: 'relative'
      }}>
        {icon}
        <Text style={{
          fontSize: 17,
          fontWeight: 'bold',
          marginLeft: 20
        }}>{title}</Text>
        {deal ? deal : <Text></Text>}
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          position: 'absolute',
          right: 0
        }}>{'>'}</Text>
      </View>
    </Pressable>
  )
  return (

    <View style={{ backgroundColor: '#aaa', position: 'relative', height: Dimensions.get('window').height, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Phương Thức Thanh Toán</Text>
      <Choice icon={<AntDesign name="pay-circle-o1" size={39} color="red" />} title={'Thanh Toán Bằng Ví E'} deal={<Text style={{ color: 'red', backgroundColor: 'yellow', marginLeft: 5, }}>Deal 99k</Text>} />
      <Choice icon={<AntDesign name="bank" size={39} color="green" />} title={'Thanh Toán Qua Ngân Hàng'} />
      <Choice icon={<FontAwesome name="cc-paypal" size={39} color="yellow" />} title={'Thanh Toán PayPa'} />
      <Choice icon={<MaterialIcons name="payment" size={39} color="blue" />} title={'Thanh Toán Bằng Thẻ Ghi nợ'} />
      <Choice icon={<FontAwesome5 name="apple-pay" size={39} color="black" />} title={'Thanh Toán Bằng Ví Apple'} />
      <Choice icon={<AntDesign name="inbox" size={39} color="black" />} title={'Thanh Toán Khi Nhận Hàng'} />
      <Pressable style={{ bottom: 20, position: 'absolute', width: Dimensions.get('window').width - 30, height: 40, borderRadius: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Đồng Ý</Text>
      </Pressable>

    </View>

  );
};

export default PayScreen;

const styles = StyleSheet.create({});
