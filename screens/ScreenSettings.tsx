import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export const ScreenSettings = () => {
  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require('../assets/images/background.jpg')}
        resizeMode="cover">
        <Text> БУДУТ НАСТРОЙКИ ПОЛЬЗОВАТЕЛЯ ПОСЛЕ ПОДКЛЮЧЕНИЯ К API</Text>
      </ImageBackground>
    </View>
  );
};
