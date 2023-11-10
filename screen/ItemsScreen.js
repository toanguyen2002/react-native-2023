import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReduce";
import axios from "axios";
import Search from "../component/Search";
const ItemsScreen = () => {
  const [conmments, setComments] = useState([])
  const [num, setNum] = useState(0);
  const router = useRoute();
  const dispacth = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = (item) => {
    dispacth(addToCart(item));
    console.log(item);
  };
  const [numComment, setNumComment] = useState(5)
  useEffect(() => {
    const getAllcomments = async () => {
      var respone = await axios.get(`https://dummyjson.com/comments?limit=${numComment}`)
      setComments(respone.data['comments'])
    }
    getAllcomments()
  }, [numComment])
  const nav = useNavigation()
  const { width } = Dimensions.get("window");
  return (
    <ScrollView style={{ marginTop: 33 }} showsVerticalScrollIndicator={false}>


      <Search />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {router.params?.carouselImages?.map((item, index) => (
          <ImageBackground
            style={{ width, height: width }}
            source={{ uri: item }}
            key={index}
          >
            <View>
              <Pressable onPress={() => nav.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </Pressable>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                padding: 20,
                flexDirection: "row",
              }}
            >

              {router.params?.offer ? (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {router.params?.offer}
                  </Text>
                </View>
              ) : null}
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="share-social-outline" size={24} color="black" />
              </View>
            </View>

            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 230,
                marginLeft: 20,
              }}
            >
              <Ionicons name="heart-outline" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={{ padding: 8 }}>
        {router.params.title ? <Text>{router.params?.title}</Text> : null}
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <Text>price: </Text>
        <Text style={{ fontWeight: "bold" }}>{router.params?.price}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <Text>Color: </Text>
        <Text style={{ fontWeight: "bold" }}>{router.params?.color}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <Text>Size: </Text>
        <Text style={{ fontWeight: "bold" }}>{router.params?.size}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <AntDesign name="enviroment" size={24} color="black" />
        <Text style={{ fontWeight: "bold", color: "#33CCFF" }}>
          Nguyễn Văn Bảo - Phường 4 - Gò Vấp
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        <Text>Total: </Text>
        <Text style={{ fontWeight: "bold" }}>{router.params?.price}$</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#aaa",
          padding: 8,
        }}
      >
        {router.params?.stock > 0 ? (
          <Text style={{ color: "#33FF33", fontWeight: "bold" }}>Còn Hàng</Text>
        ) : (
          <Text style={{ color: "#FF0000", fontWeight: "bold" }}>Hết Hàng</Text>
        )}
      </View>
      <Pressable
        style={{
          height: 50,
          backgroundColor: "#FF6633",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10,
          marginVertical: 10,
          padding: 10,
          borderRadius: 4,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold' }}>Mua Ngay</Text>
      </Pressable>
      <Pressable
        style={{
          height: 50,
          backgroundColor: "#FF6633",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10,
          marginVertical: 10,
          padding: 10,
          borderRadius: 4,
        }}
        onPress={() => addItemToCart(router?.params)}
      >
        <Text style={{ color: "#fff", fontWeight: 'bold' }}>Thêm vào Giỏ Hàng</Text>
      </Pressable>
      {
        conmments.map((value, index) => (
          <View style={{ flex: 1, flexDirection: 'row', padding: 15, borderTopWidth: 1, borderTopColor: "#aaa" }} key={index}>
            <Image
              source={{ uri: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/371480352_318218407258643_2078001501390582422_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&ccb=1-7&_nc_sid=fe8171&_nc_ohc=gL2ENGBhzYUAX8Rhlsl&_nc_ht=scontent.fsgn5-8.fna&cb_e2o_trans=t&oh=00_AfBZSbvyQ4D3dbJ_4MU9eWDdJmTO8NUotFEZDuPoz2ehyg&oe=650F23B6' }}
              style={{ height: 50, width: 50, marginLeft: 5, marginRight: 10 }}
            />
            <View>
              <View>
                <Text>{value?.user?.username}: </Text>
              </View>
              <View>
                <Text>{value?.body}</Text>
              </View>
            </View>
          </View>
        ))
      }
      <View style={{ borderColor: '#0000FF', borderWidth: 1, padding: 5, height: 50 }}>
        <Pressable style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { setNumComment(numComment + 5); }}>
          <Text style={{ color: '#3300FF', textAlign: 'center' }}>More 5 comments <AntDesign name="arrowdown" size={17} color="blue" /> </Text>

        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({});
