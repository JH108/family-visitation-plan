import { Person } from './Person';

export interface Family {
  id: string;
  deaconId: string;
  familyName: string;
  homePhone: string;
  members: Array<Person>;
}