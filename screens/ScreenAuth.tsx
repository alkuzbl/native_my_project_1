import React, {useEffect} from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {setLogin} from '../redux/middleware';
import {Form, Input, ModalMessage} from '../components';
import {useForm} from 'react-hook-form';
import {RootState} from '../redux/store';
import {clearMessages} from '../redux/slices/auth-slice';

export type IFormInputs = {
  email: string;
  password: string;
};

export const ScreenAuth = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const error = useSelector<RootState, string | undefined>(
    state => state.auth.messages,
  );
  console.log(error);

  const onSubmit = (data: any) => {
    dispatch(setLogin({...data, rememberMe: true}));
  };

  useEffect(() => {
    const timerId = setTimeout(() => dispatch(clearMessages()), 3000);

    return () => clearTimeout(timerId);
  }, [error]);

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
              errors={errors}
            />

            <Input
              name="password"
              control={control}
              label="Password"
              style={inputStyle}
              secureTextEntry
              errors={errors}
            />

            <TouchableOpacity
              style={styles.buttonBox}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonTitle}>Sign in</Text>
            </TouchableOpacity>
          </Form>
        </View>
        <ModalMessage message={error} />
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
  error: {
    color: 'red',
    fontWeight: '800',
    fontSize: 18,
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
