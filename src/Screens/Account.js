import { View, Text, Image, ScrollView } from "react-native";
import Layout from "../Utils/Layout";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import Banner from "../../assets/banner.png";
import Loader from "../Components/Loader";
import { useCallback, useState } from "react";
import { posts } from "../apis/post";
import { useFocusEffect } from "@react-navigation/native";
import { shuffleArray } from "../Utils/Helpers";
import PostCard from "../Components/PostCard";
const avatar =
  "https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg";

const CountBox = ({ type, cnt, styles }) => {
  return (
    <View className={`flex items-center ${styles}`}>
      <Text className="text-lg font-bold tracking-wider text-txtPrimary">
        {cnt}
      </Text>
      <Text className="text-sm font-bold tracking-wider text-txtGray">
        {type}
      </Text>
    </View>
  );
};

const Account = () => {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState(posts);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      setTimeout(() => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-3 py-2 pb-16 h-full">
          {/****************** user avatar and account data *******************/}
          <View className="bg-white rounded-md flex items-center flex-row">
            <Image
              className="h-32 w-28 rounded-tl-md rounded-bl-md"
              source={{
                uri: avatar,
              }}
            />
            <View className="pl-4">
              <View>
                <Text className="text-2xl font-bold tracking-wider text-txtPrimary">
                  {"Mohsin King"}
                </Text>
                <Text className="text-sm tracking-wider text-txtGray">
                  {"Kolkata, India"}
                </Text>
              </View>
              <View className="pt-3.5 flex flex-row items-center justify-between">
                <CountBox cnt={"1000"} type={"Posts"} styles={"pr-3"} />
                <CountBox cnt={"22.3M"} type={"Followers"} styles={"pr-3"} />
                <CountBox cnt={"30.3K"} type={"Followings"} />
              </View>
            </View>
          </View>
          {/************************ trending postst ******************************/}
          <Text className="text-base font-bold tracking-wide py-1.5 text-txtPrimary">
            My Posts
          </Text>
          {postData?.map((post) => (
            <PostCard
              key={post.id}
              avatar={avatar}
              name={"Mohsin King"}
              subtitle={"Kolkata, India"}
              postImg={post.img}
              caption={post.caption}
            />
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Account;
