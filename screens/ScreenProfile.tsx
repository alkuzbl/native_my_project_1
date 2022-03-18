import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {useDispatch} from 'react-redux';
import {setLogOut} from '../redux/middleware';

export const ScreenProfile = () => {
  const dispatch = useDispatch();

  const handlePress = () => dispatch(setLogOut());
  const fullName = 'Alex K';

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require('../assets/images/background.jpg')}
        resizeMode="cover">
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/images/avatar.jpg')}
          />
          <Text style={styles.title}>{fullName}</Text>

          <TouchableOpacity onPress={handlePress} style={styles.buttonBox}>
            <Text style={styles.buttonTitle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  title: {marginBottom: 40, fontSize: 24},
  buttonBox: {
    backgroundColor: '#d0923e',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#834D26FF',
  },
  buttonTitle: {color: '#834d26', fontSize: 20},
});
