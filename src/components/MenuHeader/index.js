import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function MenuHeader({ navigation }) {
  return (
    <Icon
        name="menu"
        size={ 23 }
        color="#373737"
        style={{ marginLeft: 15 }}
        onPress={ () => navigation.toggleDrawer() }
    />
  );
}
