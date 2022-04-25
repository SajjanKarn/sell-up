import { StyleSheet, Image, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen({ image }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="white"
        />

        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  iconContainer: {
    paddingHorizontal: 20,
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  image: {
    width: "100%",
    height: 500,
  },
});
