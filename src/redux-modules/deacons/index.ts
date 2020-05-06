import { AnyAction, createSlice, Slice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

// export interface DeaconAttributes {
// 	firstName: string;
// 	lastName: string;
// 	phoneNumber: string;
// 	families: Array<string>;
// 	family: string;
// 	visits: Array<string>;
// }

// export interface Deacon extends DeaconAttributes {
// 	id: string;
// }

import { Deacon } from '../../typescript/Deacon';

export type Deacons = Array<Deacon>;

export interface DeaconReducers {
	add: (deacons: Deacons, action: AnyAction) => void;
	remove: (deacons: Deacons, action: AnyAction) => void;
}

const createDeacon = ({
	families,
	visits,
	personId,
	familyId,
}): Deacon => {
	const newDeacon = {
		id: uuid(),
		families,
		visits,
		personId,
		familyId,
	};

	return newDeacon;
};

const initialState = [
	createDeacon({
		personId: 'ddc9e70c-490d-4f1c-968f-c757d7cc339c',
		familyId: '789',
		families: ['123', '456'],
		visits: [],
	}),
	// createDeacon({
	// 	firstName: 'Mark',
	// 	lastName: 'Irvine',
	// 	phoneNumber: '1113334444',
	// 	families: ['bcd', '124'],
	// 	family: '456',
	// 	visits: [],
	// }),
	// createDeacon({
	// 	firstName: 'Ron',
	// 	lastName: 'Breckel',
	// 	phoneNumber: '2221113333',
	// 	families: ['hds', '789'],
	// 	family: '124',
	// 	visits: [],
	// }),
	// createDeacon({
	// 	firstName: 'Brian',
	// 	lastName: 'Breckel',
	// 	phoneNumber: '3332221111',
	// 	families: ['abc', 'efd'],
	// 	family: '123',
	// 	visits: [],
	// }),
];

export const deaconsSlice: Slice<Deacons> = createSlice(
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
