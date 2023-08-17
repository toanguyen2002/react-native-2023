import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  const deals = [
    {
      id: "20",
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
      id: "30",
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
      id: "40",
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
      id: "40",
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
  return (
    <SafeAreaView>
      <View style={{ marginTop: -30 }}>
        <ImageBackground
          style={{ height: 150 }}
          resizeMode="cover"
          source={{
            uri: "https://antimatter.vn/wp-content/uploads/2022/05/background-dep-mo-phong-nui-3d.jpg",
          }}
        >
          <View style={{}}>
            <Image
              style={{
                height: 150,
                width: 150,
                borderRadius: 100,
                position: "absolute",
                top: 90,
                left: 120,
              }}
              source={{
                uri: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/363393326_301194812294336_525599344610265081_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8f96k5b-wigAX9i8squ&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBixBLzyNDID2WpEw60MjoYYOPN1hPe_AOTmzKhyvZRnQ&oe=64E228EC",
              }}
            />
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={{ marginTop: 90 }}>
        <Text style={{ textAlign: "center", fontSize: 17, fontWeight: 20 }}>
          Nguyễn Quang Toán
        </Text>
        <ScrollView
          style={{
            marginTop: 5,
          }}
        >
          {deals.map((item, index) => (
            <Pressable
              style={{
                flexDirection: "row",
                backgroundColor: "#CD853F",
                borderBottomColor: "brown",
                borderBottomWidth: 5,
              }}
            >
              <View>
                <Image
                  style={{ width: 160, height: 150, marginTop: 5 }}
                  source={{ uri: item.image }}
                />
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row" }}>
                    <MaterialIcons
                      name="messenger-outline"
                      size={24}
                      color="black"
                    />
                    <Text>43</Text>
                  </View>

                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <AntDesign name="heart" size={24} color="black" />
                    <Text>15</Text>
                  </View>
                </View>
              </View>

              <ScrollView>
                <Text
                  style={{
                    fontSize: 10,
                    textAlignVertical: "auto",
                    padding: 5,
                  }}
                >
                  Tên Sản Phẩm: {item?.title}
                </Text>
                <Text style={{ fontSize: 10, padding: 5 }}>
                  Màu Sắc: {item?.color}
                </Text>
                <Text style={{ fontSize: 10, padding: 5 }}>
                  Loại: {item?.size}
                </Text>
                <Text style={{ fontSize: 10, padding: 5 }}>
                  Giá Bán: {item?.price}
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Pressable onPress={() => navigator.navigate("ItemsScreen")}>
                    <Text style={styles.buttonUpdateDesign}>Chỉnh Sửa</Text>
                  </Pressable>
                  <Pressable>
                    <Text style={styles.buttondeleteDesign}>Xóa Sản Phẩm</Text>
                  </Pressable>
                </View>
              </ScrollView>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
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
