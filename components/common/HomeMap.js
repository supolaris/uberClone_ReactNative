import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {UberColors} from '../assets/colors/UberColors';

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: 'black'}}>Google Map</Text>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: UberColors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
