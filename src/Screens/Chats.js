import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useCallback, useEffect, useState } from "react";
import Layout from "../Utils/Layout";
import UserCard from "../Components/UserCard";
import { useFocusEffect } from "@react-navigation/native";
import { users } from "../apis/users";
import { shuffleArray } from "../Utils/Helpers";
import Loader from "../Components/Loader";

const Chats = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(users);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      setTimeout(() => {
        //shuffle user data
        const shuffledUsers = shuffleArray(users);
        setUserData(shuffledUsers);
        setLoading(false);
      }, 300);
    }, [])
  );

  return loading ? (
    <Loader />
  ) : (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-3 py-2 pb-16 h-full">
          <View className="bg-white rounded-md p-2.5">
            <Text className="text-base font-bold tracking-wide pb-1.5 text-txtPrimary">
              Messages
            </Text>
            {userData.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                avatar={user.avatar}
                subtitle={`Active ${user.id + 5}m ago`}
                styles={"mb-[13px]"}
                onPress={() => navigation.navigate("ChatPage", { data: user })}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Chats;
