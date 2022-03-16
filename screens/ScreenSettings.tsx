import React from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {useDispatch} from 'react-redux';
import {setLogOut} from '../redux/middleware/setLogOut';

export const ScreenSettings = () => {
  const dispatch = useDispatch();

  const handlePress = () => dispatch(setLogOut());

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require('../assets/images/background.jpg')}
        resizeMode="cover">
        <Text> БУДУТ НАСТРОЙКИ ПОЛЬЗОВАТЕЛЯ ПОСЛЕ ПОДКЛЮЧЕНИЯ К API</Text>
        <Button title="Logout" onPress={handlePress} />
      </ImageBackground>
    </View>
  );
};
