import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";
import store from "./src/redux-modules/store";
import ProfileButton from "./src/components/ProfileButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Provider store={store}>
          <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button title={"Hey!"} />
            <ProfileButton />
          </View>
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
