import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
	bottom: {
		justifyContent: 'space-evenly',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
});

const Home = ({ navigation }) => {
	return (
		<Appbar style={styles.bottom}>
			<Appbar.Action
				icon="chart-timeline"
				onPress={() => navigation.push('Visitation List')}
			/>
			<Appbar.Action
				icon="account-details"
				onPress={() => navigation.push('Deacons List')}
			/>
			<Appbar.Action
				icon="account-group"
				onPress={() => navigation.push('Families List')}
			/>
		</Appbar>
	);
};

export default Home;
