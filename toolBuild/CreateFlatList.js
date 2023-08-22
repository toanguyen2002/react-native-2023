import {
  ActivityIndicator,
  FlatList,
  Image,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateFlatList = () => {
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
        `https://fakenews.squirro.com/news/sport?count=${Currentpage}`
      );

      setUsers(respone.data.news);
      console.log(users);
    };
    getUsers();
  }, [Currentpage]);
  const renderItem = ({ item }) => {
    return (
      <View
        style={{ flexDirection: "column", borderTopColor: "#aaa", borderWidth: 1 ,height:100}}
      >
        <View>
          <Text style={{ fontWeight: "bold",fontSize:17 }}>{item.headline}: </Text>
          <Text numberOfLines={2} >
            {item.abstract}
          </Text>
          <Text numberOfLines={1}>author: {item?.author}</Text>
        </View>     
      </View>
    );
  };
  const loadder = () => {
    return (
      <View>
        <ActivityIndicator style={styles.loadder} size="lager" color="#aaa" />
      </View>
    );
  };
  const loadMoreItem = () => {
    setCurrentPage(Currentpage + 10);
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
