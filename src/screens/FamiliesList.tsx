import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { BasicCard } from '../components/Cards';
import { Families } from '../redux-modules/families';
import { Family } from '../typescript/Family';
import { ScrollView } from 'react-native-gesture-handler';
import { Deacons } from '../redux-modules/deacons';

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});


const FamiliesList = ({ navigation }) => {
  const families: Families = useSelector((state) => state.familiesSlice);
  const deacons: Deacons = useSelector((state) => state.deaconsSlice);
  return (
    <SafeAreaView>
      <Text>Families List</Text>
      <ScrollView contentContainerStyle={styles.centeredContainer}>
        {families.map((family: Family) => {
          // Find deacon by id and pass the name
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
    </SafeAreaView>
  );
};

export default FamiliesList;