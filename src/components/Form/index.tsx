import React, { FunctionComponent, useReducer } from 'react';
import {
	View,
	ScrollView,
	KeyboardAvoidingView,
	StyleSheet,
	Dimensions,
} from 'react-native';
import {
	Button,
	Title,
	TextInput,
	HelperText,
	useTheme,
} from 'react-native-paper';
import { PayloadAction } from '@reduxjs/toolkit';

export enum FieldTypes {
	INPUT = 'input',
	DATE = 'date',
	DROPDOWN = 'dropdown',
}

export type FieldData = {
	label: string;
	key: string;
	value: string;
};

export type Field = {
	name: string;
	label: string;
	type: FieldTypes;
	data?: Array<FieldData>;
	required?: boolean;
};

export interface Values {
	[k: string]: any;
}

export interface FormProps {
	fields: Array<Field>;
	formName: string;
	onSubmit: (values: Values) => void;
	onDismiss: () => void;
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	button: {
		marginTop: 15,
		padding: 10,
	},
});

const formReducer = (
	state: Values,
	action: PayloadAction<{ key: string; value: any }>,
) => {
	const newState = { ...state };

	switch (action.type) {
		case 'UPDATE':
			newState[action?.payload?.key] = action?.payload?.value;
			break;
	}

	return newState;
};

const Form: FunctionComponent<FormProps> = ({
	fields,
	onSubmit,
	formName,
	onDismiss,
}) => {
	const theme = useTheme();
	const initialState = fields.map((field) => ({ [field.name]: null }));
	const [values, dispatch] = useReducer(formReducer, initialState);
	const width = Dimensions.get('window').width;
	const submit = () => {
		const condition = fields.some((field) => {
			if (field.required) {
				return !values[field.name];
			}
			return false;
		});

		if (condition) {
			// Run toast saying missing data
			// Don't submit the data
			return false;
		}
		onSubmit(values);
		onDismiss();
	};

	return (
		<KeyboardAvoidingView
			style={{
				...styles.container,
				width,
				backgroundColor: theme.colors.background,
			}}
		>
			<Title>{`${formName} Form`}</Title>
			<ScrollView>
				{fields.map((field) => {
					const fieldValue = values[field.name];

					return (
						<View key={field.name}>
							<TextInput
								mode={'outlined'}
								label={field.label}
								value={fieldValue}
								onChangeText={(text) =>
									dispatch({
										payload: { key: field.name, value: text },
										type: 'UPDATE',
									})
								}
							/>
							{field.required && !fieldValue && (
								<HelperText style={{ color: theme.colors.error }}>
									This field is required!
								</HelperText>
							)}
						</View>
					);
				})}
			</ScrollView>
			<Button style={styles.button} mode={'contained'} onPress={submit}>
				Submit
			</Button>
		</KeyboardAvoidingView>
	);
};

export default Form;
