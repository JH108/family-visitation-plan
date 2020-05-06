import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, useTheme, Title } from 'react-native-paper';
import { BasicCard } from '../components/Cards';
import { Deacons, deaconsSlice } from '../redux-modules/deacons';
import { FieldTypes } from '../components/Form';
import { Person } from '../typescript/Person';
import { People } from '../redux-modules/people';

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
	const people: People = useSelector((state) => state.peopleSlice);
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<Title>Deacons List</Title>
			<ScrollView
				style={styles.list}
				contentContainerStyle={styles.centeredContainer}
			>
				{deacons.map((deacon) => {
					const person: Person = people.reduce((acc, curr) => {
						if (curr.id === deacon.personId) {
							return curr;
						}
						return acc;
					});
					return (
						<BasicCard
							key={deacon.id}
							title={person.firstName}
							subtitle={person.lastName}
							families={deacon.families}
							phoneNumber={person.phoneNumber}
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
								type: FieldTypes.DROPDOWN,
								label: 'Family',
								name: 'family',
								// required: true,
							},
							{
								type: FieldTypes.DROPDOWN,
								label: 'Person',
								name: 'person',
								// required: true,
							},
							{ type: FieldTypes.INPUT, label: 'Families', name: 'families' },
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
