import React from 'react';
import {View, StyleSheet} from 'react-native';
import CameraComponent from '../Components/Camera/CameraComponent';

const TextRecognationScreen = () => {
  return (
    <View style={styles.container}>
      <CameraComponent enabledOCR={true} />
    </View>
  );
};

export default TextRecognationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.1)',
  },
});
