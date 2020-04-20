import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { BasicCard } from '../components/Cards';
import { Families, Family } from '../redux-modules/families';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});


const FamiliesList = ({ navigation }) => {
  const families: Families = useSelector((state) => state.familiesSlice);
  console.log(families);
  return (
    <SafeAreaView>
      <Text>Families List</Text>
      <ScrollView contentContainerStyle={styles.centeredContainer}>
        {families.map((family: Family) => {
          return (
            <BasicCard
              key={family.id}
              title={family.familyName}
              subtitle={family.deacon}
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