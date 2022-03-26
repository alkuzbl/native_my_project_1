import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, Text, View} from 'react-native';
import {ModalMessagePropsType} from './types';

export const ModalMessage = ({
  message,
  onBackdropPress,
  animationTiming,
  backdropTiming,
}: ModalMessagePropsType) => {
  return (
    <Modal
      onBackdropPress={onBackdropPress}
      isVisible={!!message}
      backdropColor="black"
      backdropOpacity={0.3}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={animationTiming}
      animationOutTiming={animationTiming}
      backdropTransitionInTiming={backdropTiming}
      backdropTransitionOutTiming={backdropTiming}>
      <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#985c13',
    paddingVertical: 30,
    borderRadius: 8,
  },
  text: {
    color: '#f5c7ab',
    textAlign: 'center',
    fontSize: 20,
  },
});
