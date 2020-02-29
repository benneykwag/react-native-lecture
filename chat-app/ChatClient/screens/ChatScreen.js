import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { GiftedChat } from "react-native-gifted-chat";
import JoinScreen from "./JoinScreen";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

ChatScreen.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam("name")
});

export default function ChatScreen({ navigation }) {
  const dispatch = useDispatch();
  const selfUser = useSelector(state => state.selfUser);
  const userId = navigation.getParam("userId");
  const conversations = useSelector(state => state.conversations);
  const messages = conversations[userId].messages;
  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        multiline={false}
        renderUsernameOnMessage
        messages={messages}
        onSend={messages => {
          dispatch({
            type: "private-message",
            data: { message: messages[0], conversationId: userId }
          });
          console.log('send msg : ', messages[0])
          dispatch({
            type: "server/private-message",
            data: { message: messages[0], conversationId: userId }
          });
        }}
        user={{
          _id: selfUser.userId
        }}
      />
    </View>
  );
}
