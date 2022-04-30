import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction/ListItemDeleteAction";

export default function MessagesScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "Hello World",
      description: "hello world from sajjan",
      image:
        "https://pbs.twimg.com/profile_images/1201100080423374849/JXT8fRvQ_400x400.jpg",
    },
    {
      id: 2,
      title: "Lol World",
      description: "Lol world from sajjan",
      image: "https://avatars0.githubusercontent.com/u/49333264?s=400&v=4",
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const handleDeleteAction = (msg) => {
    setMessages(messages.filter((message) => message.id !== msg.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPressHandler={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                handleDeleteAction={() => handleDeleteAction(item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Lol World",
              description: "Lol world from sajjan",
              image:
                "https://avatars0.githubusercontent.com/u/49333264?s=400&v=4",
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
