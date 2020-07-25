import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import PendingView from '../Pending';
import CameraHook from '../../Hooks/CameraHook';
import PreviewComponent from './PriviewComponent';

const CameraComponent = () => {
  const {uri, flash, handleFlash, handleCancel, takePicture} = CameraHook();
  console.log(flash);
  if (uri != '') {
    return <PreviewComponent uri={uri} onPressCancel={handleCancel} />;
  }

  return (
    <RNCamera
      flashMode={
        flash
          ? RNCamera.Constants.FlashMode.on
          : RNCamera.Constants.FlashMode.off
      }
      autoFocus={RNCamera.Constants.AutoFocus.on}
      style={styles.camera}>
      {({camera, status}) => {
        if (status !== 'READY') return <PendingView />;
        return (
          <View style={styles.body}>
            <View style={styles.topNav}>
              <TouchableOpacity
                onPress={handleFlash}
                style={styles.wrapperFlash}>
                <Text>{flash ? 'On' : 'Off'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomNav}>
              <View style={styles.bottomNavContent}>
                <View style={styles.takeWrapper}>
                  <TouchableOpacity
                    onPress={() => takePicture(camera)}
                    style={styles.takeButton}>
                    <Text>Snap</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    </RNCamera>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    flexDirection: 'row',
  },

  body: {
    flex: 1,
  },

  topNav: {
    flex: 1,
    top: 0,
  },

  bottomNav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 100,
    backgroundColor: 'rgba(255, 255, 255,0.1)',
  },

  bottomNavContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    height: '100%',
  },

  takeWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },

  takeButton: {
    backgroundColor: 'rgb(255, 255, 255)',
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    borderWidth: 4,
    borderColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapperFlash: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
    width: 50,
    height: 50,
  },
});
