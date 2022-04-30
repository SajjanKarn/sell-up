import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItemDeleteAction({ handleDeleteAction }) {
  return (
    <View style={styles.deleteAction}>
      <MaterialCommunityIcons
        name="trash-can"
        size={35}
        color={colors.white}
        onPress={handleDeleteAction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  deleteAction: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});
