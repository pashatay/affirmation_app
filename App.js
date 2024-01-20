import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AffirmationScreen from "./screens/AffirmationScreen";
import GratitudeScreen from "./screens/GratitudeScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Affirmation" component={AffirmationScreen} />
        <Stack.Screen name="Gratitude" component={GratitudeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
