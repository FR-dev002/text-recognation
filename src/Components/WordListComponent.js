import React from 'react';
import {View, Text} from 'react-native';

const WordListComponent = (props) => {
  return (
    <View>
      {props.data.map((value, key) => {
        return <Text key={key}>{value}</Text>;
      })}
    </View>
  );
};

export default WordListComponent;
