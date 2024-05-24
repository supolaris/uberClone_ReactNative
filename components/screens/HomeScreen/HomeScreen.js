import React from 'react';
import {View, StyleSheet} from 'react-native';

import {UberColors} from '../../assets/colors/UberColors';

import HomeMap from '../../common/HomeMap';
import Message from '../../common/Message';
import HomeSearch from '../../common/HomeSearch';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeMap />
      <Message />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UberColors.lightBlue,
  },
});
