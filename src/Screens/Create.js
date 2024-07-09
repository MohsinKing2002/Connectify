import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import Layout from "../Utils/Layout";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const Create = () => {
  const [image, setImage] = useState(null);
  console.log("img", image);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Layout>
      <View className="px-3 py-2">
        <View className="bg-white px-4 pt-6 pb-10 rounded-md mt-12">
          <Text className="pb-5 text-xl text-center text-txtPrimary font-bold">
            New Post
          </Text>
          <View className="pb-2">
            <Text className="pb-2 text-base text-txtPrimary font-bold">
              Caption
            </Text>
            <TextInput
              className="p-1 rounded-md border border-bgGray"
              // value={text}
              // onChangeText={(text) => setText(text)}
            />
          </View>
          <View className="py-3">
            <View className="flex flex-row items-center justify-between border-b border-bgGray pb-2">
              <Text className="text-base text-txtPrimary font-bold">
                {!image ? "Choose Picture" : "Post Preview"}
              </Text>
              {image && (
                <TouchableOpacity onPress={() => setImage(null)}>
                  <AntDesign name="closecircleo" size={20} color="gray" />
                </TouchableOpacity>
              )}
            </View>
            {!image ? (
              <TouchableOpacity
                onPress={pickImage}
                className="my-4 flex items-center justify-center mx-auto w-4/5 h-48 rounded-lg border border-bgGray"
              >
                <Feather name="upload-cloud" size={40} color="purple" />
                <Text className="pt-2 text-base text-txtPrimary font-bold">
                  Choose a Picture
                </Text>
              </TouchableOpacity>
            ) : (
              <Image
                className="my-4 w-full h-48 mx-auto rounded-md"
                source={{ uri: image }}
              />
            )}
          </View>

          <TouchableOpacity className="mt-2 w-11/12 mx-auto bg-primary p-3 rounded-md">
            <Text className="text-white text-base font-bold tracking-widest text-center">
              Upload Post
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Create;
