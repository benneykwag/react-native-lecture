import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

export default function FriendListScreen({ navigation }) {
  const usesOnline = useSelector(state => state.usersOnline);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={usesOnline}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Chat", {
                  name: item.username,
                  userId: item.userId
                })}
            >
              <View style={styles.itemContainerStyle}>
                <Image
                  style={styles.avatarImgStyle}
                  source={{ uri: item.avatar }}
                />
                <View style={styles.avatarNameViewStyle}>
                  <Text>
                    {item.username}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.userId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainerStyle: { flex: 1, flexDirection: "row", padding: 10 },
  avatarImgStyle: { width: 50, height: 50, borderRadius: 25 },
  avatarNameViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
