import { AnyAction, Slice, createSlice } from '@reduxjs/toolkit';
import { Person } from '../../typescript/Person';
import { v4 as uuid } from 'uuid';

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
    add(draft: People, action: AnyAction) {
      draft.push({ id: uuid(), ...action.payload });
      return draft;
    },
    remove(draft, action) {
      const id = action.payload.id;
      const removeIndex = draft.findIndex((person) => person.id === id);

      draft.splice(removeIndex, 1);
    },
  }
});