import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "black",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
});
