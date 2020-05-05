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
      <Button onPress={() => {
        setVisible(!visible);
        return (
          <Modal
            visible={visible}
            children={
              <Form
                onDismiss={() => ''}
                fields={
                  Object.keys(families).map((family) => {
                    console.log(family);
                    return {
                      name: 'asdf',
                      label: '',
                      type: FieldTypes.INPUT,
                      required: false
                    };
                  })
                }
                formName="New Family"
                onSubmit={(e) => {

                }
                }></Form>
            }
          ></Modal>
        );
      }}>Add Family</Button>
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
    </SafeAreaView>
  );
};

export default FamiliesList;