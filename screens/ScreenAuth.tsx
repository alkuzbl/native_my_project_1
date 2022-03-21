import React from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {useDispatch} from 'react-redux';
import {setLogin} from '../redux/middleware/setLogin';
import {Form} from '../components/common/Form/Form';
import {Input} from '../components/common/Input/Input';
import {useForm} from 'react-hook-form';

export type IFormInputs = {
  email: string;
  password: string;
};

export const ScreenAuth = () => {
  const dispatch = useDispatch();
  const {control, handleSubmit} = useForm();

  const onSubmit = (data: any) => {
    dispatch(setLogin({...data, rememberMe: true}));
  };

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require('../assets/images/background.jpg')}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Список дел</Text>
          </View>
          <Form defaultValues={{email: '', password: ''}}>
            <Input
              name="email"
              control={control}
              label="Email"
              style={inputStyle}
            />
            <Input
              name="password"
              control={control}
              label="Password"
              style={inputStyle}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.buttonBox}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonTitle}>Sign in</Text>
            </TouchableOpacity>
          </Form>
        </View>
      </ImageBackground>
    </View>
  );
};

const inputStyle = StyleSheet.create({
  inputBox: {
    width: '80%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    backgroundColor: '#e1b764',
    color: '#5e4131',
  },
});

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
  buttonBox: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#d0923e',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#834D26FF',
  },
  buttonTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
});
