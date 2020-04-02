import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from 'react-native';

import { ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";

import store from "./src/redux-modules/store";

import Profile from './src/screens/Profile';
import Home from "./src/screens/Home";
import DeaconsList from "./src/screens/DeaconsList";
import FamiliesList from "./src/screens/FamiliesList";
import VisitationList from "./src/screens/VisitationList";
import ProfileButton from "./src/components/ProfileButton";

const styles = StyleSheet.create({
  ProfileButtonTitle: {
    display: "none"
  },
  ProfileButton: {
    height: 10,
  }
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"

          >
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen
              name="ProfileButton"
              component={ProfileButton}
              options={{
                headerTransparent: true,
                headerTitleStyle: styles.ProfileButtonTitle,
              }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Deacons List" component={DeaconsList} />
            <Stack.Screen name="Families List" component={FamiliesList} />
            <Stack.Screen name="Visitation List" component={VisitationList} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
