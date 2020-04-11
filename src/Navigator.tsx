import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Profile from './screens/Profile';
import Home from './screens/Home';
import DeaconsList from './screens/DeaconsList';
import FamiliesList from './screens/FamiliesList';
import VisitationList from './screens/VisitationList';
import ProfileButton from './components/ProfileButton';

const styles = StyleSheet.create({
	ProfileButtonTitle: {
		display: 'none',
	},
	ProfileButton: {
		height: 10,
	},
});

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
	);
};

export default Navigator;
