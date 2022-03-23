import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {FC} from 'react';
import {useController} from 'react-hook-form';
import {InputPropsType} from './types';

export const Input: FC<InputPropsType> = props => {
  const {control, name, label, style, secureTextEntry, errors} = props;

  const {
    field: {onBlur, onChange, value},
  } = useController({control, name, rules: {required: true}});

  return (
    <View style={style ? style.inputBox : {}}>
      {label && <Text style={style ? style.label : {}}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={style ? style.input : {}}
        secureTextEntry={secureTextEntry}
      />
      {errors[name] && (
        <Text style={style ? style.error : {}}>This is required.</Text>
      )}
    </View>
  );
};
