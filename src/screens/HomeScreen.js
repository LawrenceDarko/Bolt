/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';
import HomeMap from '../components/HomeMap';
import BottomDrawer from '../components/BottomDrawer';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <BottomDrawer />
      {/* <Text>Home Screen</Text> */}
    </View>
  );
};

export default HomeScreen;
