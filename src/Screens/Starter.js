import React from "react";
import { View, Text, Image } from "react-native";
import Banner from "../../assets/banner-1.webp";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../Components/TouchableButton";

const Starter = () => {
  const navigation = useNavigation();

  return (
    <View className="h-full bg-primary flex space-y-8 items-center justify-center">
      <Image
        className="w-72 h-72 rounded-lg"
        source={Banner}
        alt="banner image"
      />
      <Text className="text-4xl font-bold tracking-widest text-brand">
        Connectify
      </Text>
      <Text className="mb-8 px-8 text-justify text-lg font-bold tracking-widest text-brand">
        The Best Social App To Connect With Your Friends. Also Discover
        meanigful connections.
      </Text>

      <TouchableButton link={"Home"} text={"Get Started"} />
    </View>
  );
};
export default Starter;
