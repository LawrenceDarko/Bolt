/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const HomeMap = () => {
  return (
    <View style={styles.map}>
        {/* <Text>This is the map</Text> */}
        <Image style={styles.mapImg} source={require('../assets/map.jpg')} />
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  map: {
    height: 500,
    backgroundColor: '#a0abff',
    justifyContent: 'center',
    alignItems: 'center',
    },

  mapImg: {
    height: '100%',
    width: '100%',
  },
});
