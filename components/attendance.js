import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const AttendanceScreen = () => {
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheckIn = () => {
    setCheckedIn(true);
    Alert.alert('Check-in Successful', 'You have checked in successfully');
    // Here you can call the API to record the check-in
  };

  const handleCheckOut = () => {
    setCheckedIn(false);
    Alert.alert('Check-out Successful', 'You have checked out successfully');
    // Here you can call the API to record the check-out
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      {checkedIn ? (
        <Button title="Check Out" onPress={handleCheckOut} />
      ) : (
        <Button title="Check In" onPress={handleCheckIn} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default AttendanceScreen;
