import React, { FunctionComponent, useReducer } from 'react';
import { View } from 'react-native';
import {
	Button,
	Title,
	TextInput,
	HelperText,
	useTheme,
} from 'react-native-paper';
import { PayloadAction } from '@reduxjs/toolkit';

enum FieldTypes {
	INPUT = 'input',
	DATE = 'date',
	DROPDOWN = 'dropdown',
}

type FieldData = {
	label: string;
	key: string;
	value: string;
};

type Field = {
	name: string;
	label: string;
	type: FieldTypes;
	data?: Array<FieldData>;
	required: boolean;
};

interface Values {
	[k: string]: any;
}

export interface FormProps {
	fields: Array<Field>;
	formName: string;
	onSubmit: (values: Values) => void;
}

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

const Form: FunctionComponent<FormProps> = ({ fields, onSubmit, formName }) => {
	const theme = useTheme();
	const initialState = fields.map((field) => ({ [field.name]: null }));
	const [values, dispatch] = useReducer(formReducer, initialState);
	const submit = () => {
		if (
			!fields.every((field) => {
				if (field.required) {
					return !!values[field.name];
				}
				return true;
			})
		) {
			// Run toast saying missing data
			// Don't submit the data
			return false;
		}
		onSubmit(values);
	};

	return (
		<View>
			<Title>{`${formName} Form`}</Title>
			{fields.map((field) => {
				const fieldValue = values[field.name];

				return (
					<View>
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
			<Button onPress={submit}>Submit</Button>
		</View>
	);
};

export default Form;
