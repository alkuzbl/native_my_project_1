import React, {FC, useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

export type InputTextPropsType = {
  callBack: (value: string) => void;
  titleForButton: string;
};

export const InputText: FC<InputTextPropsType> = props => {
  const {callBack, titleForButton} = props;

  const [value, setValue] = useState<string>('');

  const handleChangeText = (text: string) => setValue(text);

  // дописать логику на ошибку при вводе менее 3х символов
  const handlePress = () => {
    if (value.trim().length > 2) {
      callBack(value);
      setValue('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handlePress}
        disabled={value.trim().length < 3}>
        <Text style={styles.buttonTitle}>{titleForButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    width: '65%',
    backgroundColor: '#e1b764',
    paddingHorizontal: 10,
    color: '#5e4131',
    borderRadius: 5,
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: '#917005',
    height: '100%',
    padding: 10,
    borderRadius: 5,
  },
  buttonTitle: {
    color: '#eeeded',
    fontSize: 20,
  },
});
