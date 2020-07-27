import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CameraComponent from '../Components/Camera/CameraComponent';

const BarcodeReaderScreen = () => {
  return (
    <View style={styles.container}>
      <CameraComponent enabledBarcodeReader={true} />
    </View>
  );
};

export default BarcodeReaderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.1)',
  },
});
