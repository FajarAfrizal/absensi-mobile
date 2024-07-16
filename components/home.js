import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.textHadir}>Kehadiran :</Text>
            <Text style={styles.textHadir}>Terlambat :</Text>
            <Text style={styles.textHadir}>Izin :</Text>
            <Text style={styles.textHadir}>Sakit :</Text>
            <Text style={styles.textHadir}>Alpha :</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textHadir: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 16,
    }
});

export default HomeScreen;