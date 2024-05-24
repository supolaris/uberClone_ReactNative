import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {UberColors} from '../assets/colors/UberColors';

import ArrowRight from 'react-native-vector-icons/AntDesign';

const Message = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.messageHeadingText}>Ride with Confidence Today</Text>
      <Text style={styles.messageDescriptionText}>
        Discover fast, reliable, and affordable rides at your fingertips.
        Wherever you're headed, our trusted drivers will get you there safely
        and comfortably.
      </Text>
      <View style={styles.learnMoreTextIconView}>
        <Text style={styles.learnMoreText}>Learn More</Text>

        <View style={styles.iconView}>
          <ArrowRight name="arrowright" size={22} color={UberColors.white} />
        </View>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: UberColors.darkBlue,
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  messageHeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: UberColors.white,
    paddingTop: 20,
  },
  messageDescriptionText: {
    fontSize: 18,
    color: UberColors.grayText,
    paddingVertical: 10,
  },
  learnMoreTextIconView: {
    flexDirection: 'row',
  },
  learnMoreText: {
    //backgroundColor: 'red',
    fontSize: 20,
    color: UberColors.white,
    paddingBottom: 20,
  },
  iconView: {
    // backgroundColor: 'red',
    //justifyContent: 'center',
    paddingTop: 5,
    paddingLeft: 5,
  },
});
