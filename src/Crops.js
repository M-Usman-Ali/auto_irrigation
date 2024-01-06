import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const Crops = () => {
    const [waterLevel, setWaterLevel] = useState(27);
    const [scheduleWaterTurn, setSchduleWaterTurn] = useState(null);
    const [selectedCrop, setSelectedCrop] = useState('');


    const handelWaterTurnOn =() => {
      setSchduleWaterTurn(new Date());
    };

    const handelCancelWaterTurnOn = () =>
    {
      setSchduleWaterTurn(null);
    }

    const handleCropSelect = (crop) => {
      setSelectedCrop(crop);
    };

    const crops = ['Tomatoes', 'Lettuce', 'Carrots', 'Cabbage', 'Onions', 'Peppers']; // Add more crops as needed
    const renderCropButton = (crop) => (
      <Button
        title={crop}
        key={crop}
        onPress={() => handleCropSelect(crop)}
        style={selectedCrop === crop ? styles.selectedButton : styles.button}
      />
    );
  
    const renderRow = ({ item }) => (
      <View style={styles.cropRow}>{item.map((crop) => renderCropButton(crop))}</View>
    );
  
    const groupedCrops = crops.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 3);
  
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new row
      }
  
      resultArray[chunkIndex].push(item);
  
      return resultArray;
    }, []);

  return(
    <SafeAreaView>
      
      <Text style={styles.headerText}>Water Temprature: {waterLevel}&deg;c</Text>

      <View style={styles.controlContainer}>
        {scheduleWaterTurn ? (
          <Button title="Cancel Water Turn On" onPress={handelCancelWaterTurnOn} />
        ) : (
          <Button title="Turn On Water" onPress={handelWaterTurnOn} />
        )}
      </View>

      {scheduleWaterTurn && (
        <Text style={styles.scheduleText}>
          Water will be turned on at: {scheduleWaterTurn.toLocaleString()}
        </Text>
      )}
      <Text style={styles.cropText}>Crops:</Text>
      <View style={styles.cropContainer}>
        <FlatList
          data={groupedCrops}
          renderItem={renderRow}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <Text style={styles.cropText}>Selected Crop: {selectedCrop}</Text>

    </SafeAreaView>
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
      marginTop: 20,
      marginLeft: 10
    },
    controlContainer: {
      marginTop: 20,
    },
    scheduleText: {
      fontSize: 16,
      marginTop: 10,
      marginLeft: 10,
    },
    cropContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 10,
      paddingTop: 10,
    },
    cropText: {
      fontSize: 16,
      marginTop: 15,
    },
    button: {
      margin: 5,
    },
    selectedButton: {
      margin: 5,
      backgroundColor: 'black', // Add your selected button style
    },
    cropRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
  });
  

export default Crops;