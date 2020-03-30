import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";

import store from "./src/redux-modules/store";

import Profile from './src/screens/Profile';
import Home from "./src/screens/Home";
import DeaconsList from "./src/screens/DeaconsList";
import FamiliesList from "./src/screens/FamiliesList";
import VisitationList from "./src/screens/VisitationList";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Deacons List" component={DeaconsList} />
            <Tab.Screen name="Families List" component={FamiliesList} />
            <Tab.Screen name="Visitation List" component={VisitationList} />
          </Tab.Navigator>
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
