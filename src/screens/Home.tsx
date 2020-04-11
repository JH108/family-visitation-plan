import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFooter from '../components/HomeFooter/HomeFooter';
import DeaconsList from './DeaconsList';
import FamiliesList from './FamiliesList';
import VisitationList from './VisitationList';

const Tab = createBottomTabNavigator();

const Home = ({}) => {
	return (
		<Tab.Navigator
			initialRouteName="Deacons List"
			tabBar={({ navigation, state, descriptors }) => (
				<HomeFooter
					navigation={navigation}
					state={state}
					descriptors={descriptors}
				/>
			)}
		>
			<Tab.Screen name="Deacons List" component={DeaconsList} />
			<Tab.Screen name="Families List" component={FamiliesList} />
			<Tab.Screen name="Visitation List" component={VisitationList} />
		</Tab.Navigator>
	);
};

export default Home;
