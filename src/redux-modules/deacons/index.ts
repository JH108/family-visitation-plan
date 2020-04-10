import reduxToolkit, { AnyAction } from '@reduxjs/toolkit';

export interface Deacon {
	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	families: Array<string>;
	family: string;
	visits: Array<string>;
}

export type Deacons = Array<Deacon>;

export interface DeaconReducers {
	add: (deacons: Deacons, action: AnyAction) => Deacons;
}

export const deaconsSlice: reduxToolkit.Slice<Deacons> = reduxToolkit.createSlice(
	{
		name: 'deacons',
		initialState: [
			{
				id: '1234',
				firstName: 'Jesse',
				lastName: 'Hill',
				phoneNumber: '8325857911',
				families: ['123', '456'],
				family: '789',
				visits: [],
			},
			{
				id: '1233',
				firstName: 'Mark',
				lastName: 'Irvine',
				phoneNumber: '1113334444',
				families: ['bcd', '124'],
				family: '456',
				visits: [],
			},
			{
				id: '1232',
				firstName: 'Ron',
				lastName: 'Breckel',
				phoneNumber: '2221113333',
				families: ['hds', '789'],
				family: '124',
				visits: [],
			},
			{
				id: '1231',
				firstName: 'Brian',
				lastName: 'Breckel',
				phoneNumber: '3332221111',
				families: ['abc', 'efd'],
				family: '123',
				visits: [],
			},
		],
		reducers: {
			add(state, action) {
				state.push(action.payload.value);
				return state;
			},
		},
	},
);
