import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card/Card";
import Screen from "../components/Screen/Screen";

export default function ListingScreen() {
  const listings = [
    {
      id: 1,
      title: "Jacket",
      price: 100,
      image:
        "https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025?b=1&k=20&m=520887025&s=170667a&w=0&h=lMu3dvL31IvopWAAvyGCbejvzvDfZ16533ANoIuJFFo=",
    },
    {
      id: 2,
      title: "Nike Sneakers",
      price: 200,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a4c0b16-76cc-4655-961e-51551069d56d/court-vision-mid-shoes-DdhXk6.png",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
});
