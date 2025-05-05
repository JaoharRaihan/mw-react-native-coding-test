import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import Card from "./Card";
import Button from "./Button";
import { Button as RnButton } from "react-native";
import Edit from "./Edit";

const Phase = ({ phase }) => {
  const [cards, setCards] = useState(phase.cards || []);
  const [editingCard, setEditingCard] = useState(null);
  const [editVisible, setEditVisible] = useState(false);

  const handleAddCard = () => {
    const newCard = {
      id: Date.now().toString(),
      title: "New Card",
      description: "Description",
    };
    setCards([...cards, newCard]);
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setEditVisible(true);
  };

  const handleSaveCard = (updatedCard) => {
    setCards(cards.map((c) => (c.id === updatedCard.id ? updatedCard : c)));
  };

  const handleDeleteCard = (id) => {
    Alert.alert("Delete Card", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setCards(cards.filter((c) => c.id !== id)),
      },
    ]);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{phase.title}</Text>
          <RnButton title="..." color={"#fff"} />
        </View>

        <ScrollView>
          {cards.map((card) => (
            <View key={card.id}>
              <Card card={card} onEdit={handleEditCard} />
              <Button
                title="Remove Card"
                onPress={() => handleDeleteCard(card.id)}
              />
            </View>
          ))}
          <Button title={"+ Add card"} onPress={handleAddCard} />
        </ScrollView>
      </View>

      <Edit
        visible={editVisible}
        card={editingCard}
        onClose={() => setEditVisible(false)}
        onSave={handleSaveCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Phase;
