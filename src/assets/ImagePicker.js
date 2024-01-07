import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import ImagePicker from 'react-native-image-picker';
var ImagePicker = require('react-native-image-picker');

const ImagePick = ({onImageSelect}) => {
  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const selectImage = callback => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('user canceld image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = response.assets[0].uri;
        onImageSelect(source);
      }
    });
  };
  return (
    <TouchableOpacity
      onPress={selectImage}
      style={{
        borderRadius: 100,
        width: '78%',
        backgroundColor: '#D5E8D4',
        marginTop: 10,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingVertical: 15,
      }}>
      <View>
        <Text style={styles.buttonText}>Select Image</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#60A917',
  },
});

export default ImagePick;
