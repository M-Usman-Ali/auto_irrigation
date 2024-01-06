import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen, green} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: darkGreen, paddingVertical: 7, width: '78%', marginVertical:5, backgroundColor: green, marginTop: 5}}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
