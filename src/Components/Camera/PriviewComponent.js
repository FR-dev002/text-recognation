import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

const PreviewComponent = ({uri, onPressCancel}) => {
  return (
    <View style={{flex: 2, flexDirection: 'column'}}>
      <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
        <Image source={{uri: uri}} style={{flex: 1}} />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxHeight: 70,
          paddingHorizontal: 40,
        }}>
        <View>
          <TouchableOpacity onPress={onPressCancel}>
            <Text>Batal</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Upload</Text>
        </View>
        <View>
          <Text>Simpan</Text>
        </View>
      </View>
    </View>
  );
};

export default PreviewComponent;
