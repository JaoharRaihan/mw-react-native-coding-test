import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import Card from "./Card";
import Button from "./Button";
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{phase.title}</Text>
      </View>

      <DraggableFlatList
        data={cards}
        keyExtractor={(item) => item.id}
        onDragEnd={({ data }) => setCards(data)}
        renderItem={({ item, drag }) => (
          <View style={{ marginBottom: 10 }}>
            <Card card={item} onEdit={handleEditCard} onLongPress={drag} />
            <Button
              title="Remove Card"
              onPress={() => handleDeleteCard(item.id)}
            />
          </View>
        )}
      />

      <Button title={"+ Add card"} onPress={handleAddCard} />

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
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Phase;
