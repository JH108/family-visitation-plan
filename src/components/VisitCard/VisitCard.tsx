import React, { useState, FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, Button, withTheme, Theme } from 'react-native-elements';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		margin: 5,
	},
});

export interface VisitCardProps {
	theme: Theme;
}

const VisitCard: FunctionComponent<VisitCardProps> = ({ theme }) => {
	return (
		<Card
			title="Hello"
			dividerStyle={{ height: 2, backgroundColor: theme.colors.grey4 }}
		>
			<Text style={styles.text}>Yes!</Text>
			<Button title="Edit Visit" />
		</Card>
	);
};

export default withTheme(VisitCard);
