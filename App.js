import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import uuid from "react-native-uuid";
import Header from "./assets/components/Header";
import ListItem from "./assets/components/ListItem";

export default function App() {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: "Milk" },
    { id: uuid.v4(), text: "Eggs" },
    { id: uuid.v4(), text: "Bread" },
    { id: uuid.v4(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
