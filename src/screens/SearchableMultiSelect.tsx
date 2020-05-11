import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text, TextInput } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { People } from '../redux-modules/people';
import { Person } from '../typescript/Person';
import { useCustomTheme } from '../../App';



const SearchableMultiSelect = () => {
  const people: People = useSelector(state => state.peopleSlice);
  const [selected, setSelected] = useState([]);
  const theme = useCustomTheme();

  return (
    <SafeAreaView>
      <TextInput />
      {
        selected.map((selectedPerson) => {

          return (
            <Text key={selectedPerson}>{selectedPerson}</Text>
          );
        })
      }
      <ScrollView contentContainerStyle={{}}>
        {
          people.map((person: Person, i) => {
            console.log(person.firstName);
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setSelected(selected.concat(person.id));
                }}
                style={{}}
              >
                <Text style={{ fontSize: 16 }}>{person.firstName}</Text>
                <Icon size={21} name={"add"}></Icon>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchableMultiSelect;