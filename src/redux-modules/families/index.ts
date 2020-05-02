import reduxToolkit, { AnyAction } from '@reduxjs/toolkit';

import { Family } from '../../typescript/Family';

export type Families = Array<Family>;

export interface FamilyReducers {
  addFamily: (state: Families, action: AnyAction) => Families;
}

export const familiesSlice: reduxToolkit.Slice<Families> = reduxToolkit.createSlice({
  name: 'families',
  initialState: [
    {
      id: '126',
      deaconId: '127',
      familyName: 'Hudson',
      homePhone: '1212211212',
      members: [{
        id: '111',
        firstName: '112',
        lastName: 'Hudson',
        memberStatus: 'Member',
        staffType: 'Member',
        birthday: new Date(),
        phoneNumber: '1234556789',
      }],
    }
  ],
  reducers: {
    addFamily(state, action) {
      state.push(action.payload);
      return state;
    }
  }
});