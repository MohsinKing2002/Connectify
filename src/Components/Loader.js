import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Loader = () => {
  return (
    <View className="flex-1 items-center justify-center bg-bgGray">
      <ActivityIndicator size={"large"} animating={true} color={"purple"} />
    </View>
  );
};

export default Loader;
