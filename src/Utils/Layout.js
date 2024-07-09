import React from "react";
import { View, SafeAreaView } from "react-native";
import MenuBar from "../Components/Menu";
import TopNavbar from "../Components/TopNavbar";
const Layout = ({ children }) => {
  return (
    <SafeAreaView>
      <View className="h-full bg-bgGray pt-9">
        <TopNavbar />
        {children}

        <MenuBar />
      </View>
    </SafeAreaView>
  );
};

export default Layout;
