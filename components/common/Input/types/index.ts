import {TextStyle, ViewStyle} from 'react-native';

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
  errors: any;
};
