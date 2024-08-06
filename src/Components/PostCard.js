import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";
import { Button, Card } from "react-native-paper";
import UserCard from "./UserCard";

const PostCard = ({
  postImg = null,
  caption = null,
  avatar = null,
  name = null,
  subtitle = null,
  onPress,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <Card className="bg-white p-2 mb-3 rounded-md" mode="contained">
      {/******************** user section ******************************/}
      <View className="flex flex-row items-center justify-between">
        <UserCard
          avatar={avatar}
          name={name}
          subtitle={subtitle}
          onPress={onPress}
        />
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={18} color="purple" />
        </TouchableOpacity>
      </View>
      {/******************** post caption ******************************/}
      <View className="py-1.5">
        <Text className="text-sm text-txtPrimary text-justify">
          {caption ?? "Avatars are used to show people in a graphical way."}
        </Text>
      </View>
      <Card.Cover
        className="rounded-md"
        source={{ uri: postImg ?? "https://picsum.photos/700" }}
      />
      {/******************** like comment handler ******************************/}
      <View className="flex items-center flex-row justify-between pt-2 px-3">
        <View className="flex flex-row items-center w-1/3 justify-between">
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <AntDesign name="heart" size={24} color="#8972d9" />
            ) : (
              <AntDesign name="hearto" size={24} color="purple" />
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name="commenting-o" size={24} color="purple" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => setIsBookmarked(!isBookmarked)}>
          {isBookmarked ? (
            <FontAwesome name="bookmark" size={24} color="#8972d9" />
          ) : (
            <FontAwesome name="bookmark-o" size={24} color="purple" />
          )}
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default PostCard;
