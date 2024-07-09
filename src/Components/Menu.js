import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Navbar = () => {
  const iconColor = "#9b87e0";
  const activeIconColor = "purple";
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View className="absolute bottom-4 left-4 bg-white flex flex-row items-center justify-around p-1.5 w-11/12 rounded-lg shadow">
      <TouchableOpacity
        className="p-2"
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons
          name="home-outline"
          size={28}
          color={route.name == "Home" ? activeIconColor : iconColor}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Find")}>
        <AntDesign
          name="find"
          size={30}
          color={route.name == "Find" ? activeIconColor : iconColor}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Ionicons
          name="add-circle-outline"
          size={35}
          color={route.name == "Create" ? activeIconColor : iconColor}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <AntDesign
          name="user"
          size={30}
          color={route.name == "Account" ? activeIconColor : iconColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
