import React, {memo, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextAreaPropsType} from './types';

export const TextArea: React.NamedExoticComponent<TextAreaPropsType> = memo(
  props => {
    const {defaultValue, setEditedValue} = props;
    const [value, setValue] = useState<string>(defaultValue);

    const handleChangeText = (text: string) => setValue(text);

    const handlePress = () => setEditedValue(value);

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          multiline
          numberOfLines={4}
          value={value}
          onChangeText={handleChangeText}
        />

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonTitle}>Отправить</Text>
        </TouchableOpacity>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    color: '#5e4131',
    paddingHorizontal: 10,
    backgroundColor: '#e1b764',
  },
  button: {
    backgroundColor: '#917005',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
});
