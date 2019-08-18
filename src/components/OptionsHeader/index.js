import React from 'react';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function OptionsHeader() {
  return (
    <Icon
        name="options-vertical"
        size={ 18 }
        color="#373737"
        style={{ marginRight: 15 }}
        onPress={ () => alert("Options onPress") }
    />
  );
}
