import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LocalNotificationHook from './../Hooks/LocalNotification';
const LocalNotificationScreen = () => {
  const {
    onPressSendNotification,
    onPressCancelNotification,
  } = LocalNotificationHook();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressSendNotification()}>
        <Text>Send Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressCancelNotification()}>
        <Text>Cancel Notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocalNotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#dddddd',
    padding: 10,
    width: 200,
    marginTop: 10,
  },
});
