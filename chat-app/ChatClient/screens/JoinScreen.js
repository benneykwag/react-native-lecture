import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { useDispatch } from "react-redux";

export default function JoinScreen({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ height: 300 }}>
        <Image
          resizeMode="contain"
          style={{ flex: 1 }}
          source={require("../assets/chat-icon.png")}
        />
        <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          placeholder="이름을 입력하세요."
        />
        <Button
          title="Join Chat"
          onPress={() => {
            dispatch({ type: "server/join", data: username });
            navigation.navigate('App')
          }}
        />
      </View>
      {Platform.OS === "ios" &&
        <KeyboardAvoidingView style={{ padding: 50 }} behavior="padding" />}
    </View>
  );
}
