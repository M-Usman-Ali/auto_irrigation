import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  DatePickerAndroid,
  FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useRoute} from '@react-navigation/native';
import {getCropDetail} from '../APIs';

const Cropdetail = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [totalTime, setTotalTime] = useState(null);
  const route = useRoute();
  const [cropDetail, setCropDetail] = useState([]);

  useEffect(() => {
    // Calculate total time when start or end date changes
    getCropDetail(data => {
      if (data?.length > 0) {
        setCropDetail(data);
      }
    }, route?.params?.crop?.id);
  }, [startDate, endDate]);

  const calculateTotalTime = () => {
    const timeDiff = endDate.getTime() - startDate.getTime();
    const totalHours = timeDiff / (1000 * 3600); // milliseconds to hours
    setTotalTime(totalHours.toFixed(2)); // Display total time in hours with 2 decimal places
  };

  const showStartDatePickerAndroid = async () => {
    // ... (unchanged)
  };

  const showEndDatePickerAndroid = async () => {
    // ... (unchanged)
  };

  const showStartDatePickerIOS = () => {
    // ... (unchanged)
  };

  const showEndDatePickerIOS = () => {
    // ... (unchanged)
  };

  const handleStartDateChange = (event, selectedDate) => {
    // ... (unchanged)
  };

  const handleEndDateChange = (event, selectedDate) => {
    // ... (unchanged)
  };

  return (
    <View>
      <TouchableOpacity
        onPress={
          Platform.OS === 'ios'
            ? showStartDatePickerIOS
            : showStartDatePickerAndroid
        }>
        <Text>Start Date: {startDate.toDateString()}</Text>
      </TouchableOpacity>

      {Platform.OS === 'ios' && showStartDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="spinner"
          onChange={handleStartDateChange}
        />
      )}

      <TouchableOpacity
        onPress={
          Platform.OS === 'ios'
            ? showEndDatePickerIOS
            : showEndDatePickerAndroid
        }>
        <Text>End Date: {endDate.toDateString()}</Text>
      </TouchableOpacity>

      {Platform.OS === 'ios' && showEndDatePicker && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="spinner"
          onChange={handleEndDateChange}
        />
      )}

      <Text>
        Total Time:{' '}
        {totalTime !== null ? totalTime.toFixed(2) + ' hours' : 'N/A'}
      </Text>

      {/* Add time input fields or any other UI elements as needed */}
      <FlatList
        data={cropDetail}
        renderItem={({item}) => {
          return (
            <View style={{marginVertical: 19}}>
              <Text>Start Time: {item?.start_time}</Text>
              <Text>End Time: {item?.end_time}</Text>
              <Text>Total Time: {item?.total_time}</Text>
              <Text>Fertilizer: {item?.fertilizer}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Cropdetail;
