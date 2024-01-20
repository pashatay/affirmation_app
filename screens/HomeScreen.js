import React from "react";
import { View, Button, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Affirmation of the Day"
          onPress={() => navigation.navigate("Affirmation")}
          color="#007AFF"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Gratitude Journal"
          onPress={() => navigation.navigate("Gratitude")}
          color="#007AFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 20, // Space between buttons
    width: "60%", // Button width
    borderRadius: 20, // Rounded corners
    overflow: "hidden", // Ensures the borderRadius is applied to the button
  },
});

export default HomeScreen;
