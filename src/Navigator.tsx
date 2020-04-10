import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import Profile from './screens/Profile';
import Home from './screens/Home';

const Stack = createStackNavigator();

const Navigator = () => {
	const theme = useTheme();

	return (
		<Stack.Navigator
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
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

export default Navigator;
