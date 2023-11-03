import {
  ActivityIndicator,
  Dimensions,
  // DrawerLayoutAndroid,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";


import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReduce";
import ModalProduct from "../toolBuild/ModalProduct";
import Search from "../component/Search";
import Location from "../component/Location";
import ListCategories from "../component/ListCategories";
import Banner from "../component/Banner";
import Deals from "../component/Deals";
import ListProduct from "../component/ListProduct";
import Layoutbanner from "../component/Layoutbanner";
import { useState } from "react";
const HomeSCreen = () => {


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
  const [value, setValue] = useState()
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} horizontal={false} >
      <Search setValue={setValue} />
      <Location />
      <ListCategories />
      <Banner />
      <Layoutbanner />
      <Deals />
      <ListProduct value={value} />
    </ScrollView>
  );
};

export default HomeSCreen;

