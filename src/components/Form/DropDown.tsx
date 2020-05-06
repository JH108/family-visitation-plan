import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Menu, Button } from 'react-native-paper';

const DropDown = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView>
      <Text>Drop Down</Text>
      <Menu
        visible={visible}
        onDismiss={() => { setVisible(false); }}
        anchor={
          <Button onPress={() => { setVisible(true); }}>Show Menu</Button>
        }
      >
        <Menu.Item onPress={() => { }} title="Foo" />
        <Menu.Item onPress={() => { }} title="Bar" />
        <Menu.Item onPress={() => { }} title="Bazz" />
      </Menu>
    </SafeAreaView>
  );
};

export default DropDown;