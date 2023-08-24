import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const ItemNewScreen = () => {
  const router = useRoute();
  const { width } = Dimensions.get("window");
  const navigate = useNavigation();
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View style={{ position: "absolute" }}></View>
      <View>
        <Image
          source={{ uri: router.params.image }}
          style={{ width, height: width, resizeMode: "contain" }}
        />
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {router.params?.title}
          </Text>
        </View>
        <View style={{ padding: 3 }}>
          <Text style={{ fontSize: 15 }}>{router.params?.description}</Text>
          <Text style={{ fontSize: 15 }}>{router.params?.content}</Text>
          <Text style={{ fontSize: 15, color: "#aaa" }}>
            {router.params?.publishedAt}
          </Text>
        </View>
      </View>
      <Pressable style={{ left: 8, top: 5 }} onPress={() => navigate.goBack()}>
        <Ionicons
          name="md-chevron-back-circle-outline"
          size={44}
          color="black"
        />
      </Pressable>
    </ScrollView>
  );
};

export default ItemNewScreen;

const styles = StyleSheet.create({});
