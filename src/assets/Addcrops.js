import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImagePick from './ImagePicker';
import axios from 'axios';

const Addcrops = () => {
  const [cropName, setCropName] = useState('');
  const [image, setImage] = useState(null);
  const [wateringStartTime, setWateringStartTime] = useState('');
  const [wateringEndTime, setWateringEndTime] = useState('');

  const handleImageSelect = (selectedImage) => {
    setImage(selectedImage);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('cropName', cropName);
      formData.append('image', {
        uri: image.uri,
        type: image.type,
        name: image.name,
      });
      formData.append('wateringStartTime', wateringStartTime);
      formData.append('wateringEndTime', wateringEndTime);

      const response = await axios.post('YOUR_API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.cropstext}
        placeholder="Crop Name"
        value={cropName}
        onChangeText={setCropName}
        placeholderTextColor="#60A917"
      />
      <TextInput style={styles.cropstext}
        placeholder="Water Level"
        value={wateringStartTime}
        onChangeText={setWateringStartTime}
        placeholderTextColor="#60A917"
      />
      <TextInput style={styles.cropstext}
        placeholder="Water Required"
        value={wateringEndTime}
        onChangeText={setWateringEndTime}
        placeholderTextColor="#60A917"
      />
      <TextInput style={styles.cropstext}
        placeholder="Day"
        value={wateringEndTime}
        onChangeText={setWateringEndTime}
        placeholderTextColor="#60A917"
      />
      <ImagePick onImageSelect={handleImageSelect} />
      
      <TouchableOpacity onPress={handleSubmit} style={styles.btntext}>
        <View>
        <Text style={styles.buttonText}>Submit</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop:20,
  },
  cropstext:{
    borderRadius: 100,
    width: '78%',
    backgroundColor: '#D5E8D4',
    marginTop: 10,
    display: 'flex', 
    flexDirection :'row',
    paddingLeft: 15,
  },
  btntext: {
    borderRadius: 100,
    width: '78%',
    backgroundColor: '#60A917',
    marginTop: 10,
    display: 'flex', 
    flexDirection :'row',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:
  {
    color: '#D5E8D4',
  },
});

export default Addcrops;