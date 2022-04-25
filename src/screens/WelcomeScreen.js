import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

import AppButton from "../components/AppButton/AppButton";
import { colors } from "../../config/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://w0.peakpx.com/wallpaper/278/535/HD-wallpaper-eiffel-tower-black-dark-night-paris-romantic.jpg",
      }}
      style={styles.imageBackground}
      blurRadius={3}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://images-platform.99static.com/DxAWBlP9AU49ON5CqX0WOrU0JOY=/500x500/top/smart/99designs-contests-attachments/32/32330/attachment_32330320",
          }}
          style={styles.logo}
        />
        <Text style={styles.logoTitle}>Sell What you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color={colors.secondary} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  logoContainer: {
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
});
