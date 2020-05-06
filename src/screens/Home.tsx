import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeFooter from '../components/HomeFooter/HomeFooter';
import DeaconsList from './DeaconsList';
import FamiliesList from './FamiliesList';
import VisitationList from './VisitationList';
import PeopleList from './PeopleList';

const Tab = createMaterialTopTabNavigator();

const Home = ({ }) => {
	return (
		<Tab.Navigator
			initialRouteName="Deacons List"
			tabBarPosition={'bottom'}
			backBehavior={'history'}
			tabBar={({ navigation, state, descriptors }) => (
				<HomeFooter
					navigation={navigation}
					state={state}
					descriptors={descriptors}
				/>
			)}
		>
			<Tab.Screen name="Deacons List" component={DeaconsList} />
			<Tab.Screen name="Visitation List" component={VisitationList} />
			<Tab.Screen name="Families List" component={FamiliesList} />
			<Tab.Screen name="People List" component={PeopleList} />
		</Tab.Navigator>
	);
};

export default Home;
