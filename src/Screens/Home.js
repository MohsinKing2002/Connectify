import { View, ScrollView, Text } from "react-native";
import TopNavbar from "../Components/TopNavbar";
import Layout from "../Utils/Layout";
import PostCard from "../Components/PostCard";
import SuggestedUser from "../Components/SuggestedUser";
import { StatusBar } from "expo-status-bar";
import { posts } from "../apis/post";
import { users } from "../apis/users";
import { shuffleArray } from "../Utils/Helpers";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import Loader from "../Components/Loader";

const Home = () => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-4 py-2 pb-16 h-full">
          {/* ********************** post section ************************************ */}

          {postData?.slice(0, 5)?.map((post) => (
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
          <Text className="text-base font-bold tracking-wide pb-1.5 text-txtPrimary">
            Suggested Users
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {userData?.slice(0, 6)?.map((user) => (
              <SuggestedUser
                key={user.id}
                name={user.name}
                avatar={user.avatar}
              />
            ))}
          </ScrollView>
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
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Home;
