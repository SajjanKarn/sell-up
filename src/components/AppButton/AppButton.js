import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../config/colors";

export default function AppButton({ title = "Click Me", color = "#ff6b6b" }) {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonContainer, backgroundColor: color }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
