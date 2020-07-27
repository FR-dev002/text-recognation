import React from 'react';
import {Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Text
        style={{
          backgroundColor: 'red',
          height: 30,
          borderRadius: 10,
          padding: 5,
        }}
        onPress={() => {
          navigation.navigate('TextRecognation');
        }}>
        Text Recognation
      </Text>
      <Text
        style={{
          backgroundColor: 'green',
          height: 30,
          borderRadius: 10,
          padding: 5,
          color: 'white'
        }}
        onPress={() => {
          navigation.navigate('BarcodeReader');
        }}>
        Barcode Reader
      </Text>
    </View>
  );
};

export default HomeScreen;
