import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import Img from "../../assets/banner.png";
import { useNavigation } from "@react-navigation/native";

const UserCard = ({
  avatar = null,
  name = null,
  subtitle = null,
  link = null,
  styles = null,
  data = null,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => link && navigation.navigate(link, { data })}
      className={`flex flex-row items-center ${styles}`}
    >
      <Avatar.Image size={40} source={avatar ? { uri: avatar } : Img} />
      <View className="pl-3">
        <Text className="text-xl font-bold tracking-wider text-txtPrimary">
          {name ?? "Mohsin King"}
        </Text>
        <Text className="text-sm tracking-wider text-txtGray">
          {subtitle ?? "India"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
