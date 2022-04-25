import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { colors } from "../../config/colors";
import ListItem from "../components/ListItem/ListItem";

export default function ListingDetailScreen({
  image,
  title = "Lol",
  price = "100",
}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>

        <View style={styles.userContainer}>
          <ListItem
            image="https://pbs.twimg.com/profile_images/1201100080423374849/JXT8fRvQ_400x400.jpg"
            title="Sajjan Karna"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 5,
  },
  price: {
    color: colors.secondary,
    fontSize: 18,
  },
  userContainer: {
    marginTop: 40,
  },
});
