import React from 'react';
import CameraComponent from '../Components/Camera/CameraComponent';
import {View, StyleSheet, Text} from 'react-native';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <CameraComponent />
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.1)',
  },
});
