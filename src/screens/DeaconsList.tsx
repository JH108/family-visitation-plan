import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { BasicCard } from '../components/Cards';
import { Deacons } from '../redux-modules/deacons';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
	centeredContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
	},
});

const DeaconsList = ({ navigation }) => {
	const deacons: Deacons = useSelector((state) => state.deaconsSlice);

	return (
		<SafeAreaView>
			<Text>Deacons Lists</Text>
			<ScrollView contentContainerStyle={styles.centeredContainer}>
				{deacons.map((deacon) => {
					return (
						<BasicCard
							key={deacon.id}
							title={deacon.firstName}
							subtitle={deacon.lastName}
							families={deacon.families}
							phoneNumber={deacon.phoneNumber}
						/>
					);
				})}
			</ScrollView>
		</SafeAreaView>
	);
};

export default DeaconsList;
