import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Avatar } from 'react-native-elements';
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const ProfileButton = ({ navigation }) => {
  const counter = useSelector(state => state.counterSlice);

  return (
    <View style={styles.centeredContainer}>
      {/* Photo by Joshua Fuller on Unsplash */}
      <Avatar
        size="small"
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        onPress={() => navigation.push("Profile")}
        activeOpacity={0.7}
      />
    </View>
  );
};

export default ProfileButton;
