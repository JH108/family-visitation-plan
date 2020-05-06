import { AnyAction, Slice, createSlice } from '@reduxjs/toolkit';

import { Visit } from '../../typescript/Visit';

export type Visits = Array<Visit>;


export const visitsSlice: Slice<Visits> = createSlice({
  name: 'families',
  initialState: [
    {
      id: '123',
      deaconId: '125',
      familyId: '124',
      date: new Date(),
      reason: 'Hudson',
      notes: '1234567890',
      typeOfVisit: 'asdf'
    },
  ],
  reducers: {
    addVisit(state, action) {
      return state;
    }
  }
});