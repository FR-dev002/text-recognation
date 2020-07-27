import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BarcodePriview = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.text}>Value: {data.data}</Text>
      </View>

      <View style={styles.card}>
        
        <Text style={styles.text}>Type: {data.type}</Text>
      </View>

      <View style={styles.card}>
        
        <Text style={styles.text}>Row Data: {data.rawData}</Text>
      </View>
    </View>
  );
};

export default BarcodePriview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },

  card: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: 'black',
  },
});
