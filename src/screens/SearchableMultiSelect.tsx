import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text, TextInput } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { People } from '../redux-modules/people';
import { Person } from '../typescript/Person';
import { useCustomTheme } from '../../App';

const styles = StyleSheet.create({
  person: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: Dimensions.get("screen").width
  }
});

const SearchableMultiSelect = () => {
  const people: People = useSelector(state => state.peopleSlice);
  const [selected, setSelected] = useState([]);
  const [searchString, setSearchString] = useState('');
  const theme = useCustomTheme();

  return (
    <SafeAreaView>
      <TextInput onChangeText={(text) => { setSearchString(text); }} value={searchString} />
      {
        selected.map((selectedPerson) => {

          return (
            <Text key={selectedPerson}>{selectedPerson}</Text>
          );
        })
      }
      <ScrollView contentContainerStyle={{}}>
        {
          people.reduce((acc: any, person: Person) => {
            if (person.firstName.includes(searchString)) {
              acc.push(
                <TouchableOpacity
                  key={person.id}
                  onPress={() => {
                    if (selected.includes(person.id)) {
                      selected.splice(selected.indexOf(person.id), 1);
                      setSelected([...selected]);
                    } else {
                      setSelected(selected.concat(person.id));
                    }
                  }}
                  style={styles.person}
                >
                  <Text style={{ fontSize: theme.fontSizes.small }}>{person.firstName}</Text>
                  <Icon size={theme.iconSizes.small} name={selected.includes(person.id) ? "remove" : "add"}></Icon>
                </TouchableOpacity>
              );
            }
            return acc;
          }, [])
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchableMultiSelect;