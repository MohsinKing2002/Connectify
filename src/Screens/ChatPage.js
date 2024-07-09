import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import { useCallback, useState } from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Loader from "../Components/Loader";
import { Messages } from "../apis/messages";
import moment from "moment";

const ChatPage = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const data = route?.params?.data;

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, [])
  );

  return loading ? (
    <Loader />
  ) : (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View className="bg-primary w-full py-2.5 px-4 flex flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={"white"} />
        </TouchableOpacity>
        <Text className="pl-3 text-xl font-extrabold tracking-widest text-white">
          {data?.name}
        </Text>
      </View>

      <View className="bg-white p-2.5">
        <FlatList
          data={Messages}
          className="h-[80vh]"
          renderItem={({ item }) => (
            <View
              key={item.id}
              className={`my-2 flex w-full ${
                item.author === "me" ? "items-end" : "items-start"
              }`}
            >
              <View
                className={`${
                  item.author === "me"
                    ? "bg-sky-100 text-start"
                    : "bg-yellow-100"
                } max-w-[90%] text-label rounded-lg pt-2 pb-0.5 px-4 inline-block`}
              >
                <Text className="break-words">{item.body}</Text>
                <Text className="pt-0.5 text-[11px] font-semibold text-txtGray">
                  {moment().format("hh:mm a, DD MMM")}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View className="bg-white p-2.5 pb-8">
        <View className="flex flex-row items-center border rounded-md border-gray-300">
          <TextInput
            className="p-2 w-[88%]"
            // value={text}
            // onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity className="py-2.5 px-2 bg-primary rounded-tr-md rounded-br-md">
            <FontAwesome name="telegram" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatPage;
