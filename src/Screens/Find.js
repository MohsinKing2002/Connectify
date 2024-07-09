import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import Layout from "../Utils/Layout";
import { useCallback, useState } from "react";
import SuggestedUser from "../Components/SuggestedUser";
import PostCard from "../Components/PostCard";
import { users } from "../apis/users";
import { posts } from "../apis/post";
import { useFocusEffect } from "@react-navigation/native";
import { shuffleArray } from "../Utils/Helpers";
import Loader from "../Components/Loader";

const Find = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(users);
  const [postData, setPostData] = useState(posts);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      setTimeout(() => {
        //shuffle user data
        const shuffledUsers = shuffleArray(users);
        setUserData(shuffledUsers);

        //shuffle post data
        const shuffledPosts = shuffleArray(posts);
        setPostData(shuffledPosts);
        setLoading(false);
      }, 300);
    }, [])
  );
  return loading ? (
    <Loader />
  ) : (
    <Layout>
      {/************************ search for Users or postst ******************************/}
      <View className="bg-white p-2.5">
        <Text className="text-txtPrimary text-sm font-bold pb-1">
          Find User Or Post
        </Text>
        <View className="flex flex-row items-center border rounded-md border-gray-300">
          <TextInput
            className="p-1 w-[88%]"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity className="py-1.5 px-2 bg-primary rounded-tr-md rounded-br-md">
            <Feather name="search" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-4 py-2 pb-16 h-full">
          {/************************ Top searched Users ******************************/}
          <Text className="text-base font-bold tracking-wide pb-1.5 text-txtPrimary">
            Top Profiles
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {userData?.map((user) => (
              <SuggestedUser
                key={user.id}
                name={user.name}
                avatar={user.avatar}
              />
            ))}
          </ScrollView>
          {/************************ trending postst ******************************/}
          <Text className="text-base font-bold tracking-wide pb-1.5 text-txtPrimary">
            Trending Posts
          </Text>
          {postData?.slice(5, 10)?.map((post) => (
            <PostCard
              key={post.id}
              avatar={post.owner.avatar}
              name={post.owner.name}
              subtitle={post.owner.subtitle}
              link={post.owner.id}
              postImg={post.img}
              caption={post.caption}
            />
          ))}

          {/************************ search for Users or postst ******************************/}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Find;
