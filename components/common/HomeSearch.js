import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {UberColors} from '../assets/colors/UberColors';

import ClockIcon from 'react-native-vector-icons/AntDesign';
import ArrowDownIcon from 'react-native-vector-icons/AntDesign';
import SpinIcon from 'react-native-vector-icons/FontAwesome';
import HomeIcon from 'react-native-vector-icons/AntDesign';

const HomeSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.titleText}>Go Where ?</Text>

        {/* Search Box */}
        <View style={styles.recientSearchButtonView}>
          <View style={{paddingTop: 1}}>
            <ClockIcon name="clockcircle" size={20} color={UberColors.black} />
          </View>
          <Text style={styles.recentSearchText}>Now</Text>
          <View style={{paddingTop: 3}}>
            <ArrowDownIcon
              name="arrowdown"
              size={20}
              color={UberColors.black}
            />
          </View>
        </View>
      </View>

      {/* Recent Search */}
      <View style={styles.recentSearchView}>
        <View
          style={{
            backgroundColor: UberColors.gray,
            padding: 10,
            borderRadius: 100,
          }}>
          <SpinIcon name="spinner" size={25} color={UberColors.black} />
        </View>
        <Text style={styles.recentSearchLocationText}>Islamabad</Text>
      </View>

      {/* Home Search */}
      <View style={styles.recentSearchView}>
        <View
          style={{
            backgroundColor: UberColors.darkBlue,
            padding: 10,
            borderRadius: 100,
          }}>
          <HomeIcon name="home" size={25} color={UberColors.white} />
        </View>
        <Text style={styles.recentSearchLocationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UberColors.grayText,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: UberColors.gray,
    paddingHorizontal: 5,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: UberColors.black,
    marginLeft: 8,
  },
  recientSearchButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: UberColors.grayText,
    paddingRight: 5,
    paddingLeft: 9,
    borderRadius: 20,
    paddingVertical: 5,
    marginRight: 10,
  },
  recentSearchText: {
    fontSize: 20,
    color: UberColors.black,
    paddingRight: 3,
    paddingLeft: 5,
  },

  //
  recentSearchView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: UberColors.gray,
  },
  recentSearchLocationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: UberColors.gray,
    paddingLeft: 10,
  },
});
