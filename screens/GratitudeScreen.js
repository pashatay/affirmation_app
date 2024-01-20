import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";

function GratitudeScreen() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    const newItem = {
      id: Date.now().toString(),
      text: input,
      date: new Date().toLocaleDateString(),
    };
    setList([...list, newItem]);
    setInput("");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
        }}
        onChangeText={setInput}
        value={input}
        placeholder="What are you grateful for?"
      />
      <Button title="Submit" onPress={handleSubmit} />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default GratitudeScreen;
