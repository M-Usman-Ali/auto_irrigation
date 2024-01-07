import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImagePick from './ImagePicker';
import axios from 'axios';
import {addCrop} from '../APIs';
import { useNavigation } from '@react-navigation/native';

const Addcrops = () => {
  const [cropName, setCropName] = useState('');
  const [image, setImage] = useState(null);
  const [wateringStartTime, setWateringStartTime] = useState('');
  const [wateringEndTime, setWateringEndTime] = useState('');
  const navigation = useNavigation();
  // form data
  const [formData, setFormData] = useState({});

  const handleImageSelect = image => {
    setFormData({...formData, image});
    console.log('selectedImage', image);
  };

  const handleSubmit = async () => {
    if(!formData?.name){
      alert('Please enter crop name');
    }
    addCrop(formData, () => {
      navigation.goBack();
    });
  };

  const onTextChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.cropstext}
        placeholder="Crop Name"
        value={formData?.name}
        onChangeText={text => onTextChange('name', text)}
        placeholderTextColor="#60A917"
      />
      <TextInput
        style={styles.cropstext}
        placeholder="Water Required"
        value={formData?.water_required}
        onChangeText={text => onTextChange('water_required', text)}
        placeholderTextColor="#60A917"
      />
      <TextInput
        style={styles.cropstext}
        placeholder="Day"
        value={formData?.day}
        onChangeText={text => onTextChange('day', text)}
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
    marginTop: 20,
  },
  cropstext: {
    borderRadius: 100,
    width: '78%',
    backgroundColor: '#D5E8D4',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,
  },
  btntext: {
    borderRadius: 100,
    width: '78%',
    backgroundColor: '#60A917',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#D5E8D4',
  },
});

export default Addcrops;
