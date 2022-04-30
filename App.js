import { View } from "react-native";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import ListingDetailScreen from "./src/screens/ListingDetailScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import MessagesScreen from "./src/screens/MessagesScreen";

import Icon from "./src/components/Icon/Icon";
import Screen from "./src/components/Screen/Screen";
import ListItem from "./src/components/ListItem/ListItem";
import AccountScreen from "./src/screens/AccountScreen";
import ListingScreen from "./src/screens/ListingScreen";
import AppTextInput from "./src/components/AppTextInput/AppTextInput";

export default function App() {
  return (
    <Screen>
      {/* <WelcomeScreen /> */}
      {/* <ListingDetailScreen
        image="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/26JwjrFmxtQt5ppMn6sxnK/b5d1f28c80406631a9c83c5ef59ebba9/ac-syndicate-heroBanner.jpg"
        price={100}
        title="Assasin's Creed Brotherhood"
      /> */}
      {/* <ViewImageScreen image="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/26JwjrFmxtQt5ppMn6sxnK/b5d1f28c80406631a9c83c5ef59ebba9/ac-syndicate-heroBanner.jpg" /> */}
      {/* <MessagesScreen /> */}
      {/* <AccountScreen /> */}
      <AppTextInput icon="email" placeholder="Enter Email" />
    </Screen>
  );
}
