import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReduce";
import { AntDesign } from "@expo/vector-icons";
// import { AudioRecorder, AudioUtils } from "react-native-audio";
const HomeSCreen = () => {
  const [record, setRecord] = useState(false);
  const [products, setproducts] = useState([]);
  const [items, setItems] = useState([
    { label: "Men's Clothing", value: "men's Clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "Women's Clothing", value: "woman's Clothing" },
  ]);
  const [category, setcategory] = useState("jewelry");
  const [open, setOpen] = useState(false);
  const navigator = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  //
  // const startRecord = async () => {
  //   const audioPath = AudioUtils.DocumentDirectoryPath + "/test.aac";

  //   try {
  //     await AudioRecorder.prepareRecordingAtPath(audioPath, {
  //       SampleRate: 22050,
  //       Channels: 1,
  //       AudioQuality: "Low",
  //       AudioEncoding: "aac",
  //     });
  //     await AudioRecorder.startRecording();
  //     setRecord(false);
  //   } catch (error) {}
  // };
  //
  useEffect(() => {
    const getAllProduct = async () => {
      const respone = await axios.get(`https://dummyjson.com/products`);
      setproducts(respone.data.products);
      // console.log(respone);
    };
    getAllProduct();
  }, []);
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);
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
  const images = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
    },
    {
      url: "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
    },

    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
    },
  ];
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
  const offers = [
    {
      key: "0",
      title:
        "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
      offer: "72% off",
      oldPrice: 7500,
      price: 4500,
      image:
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
      ],
      color: "Green",
      size: "Normal",
    },
    {
      key: "1",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
      ],
      color: "black",
      size: "Normal",
    },
    {
      key: "2",
      title: "Aishwariya System On Ear Wireless On Ear Bluetooth Headphones",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
      carouselImages: ["https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg"],
      color: "black",
      size: "Normal",
    },
    {
      key: "3",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 24999,
      price: 19999,
      image: "https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg",
      ],
      color: "Norway Blue",
      size: "8GB RAM, 128GB Storage",
    },
  ];
  const dispacth = useDispatch();
  const addItemToCart = (item) => {
    dispacth(addToCart(item));
    console.log(cart);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={{ marginTop: -33 }}>
        <View
          style={{
            padding: 10,
            backgroundColor: "#00CED01",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#33FFFF",
          }}
        >
          <Pressable
            style={{
              flex: 1,
              height: 38,
              marginHorizontal: 7,
              backgroundColor: "#fff",
              gap: 10,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color="black"
              style={{ paddingLeft: 10 }}
            />
            <TextInput
              // style={{ backgroundColor: "#fff" }}
              placeholder="Enter product you want"
            />
          </Pressable>
          <Pressable>
            <Ionicons name="ios-mic" size={24} color="black" />
          </Pressable>

          <Pressable
            style={{ marginLeft: 10 }}
            onPress={() => navigator.navigate("CartScreen")}
          >
            <AntDesign name="shoppingcart" size={24} color="black" />
          </Pressable>
        </View>

        <Pressable
          style={{
            backgroundColor: "#99FFFF",
            flexDirection: "row",
          }}
        >
          <Entypo style={styles.ml2} name="location" size={24} color="black" />
          <Text style={styles.ml2}>Nguyễn Văn Bảo - Phường 4 - Gò Vấp</Text>
          <MaterialIcons
            style={styles.ml2}
            name="keyboard-arrow-down"
            size={24}
            color="black"
          />
        </Pressable>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: "white" }}
        >
          {list.map((item, index) => (
            <Pressable
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Image
                style={{ height: 50, width: 50, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                {item?.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets
          renderItem={({ item }) => (
            <ScrollView showsHorizontalScrollIndicator={false}>
              <Image
                style={{ width: 392, height: 200, borderRadius: 30 }}
                source={{ uri: item.url }}
              />
            </ScrollView>
          )}
          // keyExtractor={(item) => item.index}
        />
        <View
          style={{
            backgroundColor: "#C6E2FF",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#F4A460", fontSize: 30 }}>Top Deals</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {deals.map((item, index) => (
            <Pressable key={index}>
              <Image
                style={{
                  width: 180,
                  height: 180,
                  resizeMode: "contain",
                  marginBottom: 5,
                }}
                source={{ uri: item?.image }}
              />
            </Pressable>
          ))}
        </View>
        <Text
          style={{
            borderColor: "#D0D0D0",
            borderWidth: 5,
            height: 1,
            marginTop: 15,
            marginBottom: 15,
          }}
        />
        <Text style={{ fontWeight: "600" }}>Deals today</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {offers.map((item, index) => (
            <Pressable
              key={index}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 15,
              }}
              // fb4a9174ceae4a0a91d3d3919df8f538
              onPress={() =>
                navigator.navigate("ItemsScreen", {
                  key: item?.key,
                  title: item?.title,
                  offer: item?.offer,
                  oldPrice: item?.oldPrice,
                  price: item?.price,
                  image: item?.image,
                  carouselImages: item?.carouselImages,
                  color: item?.color,
                  size: item?.size,
                })
              }
            >
              <Image
                style={{ width: 150, height: 150, resizeMode: "contain" }}
                source={{ uri: item?.image }}
              />
              <Text style={{ textDecorationLine: "line-through" }}>
                {item.oldPrice}$
              </Text>
              <Text>{item?.price}$</Text>
              <Text
                style={{
                  backgroundColor: "red",
                  paddingVertical: 5,
                  width: 130,
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: 10,
                  borderRadius: 6,
                  color: "white",
                }}
              >
                {item?.offer}$
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <View
          style={{
            width: "45%",
            marginHorizontal: 10,
            marginBottom: open ? 50 : 10,
          }}
        >
          <DropDownPicker
            style={{
              borderColor: "#B7B7B7",
              height: 30,
              marginBottom: open ? 120 : 15,
            }}
            open={open}
            value={category}
            items={items}
            setOpen={setOpen}
            setItems={setItems}
            setValue={setcategory}
            placeholder="choose category"
            onOpen={onGenderOpen}
            zIndex={300}
            zIndexInverse={1000}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          {products.map((item, index) => (
            <Pressable
              style={{ marginHorizontal: 20, marginVertical: 25 }}
              key={index}
              onPress={() =>
                navigator.navigate("ItemsScreen", {
                  key: item?.id,
                  title: item?.title,
                  //     offer: item?.offer,
                  price: item?.price,
                  //     image: item?.image,
                  carouselImages: item?.images,
                  stock: item?.stock,
                  size: item?.brand,
                })
              }
            >
              {/* {item?.images.map((item, index) => ( */}
              <Image
                key={index}
                style={{
                  width: 130,
                  height: 130,
                  alignItems: "center",
                  // resizeMode: "contain",
                }}
                source={{ uri: item?.images[0] }}
              />
              {/*  ))} */}
              <Text numberOfLines={1} style={{ width: 140 }}>
                {item?.title}
              </Text>
              <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
                {item.description}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                  {item?.price}
                </Text>
                <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
                  {item?.rating} ratings
                </Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: "#FFC72C",
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  width: 140,
                }}
                onPress={() => addItemToCart(item)}
              >
                <Text style={{ textShadowColor: 2, color: "brown" }}>
                  Add To Cart
                </Text>
              </Pressable>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSCreen;

const styles = StyleSheet.create({
  mr2: {
    marginRight: 2,
  },
  ml2: {
    marginLeft: 2,
  },
  loadderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});
