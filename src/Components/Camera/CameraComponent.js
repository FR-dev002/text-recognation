import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import PendingView from '../Pending';
import PropTypes from 'prop-types';
import CameraHook from '../../Hooks/CameraHook';
import WordListComponent from '../WordListComponent';
import BarcodePriview from '../BarcodePreview';

export const Constants = {
  ...RNCamera.Constants,
};

const CameraComponent = (props) => {
  const {uri, flash, handleFlash, handleCancel} = CameraHook();
  const [cameraType, setCameraType] = useState(Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Constants.FlashMode.off);
  const [recognizedText, setRecognizedText] = useState(null);
  const [wordBlock, setWordBlock] = useState(null);
  const [wordList, setWordList] = useState([]);
  const [objBarcode, setobjBarcode] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setobjBarcode({});
  }, []);

  const takePicture = async (camera) => {
    if (camera) {
      const options = {
        quality: props.quality,
        base64: true,
        width: props.imageWidth,
        doNotSave: true,
        fixOrientation: true,
        pauseAfterCapture: true,
      };
      const data = await camera.takePictureAsync(options);
      props.onCapture && props.onCapture(data.base64, recognizedText);
      setStatus(true);
    }
  };

  const onTextRecognized = (data) => {
    if (props.enabledOCR) {
      if (data && data.textBlocks && data.textBlocks.length > 0) {
        setWordBlock(data);
      }
    }
  };

  if (wordBlock && wordBlock.textBlocks && wordBlock.textBlocks.length) {
    for (let idx = 0; idx < wordBlock.textBlocks.length; idx++) {
      let text = wordBlock.textBlocks[idx].value;
      if (text && text.trim().length > 0) {
        let words = text.split(/[\s,.?]+/);
        if (words && words.length > 0) {
          for (let idx2 = 0; idx2 < words.length; idx2++) {
            if (words[idx2].length > 0 && status) wordList.push(words[idx2]);
          }
        } else if (status) {
          wordList.push(words);
        }
      }
    }
  }

  const onBarcodereader = (data) => {
    setobjBarcode(data);
  };

  if (Object.keys(objBarcode).length > 0) {
    return <BarcodePriview data={objBarcode} />;
  }

  if (wordList.length > 0 && status) {
    return <WordListComponent data={wordList} />;
  }

  return (
    <RNCamera
      type={cameraType}
      flashMode={flashMode}
      ratio={props.ratio}
      captureAudio={false}
      autoFocus={props.autoFocus}
      whiteBalance={props.whiteBalance}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      onTextRecognized={
        props.enabledOCR ? (data) => onTextRecognized(data) : undefined
      }
      onBarCodeRead={
        props.enabledBarcodeReader ? (data) => onBarcodereader(data) : null
      }
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

CameraComponent.propTypes = {
  cameraType: PropTypes.any,
  flashMode: PropTypes.any,
  autoFocus: PropTypes.any,
  whiteBalance: PropTypes.any,
  ratio: PropTypes.string,
  quality: PropTypes.number,
  imageWidth: PropTypes.number,
  style: PropTypes.object,
  onCapture: PropTypes.func,
  enabledOCR: PropTypes.bool,
  enabledBarcodeReader: PropTypes.bool,
  onClose: PropTypes.func,
};

CameraComponent.defaultProps = {
  cameraType: Constants.Type.back,
  flashMode: Constants.FlashMode.off,
  autoFocus: Constants.AutoFocus.on,
  whiteBalance: Constants.WhiteBalance.auto,
  ratio: '4:3',
  quality: 0.5,
  imageWidth: 768,
  style: null,
  onCapture: null,
  enabledOCR: false,
  enabledBarcodeReader: false,
  onClose: null,
};

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
