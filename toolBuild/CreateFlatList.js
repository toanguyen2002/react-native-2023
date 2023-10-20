import {
  ActivityIndicator,
  FlatList,
  Image,
  LogBox,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const CreateFlatList = () => {
  const navigator = useNavigation();
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
  const [users, setUsers] = useState([]);
  const [Currentpage, setCurrentPage] = useState(5);
  useEffect(() => {
    const getUsers = async () => {
      const respone = await axios.get(
        `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fb4a9174ceae4a0a91d3d3919df8f538&pageSize=${Currentpage}`
      );

      setUsers(respone.data.articles);
      console.log(users);
    };
    getUsers();
  }, [Currentpage]);
  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() =>
          navigator.navigate("ItemNewScreen", {
            author: item.author,
            title: item.title,
            description: item.description,
            content: item.content,
            publishedAt: item.publishedAt,
            image: item.urlToImage,
          })
        }
      >
        <View
          style={{
            flexDirection: "row",
            borderTopColor: "#aaa",
            borderWidth: 1,
            height: 150,
          }}
        >
          <View>
            <Image
              style={{
                width: 150,
                height: 150,
                resizeMode: "contain",
                borderColor: "#fff",
              }}
              source={{ uri: item?.urlToImage }}
            />
          </View>
          <ScrollView style={{ marginLeft: 15 }}>
            <Text numberOfLines={2} style={{ fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text
              numberOfLines={3}
              style={{ fontSize: 13, width: 200, color: "#aaa" }}
            >
              {item?.description}
            </Text>
          </ScrollView>
        </View>
      </Pressable>
    );
  };
  const loadder = () => {
    return (
      <View>
        <ActivityIndicator style={styles.loadder} size="small" color="#aaa" />
      </View>
    );
  };
  const loadMoreItem = () => {
    setCurrentPage(Currentpage + 4);
  };
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      ListFooterComponent={loadder}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0}
    />
  );
};
export default CreateFlatList;

const styles = StyleSheet.create({
  loadder: {
    marginVertical: 16,
    alignItems: "center",
  },
});
