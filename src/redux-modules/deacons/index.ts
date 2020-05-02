import reduxToolkit, { AnyAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export interface DeaconAttributes {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	families: Array<string>;
	family: string;
	visits: Array<string>;
}

export interface Deacon extends DeaconAttributes {
	id: string;
}

export type Deacons = Array<Deacon>;

export interface DeaconReducers {
	add: (deacons: Deacons, action: AnyAction) => void;
	remove: (deacons: Deacons, action: AnyAction) => void;
}

const createDeacon = ({
	firstName,
	lastName,
	phoneNumber,
	families,
	family,
	visits,
}: DeaconAttributes): Deacon => {
	const newDeacon = {
		id: uuid(),
		firstName,
		lastName,
		phoneNumber,
		families,
		family,
		visits,
	};

	return newDeacon;
};

const initialState = [
	createDeacon({
		firstName: 'Jesse',
		lastName: 'Hill',
		phoneNumber: '8325857911',
		families: ['123', '456'],
		family: '789',
		visits: [],
	}),
	createDeacon({
		firstName: 'Mark',
		lastName: 'Irvine',
		phoneNumber: '1113334444',
		families: ['bcd', '124'],
		family: '456',
		visits: [],
	}),
	createDeacon({
		firstName: 'Ron',
		lastName: 'Breckel',
		phoneNumber: '2221113333',
		families: ['hds', '789'],
		family: '124',
		visits: [],
	}),
	createDeacon({
		firstName: 'Brian',
		lastName: 'Breckel',
		phoneNumber: '3332221111',
		families: ['abc', 'efd'],
		family: '123',
		visits: [],
	}),
];

export const deaconsSlice: reduxToolkit.Slice<Deacons> = reduxToolkit.createSlice(
	{
		name: 'deacons',
		initialState,
		reducers: {
			add(draft, action) {
				const deaconAttributes = action.payload;
				const deacon = createDeacon(deaconAttributes);

				draft.push(deacon);
			},
			remove(draft, action) {
				const id = action.payload.id;
				const removeIndex = draft.findIndex((deacon) => deacon.id === id);

				draft.splice(removeIndex, 1);
			},
		},
	},
);
