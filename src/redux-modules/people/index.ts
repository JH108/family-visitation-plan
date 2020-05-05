import { AnyAction, Slice, createSlice } from '@reduxjs/toolkit';
import { Person } from '../../typescript/Person';

export type People = Array<Person>;

export const peopleSlice: Slice<People> = createSlice({
  name: 'people',
  initialState: [
    {
      id: '111',
      firstName: '112',
      lastName: 'Hudson',
      memberStatus: 'Member',
      staffType: 'Member',
      birthday: new Date(),
      phoneNumber: '1234556789',
    }
  ],
  reducers: {
    addPerson(state, action) {
      return state;
    }
  }
});