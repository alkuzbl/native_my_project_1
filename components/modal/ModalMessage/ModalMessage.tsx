import React from 'react';
import Modal from 'react-native-modal';
import {Text, View} from 'react-native';
import {ModalMessagePropsType} from './types';

export const ModalMessage = ({message}: ModalMessagePropsType) => {
  return (
    <Modal
      isVisible={!!message}
      backdropColor="black"
      backdropOpacity={0.1}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}>
      <View
        style={{
          backgroundColor: 'black',
          paddingVertical: 30,
          borderRadius: 8,
        }}>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 20}}>
          {message}
        </Text>
      </View>
    </Modal>
  );
};
