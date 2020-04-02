import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
	centeredContainer: {
		height: 150,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const ProfileButton = () => {
	const counter = useSelector((state) => state.counterSlice);

	return (
		<View style={styles.centeredContainer}>
			<Text>{counter}</Text>
		</View>
	);
};

export default ProfileButton;
