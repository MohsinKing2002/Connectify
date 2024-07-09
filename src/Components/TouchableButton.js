import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const TouchableButton = ({ text, link = null }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => link && navigation.navigate(link)}
      className="py-4 px-8 rounded-lg bg-primaryLight"
    >
      <Text className="font-bold text-lg tracking-widest text-white">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableButton;
