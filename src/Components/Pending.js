import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PendingView = () => {
  return (
    <View style={styles.container}>
      <Text>Waiting</Text>
    </View>
  );
};

export default PendingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
