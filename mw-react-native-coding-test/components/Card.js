import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Card = ({ card, onEdit, onLongPress }) => {
  return (
    <Pressable onLongPress={onLongPress} onPress={() => onEdit(card)}>
      <View style={styles.container}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.description}>{card.description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 12,
  },
});

export default Card;
