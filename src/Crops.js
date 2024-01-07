import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import {fetchCrops} from './APIs';
import {BASE_URL} from './Constants';
import { useNavigation } from '@react-navigation/native';

const Crops = () => {
  const [scheduleWaterTurn, setSchduleWaterTurn] = useState(null);
  const [selectedCrop, setSelectedCrop] = useState('');
  const [temperature, setTemperature] = useState(25);
  const [cropsList, setCropsList] = useState([]);
  const navigation = useNavigation();

  const getWaterDate = () => {
    var formdata = new FormData();
    formdata.append('do', 'crop_next_watering_date');
    formdata.append('apikey', 'dwamsoft12345');

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://dwamsoft.com/auto_irrigations/', requestOptions)
      .then(response => response.json())
      .then(result => {
        setSchduleWaterTurn(result?.data);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    //get location longitude and latitude
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };
        //get temperature from api
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&current=temperature_2m&longitude=${location.longitude}`,
          requestOptions,
        )
          .then(response => response.json())
          .then(result => {
            setTemperature(result?.current?.temperature_2m);
          })
          .catch(error => console.log('error', error));
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });

    // get water date from api
    getWaterDate();
    //get crops list
    fetchCrops(setCropsList);
  }, []);

  const handelWaterTurnOn = () => {
    setSchduleWaterTurn(new Date());
  };

  const handleCropSelect = crop => {
    navigation.navigate('Cropdetail', {crop});
  };

  const onAddCrop = () => {
    navigation.navigate('Addcrops');
  };

  const renderRow = crop => (
    <TouchableOpacity
      onPress={() => handleCropSelect(crop)}
      style={styles.cropRow}>
      <Image
        source={{uri: BASE_URL + crop.image}}
        style={{width: 50, height: 50, resizeMode: 'contain', borderRadius: 70}}
      />
      <Text numberOfLines={1} style={styles.buttonTxt}>{crop?.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Text style={styles.headerText}>Temprature: {temperature}&deg;c</Text>

      <View style={styles.controlContainer}>
        <Text
          style={{fontSize: 18, fontWeight: 'bold'}}
          onPress={handelWaterTurnOn}>
          Turn On Water {scheduleWaterTurn}
        </Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
      <Text style={styles.cropText}>Crops:</Text>
      <TouchableOpacity onPress={onAddCrop}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 15,
              fontWeight: 'bold',
              marginLeft: 10,
              color: 'green',
            }}>
            + Add Crop
          </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cropContainer}>
        <FlatList
          data={cropsList}
          numColumns={2}
          renderItem={({item}) => renderRow(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
    marginLeft: 10,
  },
  controlContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleText: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  cropContainer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingTop: 10,
    marginHorizontal: 20,
  },
  cropText: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold',
  },
  buttonTxt: {
    margin: 5,
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
  selectedButton: {
    margin: 5,
    backgroundColor: 'black', // Add your selected button style
  },
  cropRow: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '40%',
    marginHorizontal: 3,
  },
});

export default Crops;
