import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import ListingDetailScreen from "./src/screens/ListingDetailScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ListingDetailScreen
        image="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/26JwjrFmxtQt5ppMn6sxnK/b5d1f28c80406631a9c83c5ef59ebba9/ac-syndicate-heroBanner.jpg"
        price={100}
        title="Assasin's Creed Brotherhood"
      /> */}
      {/* <ViewImageScreen image="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/26JwjrFmxtQt5ppMn6sxnK/b5d1f28c80406631a9c83c5ef59ebba9/ac-syndicate-heroBanner.jpg" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fafafa",
  },
});
