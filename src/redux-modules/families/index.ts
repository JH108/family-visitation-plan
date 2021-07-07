import { AnyAction, Slice, createSlice } from '@reduxjs/toolkit';

import { Family } from '../../typescript/Family';
import { v4 as uuid } from 'uuid';

export type Families = Array<Family>;

export interface FamilyReducers {
  addFamily: (state: Families, action: AnyAction) => Families;
}

export const familiesSlice: Slice<Families> = createSlice({
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
    add(draft, action) {
      draft.push({ id: uuid(), ...action.payload });
    },
    remove(draft, action) {
      const id = action.payload.id;
      const removeIndex = draft.findIndex((deacon) => deacon.id === id);

      draft.splice(removeIndex, 1);
    },
  }
});