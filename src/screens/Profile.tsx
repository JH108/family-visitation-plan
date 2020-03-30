import React from 'react';
import { Text, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button title="Home" onPress={() => { navigation.navigate('Home'); }} />
    </SafeAreaView>);
};

export default Profile;