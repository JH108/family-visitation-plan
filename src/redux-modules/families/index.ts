import reduxToolkit, { AnyAction } from '@reduxjs/toolkit';

export interface Family {
  id: string;
  familyName: string;
  homePhone: string;
  deacon: string;
  members: Array<string>;
}

export type Families = Array<Family>;

export interface FamilyReducers {
  addFamily: (state: Families, action: AnyAction) => Families;
}

export const familiesSlice: reduxToolkit.Slice<Families> = reduxToolkit.createSlice({
  name: 'families',
  initialState: [
    {
      id: '123',
      familyName: 'Hudson',
      homePhone: '1234567890',
      deacon: 'Brain',
      members: ['John', 'Jill']
    },
    {
      id: '456',
      familyName: 'White',
      homePhone: '1234567890',
      deacon: 'Ron',
      members: ['John', 'Jill']
    },
    {
      id: '453',
      familyName: 'Wight',
      homePhone: '1234567890',
      deacon: 'Jesse',
      members: ['John', 'Jill']
    },
    {
      id: '452',
      familyName: 'Weight',
      homePhone: '1234567890',
      deacon: 'Mark',
      members: ['John', 'Jill']
    },
  ],
  reducers: {
    addFamily(state, action) {
      state.push(action.payload);
      return state;
    }
  }
});