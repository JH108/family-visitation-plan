import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import Profile from './screens/Profile';
import Home from './screens/Home';
import ModalScreen from './screens/Modal';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
	const theme = useTheme();
	return (
		<MainStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.colors.backdrop,
				},
				headerTintColor: theme.colors.text,
				headerTitleStyle: {
					fontWeight: 'bold',
					color: theme.colors.text,
				},
			}}
		>
			<MainStack.Screen name="Home" component={Home} />
			<MainStack.Screen name="Profile" component={Profile} />
		</MainStack.Navigator>
	);
};

const Navigator = () => {
	return (
		<RootStack.Navigator initialRouteName="Main" mode={'modal'}>
			<RootStack.Screen
				name="Main"
				component={MainStackScreen}
				options={{ headerShown: false }}
			/>
			<RootStack.Screen
				name="Modal"
				component={ModalScreen}
				options={{ headerShown: false }}
			/>
		</RootStack.Navigator>
	);
};

export default Navigator;
