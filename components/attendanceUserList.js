import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const AttendanceScreen = ({ route, navigation }) => {
  const { userId, userName } = route.params;
  const [status, setStatus] = useState(null);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    Alert.alert('Status Updated', `${userName}'s status is now: ${newStatus}`);
    // Here you can call the API to record the status for the userId
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance for {userName}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Hadir" onPress={() => handleStatusChange('Hadir')} />
        <Button title="Terlambat" onPress={() => handleStatusChange('Terlambat')} />
        <Button title="Sakit" onPress={() => handleStatusChange('Sakit')} />
        <Button title="Cuti" onPress={() => handleStatusChange('Cuti')} />
        <Button title="Alpha" onPress={() => handleStatusChange('Alpha')} />
      </View>
      {status && <Text style={styles.status}>Current Status: {status}</Text>}
      <Button title="Back to User List" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  status: {
    marginTop: 16,
    fontSize: 18,
    color: 'green',
  },
});

export default AttendanceScreen;
