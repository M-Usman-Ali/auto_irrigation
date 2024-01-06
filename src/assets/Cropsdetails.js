import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform, DatePickerAndroid } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Cropdetail = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [totalTime, setTotalTime] = useState(null);

  useEffect(() => {
    // Calculate total time when start or end date changes
    calculateTotalTime();
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
      <TouchableOpacity onPress={Platform.OS === 'ios' ? showStartDatePickerIOS : showStartDatePickerAndroid}>
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

      <TouchableOpacity onPress={Platform.OS === 'ios' ? showEndDatePickerIOS : showEndDatePickerAndroid}>
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

<Text>Total Time: {totalTime !== null ? totalTime.toFixed(2) + ' hours' : 'N/A'}</Text>

      {/* Add time input fields or any other UI elements as needed */}
    </View>
  );
};

export default Cropdetail;