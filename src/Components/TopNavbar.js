import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const TopNavbar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View className="bg-primary w-full py-2.5 px-4 flex flex-row items-center justify-between">
      <Text className="text-xl font-extrabold italic tracking-widest text-white">
        Connectify
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
        <Ionicons
          name="chatbubbles-outline"
          size={25}
          color={route.name == "Chats" ? "purple" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopNavbar;
