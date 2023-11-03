import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
  // View,
} from "react-native";

import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const ProfileScreen = () => {
  const deals = [
    {
      key: "20",
      title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
      ],
      color: "Stellar Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      key: "30",
      title:
        "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
      oldPrice: 74000,
      price: 26000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
      ],
      color: "Cloud Navy",
      size: "8 GB RAM 128GB Storage",
    },
    {
      key: "40",
      title:
        "Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger",
      oldPrice: 16000,
      price: 14000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg",
      ],
      color: "Icy Silver",
      size: "6 GB RAM 64GB Storage",
    },
    {
      key: "50",
      title:
        "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
      oldPrice: 12999,
      price: 10999,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg",
      ],
    },
  ];
  const navigator = useNavigation();
  const draw = useRef(null)
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ position: 'relative', width: Dimensions.get('window').width, backgroundColor: '#FF4500', height: 100 }}>
        <View style={{ flexDirection: 'row', position: 'absolute', top: 0, right: 0 }}>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#fff" : "#FF4500"
              }

            ]}>
              <Ionicons name="md-settings-outline" size={29} color="black" />
            </Pressable>
          </View>
          <View style={{ borderTopWidth: 1, borderColor: "#FF4500" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#fff" : "#FF4500"
              }

            ]}>
              <AntDesign name="shoppingcart" size={29} color="black" />
            </Pressable>
          </View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa", position: 'relative' }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#fff" : "#FF4500"
              }

            ]}>
              <MaterialCommunityIcons name="chat-outline" size={29} color="black" />
              <Text style={{ position: 'absolute', color: 'white', fontWeight: 'bold', backgroundColor: 'red', fontSize: 12, borderRadius: 100, alignContent: 'center', right: 0, top: 5, zIndex: 99999999 }}>99+</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <Image source={require('../assets/imgMain.png')} style={{ width: 70, height: 70, borderRadius: 100 }} />
          <View style={{ justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>Toán Nguyễn</Text>
            <Text style={{ marginVertical: 4, fontSize: 12, backgroundColor: '#F0E68C', width: 150, textAlign: 'center', fontWeight: 'bold', borderRadius: 10, }}>Thành Viên Vàng</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Người Theo Dõi:</Text>
                <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>0</Text>
              </View>
              <View style={{ flexDirection: 'row', marginHorizontal: 4, borderLeftWidth: 1, borderColor: 'black' }}>
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Đang Theo Dõi Theo Dõi:</Text>
                <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>44</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#aaa', height: 100 }}>
        <View style={{ width: Dimensions.get('window').width - 20, backgroundColor: 'black', flexDirection: 'row', padding: 10, borderRadius: 10, justifyContent: 'center' }}>
          <SimpleLineIcons name="note" size={24} color="green" />
          <Text style={{ fontSize: 13, color: 'white' }}>Thiết lập mật khẩu ngay để bảo vệ tài khoản <Text style={{ fontSize: 15, color: 'blue' }}>Thiết lập</Text> </Text>
        </View>
      </View>
      <View style={{ borderWidth: 0.11, borderColor: '#aaa', padding: 10, flexDirection: 'row', alignItems: 'center', height: 40, backgroundColor: 'white' }}>
        <MaterialCommunityIcons name="cellphone" size={24} color="green" />
        <Text style={{ marginHorizontal: 10 }}>Đơn nạp thẻ và dịch vụ</Text>
      </View>
      <View style={{ borderWidth: 0.11, borderColor: '#aaa', padding: 10, flexDirection: 'row', alignItems: 'center', height: 40, backgroundColor: 'white', position: 'relative' }}>
        <MaterialIcons name="notes" size={24} color="blue" />
        <Text style={{ marginHorizontal: 10 }}>Đơn mua</Text>
        <Text style={{ position: 'absolute', right: 5, fontSize: 10 }}>Xem lịch sử mua hàng</Text>
      </View>
      <View style={{ borderWidth: 0.11, borderColor: '#aaa', padding: 10, flexDirection: 'row', alignItems: 'center', height: 80, backgroundColor: 'white', justifyContent: 'space-around' }}>
        <View>
          <FontAwesome5 name="boxes" size={35} color="black" />
        </View>
        <View>
          <MaterialCommunityIcons name="truck-cargo-container" size={35} color="black" />
        </View>
        <View>
          <Entypo name="wallet" size={35} color="black" />
        </View>
        <View>
          <Entypo name="star" size={35} color="black" />
        </View>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deals.map((item, index) => (
            <View style={{ width: 150, backgroundColor: 'white', padding: 10, alignItems: 'center', borderWidth: 0.5, borderColor: '#aaa' }}>
              <Image source={{ uri: item.image }} style={{ width: 120, height: 140, resizeMode: 'contain' }} />
              <Text style={{ marginTop: 5 }}>Đã Từng Mua {index + 1} lần</Text>
              <View style={{ width: 150, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 11, flex: 1 }}>{item.price}$</Text>
                <View style={{ marginRight: 5 }}>
                  <EvilIcons name="cart" size={20} color="white" style={{ backgroundColor: '#FF4500', borderRadius: 10, flex: 1 }} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View >
        <Text style={{ backgroundColor: '#aaa' }}>Tài Khoản</Text>
        <View style={{}}>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa", backgroundColor: 'white' }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <AntDesign name="user" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Tài khoản vào bảo mật</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <EvilIcons name="location" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Địa Chỉ</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <MaterialCommunityIcons name="account-alert-outline" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Tài Khoản / Thẻ Ngân Hàng</Text>
            </Pressable>
          </View>
        </View>
        <Text style={{ backgroundColor: '#aaa' }}>Cài Đặt</Text>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <Ionicons name="md-settings-outline" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Cài Đặt Chat</Text>
            </Pressable>
          </View>
        </View>

        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <Entypo name="notification" size={24} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Cài Đặt Thông Báo</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <AntDesign name="meh" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Cài Đặt Riêng Tư</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <Feather name="user-x" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Người Dùng Đã Bị Chặn</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <Ionicons name="language-outline" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Ngôn Ngữ / language</Text>
            </Pressable>
          </View>
        </View>
        <Text style={{ backgroundColor: '#aaa' }}>Hỗ Trợ</Text>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <SimpleLineIcons name="support" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Trung Tâm Hỗ Trợ</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <MaterialIcons name="public" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Tiêu Chuẩn Cộng Đồng</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <MaterialIcons name="rule" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Điều Khoản</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={{ borderTopWidth: 1, borderColor: "#aaa" }}>
            <Pressable style={({ pressed }) => [
              {
                flexDirection: 'row',
                padding: 10,
                backgroundColor: pressed ? "#aaa" : "white"
              }

            ]}>
              <Feather name="star" size={29} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10, color: 'black' }}>Đánh Giá</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView >

  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  buttonUpdateDesign: {
    fontSize: 15,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 50,
    marginLeft: 10,
  },
  buttondeleteDesign: {
    fontSize: 15,
    backgroundColor: "red",
    color: "white",
    borderRadius: 50,
    marginLeft: 10,
  },
});
