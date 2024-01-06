import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';

const Crops = () => {
  const [waterLevel, setWaterLevel] = useState(50); // Example initial water level
  const [isWaterTurnedOn, setIsWaterTurnedOn] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState('Tomatoes'); // Example default crop

  const handleWaterTurnToggle = () => {
    setIsWaterTurnedOn(!isWaterTurnedOn);
  };

  const handleCropChange = (crop) => {
    setSelectedCrop(crop);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Water Level: {waterLevel}%</Text>

      <View style={styles.controlContainer}>
        <Button
          title={isWaterTurnedOn ? 'Turn Off Water' : 'Turn On Water'}
          onPress={handleWaterTurnToggle}
        />
      </View>

      <View style={styles.cropContainer}>
        <Text style={styles.cropText}>Select Crop:</Text>
        <Picker
          selectedValue={selectedCrop}
          onValueChange={(itemValue) => handleCropChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Tomatoes" value="Tomatoes" />
          <Picker.Item label="Lettuce" value="Lettuce" />
          {/* Add more crop options as needed */}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  controlContainer: {
    marginBottom: 20,
  },
  cropContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cropText: {
    marginRight: 10,
  },
  picker: {
    width: 150,
  },
});

export default Crops;