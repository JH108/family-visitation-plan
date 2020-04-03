import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import HomeFooter from '../components/HomeFooter/HomeFooter';

const styles = StyleSheet.create({
	full: {
		height: '100%',
		minHeight: '100%',
		flex: 1,
	},
});

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.full}>
			<View style={styles.full}>
				<Text>Home</Text>
				<HomeFooter navigation={navigation} />
			</View>
		</SafeAreaView>
	);
};

export default Home;
