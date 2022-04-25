import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../../config/colors";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>${subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subTitle: {
    color: colors.secondary,
  },
});
