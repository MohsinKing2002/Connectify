import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Avatar, Button } from "react-native-paper";
import Img from "../../assets/banner.png";

const SuggestedUser = ({ avatar = null, name = null }) => {
  return (
    <Card
      className="flex items-center space-y-1 w-32 bg-white p-2 mb-3 mr-3 rounded-md"
      mode="contained"
    >
      <Avatar.Image
        className="mx-auto"
        size={40}
        source={avatar ? { uri: avatar } : Img}
      />
      <Text className="text-lg font-bold tracking-wide text-txtPrimary">
        {name ?? "Mohsin King"}
      </Text>
      <TouchableOpacity className="bg-primary p-2 rounded-md">
        <Text className="text-white font-bold tracking-widest uppercase text-center">
          Add
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

export default SuggestedUser;
