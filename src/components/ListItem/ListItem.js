import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../../config/colors";

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subTitle: {
    marginVertical: 5,
    fontSize: 15,
    color: colors.gray,
  },
});
