import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
	centeredContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const ProfileButton = ({ navigation }) => {
	const counter = useSelector((state) => state.counterSlice);

	return (
		<View style={styles.centeredContainer}>
			<Avatar
				size="small"
				rounded
				icon={{ name: 'user', type: 'font-awesome' }}
				onPress={() => navigation.push('Profile')}
				activeOpacity={0.7}
			/>
		</View>
	);
};

export default ProfileButton;
