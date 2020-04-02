import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons'
import { withTheme } from 'react-native-elements';

const styles = StyleSheet.create({
	button: {
		height: 95,
		width: 95,
	},
});

const ProfileButton = ({ theme }) => {
	return (
		<View>
			<Button
				title="Add"
				background={{ type: 'RippleAndroid', borderless: true }}
				style={styles.button}
			/>
			<View>
				<Icon
					onPress={() => Alert.alert('Hey')}
					name={'add'}
					color={theme.colors.primary}
					size={75}
				/>
				<Icon
					onPress={() => Alert.alert('Hey')}
					name={'add-circle'}
					// color={theme.colors.primary}
					size={75}
				/>
			</View>
		</View>
	);
};

export default withTheme(ProfileButton);
