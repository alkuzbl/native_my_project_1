import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {useDispatch} from 'react-redux';
import {setLogin} from '../redux/middleware/setLogin';

export const ScreenAuth = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<{email: string}>({email: ''});
  const [password, setPassword] = useState<{password: string}>({password: ''});
  // const [rememberMe, setRememberMe] = useState<{rememberMe: boolean}>({
  //   rememberMe: false,
  // });

  const handleSubmit = () => {
    dispatch(setLogin({...email, ...password, rememberMe: true}));
    console.log({...email, ...password});
    setEmail({email: ''});
    setPassword({password: ''});
  };

  const handleChangeEmailValue = (value: string) => setEmail({email: value});
  const handleChangePasswordValue = (value: string) =>
    setPassword({password: value});
  // const handleChangeCheckBox = () => {};

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require('../assets/images/background.jpg')}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Список дел</Text>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChangeEmailValue}
              value={email.email}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChangePasswordValue}
              value={password.password}
              autoComplete="password"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.buttonBox} onPress={handleSubmit}>
            <Text style={styles.buttonTitle}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '80%',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    marginBottom: 30,
    fontSize: 30,
  },
  inputBox: {
    width: '80%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  buttonBox: {
    backgroundColor: 'red',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
});
