import {useState, useEffect} from 'react';
import {PlatformColor, PermissionsAndroid} from 'react-native';

const CameraHook = () => {
  const [uri, setUri] = useState('');
  const [position, setPosition] = useState(true);
  const [flash, setFlash] = useState(true);

  useEffect(() => {
    setUri('');
  }, []);

  /**
   * @description handle flash value (true/false)
   */
  const handleFlash = () => {
    setFlash((prev) => !prev);
  };

  /**
   * @description handle position value (true/false)
   */
  const handlePosition = () => {
    setPosition((prev) => !prev);
  };

  /**
   * @description reset uri value
   */
  const handleCancel = () => {
    setUri('');
  };

  /**
   * @description Take a picture
   * @param {*} camera
   */
  const takePicture = async (camera) => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    setUri(data.uri);

    // if (PlatformColor.OS === 'android' && !(await hasAndroidPermission())) {
    //   return;
    // }
    // CameraRoll.save(data.uri, {type: 'photo'});
  };

  /**
   * @description Permition id platform android
   */
  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  /**
   * @description return object dati Custom Hooks
   */
  return {
    takePicture,
    handleFlash,
    handlePosition,
    handleCancel,
    uri,
    position,
    flash,
  };
};

export default CameraHook;
