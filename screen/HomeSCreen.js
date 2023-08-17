import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const HomeSCreen = () => {
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const list = [
    {
      id: "0",
      image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
      name: "Home",
    },
    {
      id: "1",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
      name: "Deals",
    },
    {
      id: "3",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
      name: "Electronics",
    },
    {
      id: "4",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
      name: "Mobiles",
    },
    {
      id: "5",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
      name: "Music",
    },
    {
      id: "6",
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
  const offers = [
    {
      id: "0",
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
      id: "1",
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
      id: "2",
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
      id: "3",
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
  const danhSachDienThoai = [
    {
      id: 1,
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      ten: "iPhone 13",
      hangSanXuat: "Apple",
      gia: 19990000,
      manHinh: "6.1 inch Super Retina XDR",
      heDieuHanh: "iOS 15",
      camera: "Hệ thống camera kép 12MP",
      pin: "Pin 3095 mAh",
      moTa: "Flagship mới nhất của Apple.",
    },
    {
      id: 2,
      ten: "Galaxy S21",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      hangSanXuat: "Samsung",
      gia: 14990000,
      manHinh: "6.2 inch Dynamic AMOLED 2X",
      heDieuHanh: "Android 11",
      camera: "Hệ thống camera 64MP + 12MP + 12MP",
      pin: "Pin 4000 mAh",
      moTa: "Sản phẩm cao cấp từ Samsung.",
    },
    {
      id: 3,
      ten: "Pixel 6",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      hangSanXuat: "Google",
      gia: 10990000,
      manHinh: "6.4 inch AMOLED",
      heDieuHanh: "Android 12",
      camera: "Hệ thống camera 50MP + 12MP + 8MP",
      pin: "Pin 4600 mAh",
      moTa: "Dòng điện thoại Pixel mới.",
    },
    {
      id: 4,
      ten: "Mi 12",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      hangSanXuat: "Xiaomi",
      gia: 15990000,
      manHinh: "6.8 inch OLED",
      heDieuHanh: "MIUI 13",
      camera: "Hệ thống camera 108MP + 16MP + 5MP",
      pin: "Pin 5000 mAh",
      moTa: "Sản phẩm cao cấp từ Xiaomi.",
    },
    {
      id: 5,
      ten: "OnePlus 9",
      img: "https://cdn.tgdd.vn/Products/Images/42/309847/oppo-a78-den-1-2.jpg",
      hangSanXuat: "OnePlus",
      gia: 11990000,
      manHinh: "6.55 inch Fluid AMOLED",
      heDieuHanh: "OxygenOS 11",
      camera: "Hệ thống camera 48MP + 50MP + 2MP",
      pin: "Pin 4500 mAh",
      moTa: "Thiết kế hiện đại và cấu hình mạnh mẽ.",
    },
    {
      id: 6,
      ten: "Xperia 1 III",
      img: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone14-pro-1.jpg",
      hangSanXuat: "Sony",
      gia: 17990000,
      manHinh: "6.5 inch 4K HDR OLED",
      heDieuHanh: "Android 11",
      camera: "Hệ thống camera 12MP (3 ống kính)",
      pin: "Pin 4500 mAh",
      moTa: "Điện thoại hàng đầu từ Sony với công nghệ hiển thị cao cấp.",
    },
    {
      id: 7,
      ten: "Redmi Note 10",
      img: "https://cdn.tgdd.vn/Products/Images/42/309722/oppo-reno10-xanh-128gb-1.jpg",
      hangSanXuat: "Xiaomi",
      gia: 4490000,
      manHinh: "6.43 inch Super AMOLED",
      heDieuHanh: "MIUI 12",
      camera: "Hệ thống camera 48MP + 8MP + 2MP + 2MP",
      pin: "Pin 5000 mAh",
      moTa: "Sản phẩm phổ thông với giá cả hợp lý.",
    },
    {
      id: 8,
      ten: "Galaxy A52",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      hangSanXuat: "Samsung",
      gia: 7990000,
      manHinh: "6.5 inch Super AMOLED",
      heDieuHanh: "Android 11",
      camera: "Hệ thống camera 64MP + 12MP + 5MP + 5MP",
      pin: "Pin 4500 mAh",
      moTa: "Sản phẩm tầm trung với nhiều tính năng hấp dẫn.",
    },
    {
      id: 9,
      ten: "Vivo Y72",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      hangSanXuat: "Vivo",
      gia: 5290000,
      manHinh: "6.58 inch IPS LCD",
      heDieuHanh: "Funtouch OS 11.1",
      camera: "Hệ thống camera 64MP + 2MP",
      pin: "Pin 5000 mAh",
      moTa: "Sản phẩm giá rẻ với hiệu năng đáng kinh ngạc.",
    },
    {
      id: 10,
      ten: "Oppo Reno 6",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      hangSanXuat: "Oppo",
      gia: 9990000,
      manHinh: "6.43 inch AMOLED",
      heDieuHanh: "ColorOS 11.3",
      camera: "Hệ thống camera 64MP + 8MP + 2MP + 2MP",
      pin: "Pin 4300 mAh",
      moTa: "Sản phẩm tập trung vào chất lượng chụp ảnh.",
    },
    {
      id: 11,
      ten: "Realme 8 Pro",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      hangSanXuat: "Realme",
      gia: 6990000,
      manHinh: "6.4 inch Super AMOLED",
      heDieuHanh: "Realme UI 2.0",
      camera: "Hệ thống camera 108MP + 8MP + 2MP + 2MP",
      pin: "Pin 4500 mAh",
      moTa: "Sản phẩm tầm trung với camera chất lượng cao.",
    },
    {
      id: 12,
      ten: "Xiaomi Poco X4",
      hangSanXuat: "Xiaomi",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      gia: 5990000,
      manHinh: "6.67 inch IPS LCD",
      heDieuHanh: "MIUI 13",
      camera: "Hệ thống camera 64MP + 8MP + 2MP + 2MP",
      pin: "Pin 5000 mAh",
      moTa: "Sản phẩm giá rẻ với hiệu năng đáng kinh ngạc.",
    },
    {
      id: 13,
      ten: "Nokia 8.4 5G",
      hangSanXuat: "Nokia",
      gia: 8990000,
      manHinh: "6.81 inch IPS LCD",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      heDieuHanh: "Android 11",
      camera: "Hệ thống camera 64MP + 8MP + 2MP + 2MP",
      pin: "Pin 4500 mAh",
      moTa: "Sản phẩm tầm trung với khả năng kết nối 5G.",
    },
    {
      id: 14,
      ten: "Motorola Edge 20",
      hangSanXuat: "Motorola",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      gia: 7990000,
      manHinh: "6.67 inch OLED",
      heDieuHanh: "Android 11",
      camera: "Hệ thống camera 108MP + 8MP + 2MP",
      pin: "Pin 4000 mAh",
      moTa: "Sản phẩm tầm trung với camera chất lượng cao.",
    },
    {
      id: 15,
      ten: "Sony Xperia 10 III",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      hangSanXuat: "Sony",
      gia: 8490000,
      manHinh: "6.0 inch OLED",
      heDieuHanh: "Android 11",
      camera: "Hệ thống camera 12MP + 8MP + 8MP",
      pin: "Pin 4500 mAh",
      moTa: "Sản phẩm tầm trung từ Sony với chất lượng âm thanh xuất sắc.",
    },
    {
      id: 16,
      ten: "LG Velvet",
      hangSanXuat: "LG",
      img: "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s-ultra-tim-1.jpg",
      gia: 6990000,
      manHinh: "6.8 inch P-OLED",
      heDieuHanh: "Android 10",
      camera: "Hệ thống camera 48MP + 8MP + 5MP",
      pin: "Pin 4300 mAh",
      moTa: "Sản phẩm tầm trung từ LG với thiết kế độc đáo.",
    },
    {
      id: 17,
      ten: "Google Pixel 5a",
      hangSanXuat: "Google",
      gia: 6990000,
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      manHinh: "6.34 inch OLED",
      heDieuHanh: "Android 12",
      camera: "Hệ thống camera 12.2MP + 16MP",
      pin: "Pin 4680 mAh",
      moTa: "Sản phẩm tầm trung từ Google với trải nghiệm Android thuần.",
    },
    {
      id: 18,
      ten: "Huawei Nova 9",
      hangSanXuat: "Huawei",
      gia: 8990000,
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      manHinh: "6.57 inch OLED",
      heDieuHanh: "EMUI 11",
      camera: "Hệ thống camera 50MP + 8MP + 2MP + 2MP",
      pin: "Pin 4300 mAh",
      moTa: "Sản phẩm tầm trung từ Huawei với thiết kế thời thượng.",
    },
    {
      id: 19,
      ten: "Asus Zenfone 8",
      hangSanXuat: "Asus",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      gia: 7990000,
      manHinh: "5.9 inch AMOLED",
      heDieuHanh: "ZenUI 8",
      camera: "Hệ thống camera 64MP + 12MP",
      pin: "Pin 4000 mAh",
      moTa: "Sản phẩm tầm trung từ Asus với hiệu năng cao.",
    },
    {
      id: 20,
      ten: "Lenovo Legion Phone Duel",
      img: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
      hangSanXuat: "Lenovo",
      gia: 12990000,
      manHinh: "6.65 inch AMOLED",
      heDieuHanh: "ZUI 12",
      camera: "Hệ thống camera 64MP + 16MP",
      pin: "Pin 5000 mAh",
      moTa: "Sản phẩm dành cho game thủ với thiết kế độc đáo.",
    },
  ];
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
          <Ionicons name="ios-mic" size={24} color="black" />
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
          renderItem={({ item, index }) => (
            <ScrollView showsHorizontalScrollIndicator={false}>
              <Image
                style={{ width: 392, height: 200, borderRadius: 30 }}
                source={{ uri: item.url }}
              />
            </ScrollView>
          )}
          // keyExtractor={(item) => item.index}
        />
        <View style={{ backgroundColor: "yellow", alignItems: "center" }}>
          <Text style={{ color: "red", fontSize: 30 }}>Top Deals</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {deals.map((item, index) => (
            <Pressable>
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
        <Text>Deals today</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {offers.map((item, index) => (
            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 15,
              }}
            >
              <Image
                style={{ width: 150, height: 150, resizeMode: "contain" }}
                source={{ uri: item?.image }}
              />
              <Text style={{ textDecorationLine: "line-through" }}>
                {item.oldPrice}$
              </Text>
              <Text>{item.price}$</Text>
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
            marginLeft: 1,
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {danhSachDienThoai.map((item, index) => (
            <Pressable>
              <View style={{ marginLeft: 10 }}>
                <Image
                  style={{
                    width: 180,
                    height: 180,
                    resizeMode: "contain",
                  }}
                  source={{ uri: item?.img }}
                />
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {currencyFormat(item.gia)}VND
                </Text>
                <Text style={{ textAlign: "center" }}>
                  {item.hangSanXuat}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  {item.heDieuHanh}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    backgroundColor: "yellow",
                    color: "white",
                    borderRadius: 100,
                  }}
                >
                  Add To Cart
                </Text>
              </View>
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
});
