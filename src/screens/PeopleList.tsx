import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { peopleSlice } from '../redux-modules/people/index';
import { BasicCard } from '../components/Cards';
import { People } from '../redux-modules/people';
import { Person } from '../typescript/Person';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { FieldTypes } from '../components/Form/index';

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

const FamiliesList = ({ navigation }) => {
  const people: People = useSelector((state) => state.peopleSlice);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text>People List</Text>
      <ScrollView contentContainerStyle={styles.centeredContainer}>
        {people.map((person: Person) => {
          return (
            <BasicCard
              key={person.id}
              title={person.firstName}
              subtitle={person.lastName}
              phoneNumber={person.phoneNumber}
              list={[]}
              onPress={() => { }}
            />
          );
        })}
      </ScrollView>
      <Button onPress={() => {
        navigation.navigate('Modal', {
          fields: [
            {
              type: FieldTypes.INPUT,
              label: 'First Name',
              name: 'firstName',
              required: true,
            },
            {
              type: FieldTypes.INPUT,
              label: 'Last Name',
              name: 'lastName',
              required: true,
            },
            {
              type: FieldTypes.INPUT,
              label: 'Member Status',
              name: 'memberStatus',
              required: true,
            },
            {
              type: FieldTypes.INPUT,
              label: 'Phone Number',
              name: 'phoneNumber',
            },
            {
              type: FieldTypes.INPUT,
              label: 'Staff Type',
              name: 'staffType',
            },
            {
              type: FieldTypes.DATE,
              label: 'Birthday',
              name: 'birthday',
            },
          ],
          formName: "People",
          onSubmit(values) {
            dispatch(peopleSlice.actions.add(values));
          }
        });
      }}>Add Person</Button>
    </SafeAreaView>
  );
};

export default FamiliesList;