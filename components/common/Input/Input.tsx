import React from 'react';
import {TextInput, View, Text, ViewStyle, TextStyle} from 'react-native';
import {FC} from 'react';
import {useController} from 'react-hook-form';

type StyleType<T = ViewStyle | TextStyle> = {
  inputBox?: T;
  input?: T;
  error?: T;
  label?: T;
};

export type InputPropsType = {
  name: string;
  label?: string;
  control: any;
  style?: StyleType;
  secureTextEntry?: boolean;
};

export const Input: FC<InputPropsType> = props => {
  const {control, name, label, style, secureTextEntry} = props;

  const {field} = useController({control, name});

  return (
    <View style={style ? style.inputBox : {}}>
      {label && <Text style={style ? style.label : {}}>{label}</Text>}
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        style={style ? style.input : {}}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
