import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AffirmationList from "../components/AffirmationList"; // Import the AffirmationList

function AffirmationScreen() {
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    // Fetch a random affirmation from the AffirmationList
    setAffirmation(AffirmationList.getRandomAffirmation());
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{affirmation}</Text>
    </View>
  );
}

export default AffirmationScreen;
