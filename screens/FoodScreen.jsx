import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function FoodScreen({ navigation }) {
  const restaurants = [
    { name: "Quán Bà Tám", lat: 10.7769, lon: 106.7009 },
    { name: "Bún Cá Cay", lat: 10.7802, lon: 106.6825 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách quán ăn</Text>
      {restaurants.map((r, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate("Map", { restaurant: r })}
        >
          <Text style={styles.name}>{r.name}</Text>
          <Text style={styles.link}>➡ Xem đường đi</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontWeight: "bold", fontSize: 18, marginBottom: 10 },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  name: { fontSize: 16 },
  link: { color: "blue", marginTop: 5 },
});
