import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, IconButton, useTheme, Title } from 'react-native-paper';
import { BasicCard } from '../components/Cards';
import { Deacons, deaconsSlice } from '../redux-modules/deacons';
import Form, { FieldTypes } from '../components/Form';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
	},
	list: {
		height: 500,
	},
	centeredContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
	},
	buttonRow: {
		height: 55,
		padding: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		flex: 1,
	},
});

const DeaconsList = ({ navigation }) => {
	const theme = useTheme();
	const deacons: Deacons = useSelector((state) => state.deaconsSlice);
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<Title>Deacons List</Title>
			<ScrollView
				style={styles.list}
				contentContainerStyle={styles.centeredContainer}
			>
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
			<IconButton
				style={{ alignSelf: 'flex-end' }}
				color={theme.colors.primary}
				size={42}
				icon={'plus-circle'}
				onPress={() => {
					navigation.navigate('Modal', {
						fields: [
							{
								type: FieldTypes.INPUT,
								label: 'First Name',
								name: 'firstName',
								required: true,
							},
							{
								type: FieldTypes.INPUT,
								label: 'Last Name',
								name: 'lastName',
								required: true,
							},
							{
								type: FieldTypes.INPUT,
								label: 'Phone Number',
								name: 'phoneNumber',
								required: true,
							},
							{ type: FieldTypes.INPUT, label: 'Families', name: 'families' },
							{
								type: FieldTypes.INPUT,
								label: 'Family',
								name: 'family',
								required: true,
							},
							{ type: FieldTypes.INPUT, label: 'Visits', name: 'visits' },
						],
						formName: 'Deacon',
						onSubmit(values) {
							dispatch(deaconsSlice.actions.add(values));
						},
					});
				}}
			/>
		</View>
	);
};

export default DeaconsList;
