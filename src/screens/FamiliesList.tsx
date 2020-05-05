import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { BasicCard } from '../components/Cards';
import { Families } from '../redux-modules/families';
import { Family } from '../typescript/Family';
import { ScrollView } from 'react-native-gesture-handler';
import { Modal, Button } from 'react-native-paper';
import Form from '../components/Form';
import { FieldTypes } from '../components/Form/index';

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

const FamiliesList = ({ navigation }) => {
  const families: Families = useSelector((state) => state.familiesSlice);
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView>
      <Text>Families List</Text>
      <ScrollView contentContainerStyle={styles.centeredContainer}>
        {families.map((family: Family) => {
          return (
            <BasicCard
              key={family.id}
              title={family.familyName}
              subtitle={family.familyName}
              phoneNumber={family.homePhone}
              families={[]}
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
              type: FieldTypes.INPUT,
              label: 'Birthday',
              name: 'birthday',
            },
          ],
          formName: "People",
          onSubmit(values) {
            console.log(values);
          }
        });
      }}>Add Person</Button>
      <Button onPress={() => {
        navigation.navigate('Modal', {
          fields: [
            {
              type: FieldTypes.INPUT,
              label: 'Family Name',
              name: 'familyName',
              required: true,
            },
            {
              type: FieldTypes.INPUT,
              label: 'Home Phone',
              name: 'homePhone',
              required: true,
            },
            {
              type: FieldTypes.DROPDOWN,
              label: 'Members',
              name: 'members',
              required: true,
            },
            {
              type: FieldTypes.DROPDOWN,
              label: 'Deacon',
              name: 'deacon',
              required: true,
            },
          ],
          formName: "Family",
          onSubmit(values) {
            console.log(values);
          }
        });
      }}>Add Family</Button>
    </SafeAreaView>
  );
};

export default FamiliesList;