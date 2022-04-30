import { StyleSheet, Text, View, FlatList } from "react-native";

import { colors } from "../../config/colors";

import Icon from "../components/Icon/Icon";
import ListItem from "../components/ListItem/ListItem";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import Screen from "../components/Screen/Screen";

export default function AccountScreen() {
  const listings = [
    {
      title: "My Listings",
      icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
    },
    {
      title: "My Messages",
      icon: { name: "email", backgroundColor: colors.secondary },
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image="https://i0.wp.com/i.pinimg.com/474x/e5/0f/80/e50f80dd0879a87f28206fd915790d30.jpg"
          title="Sajjan Karna"
          subTitle="karnaa787@gmail.com"
        />
      </View>
      <View>
        <FlatList
          data={listings}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: colors.light,
  },
  container: {
    marginVertical: 10,
  },
});
