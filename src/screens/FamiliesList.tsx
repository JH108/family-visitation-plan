import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { BasicCard } from '../components/Cards';
import { familiesSlice, Families } from '../redux-modules/families';
import { Family } from '../typescript/Family';
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
  const families: Families = useSelector((state) => state.familiesSlice);
  const dispatch = useDispatch();
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
              // required: true,
            },
            {
              type: FieldTypes.DROPDOWN,
              label: 'Deacon',
              name: 'deacon',
              // required: true,
            },
          ],
          formName: "Family",
          onSubmit(values) {
            dispatch(familiesSlice.actions.add(values));
          }
        });
      }}>Add Family</Button>
    </SafeAreaView>
  );
};

export default FamiliesList;