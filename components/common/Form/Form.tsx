import * as React from 'react';
import {FC} from 'react';
import {useForm} from 'react-hook-form';
import {IFormInputs} from '../../../screens/ScreenAuth';
import {yupResolver} from '@hookform/resolvers/yup';

type FormPropsType = {
  defaultValues: any;
  children: JSX.Element | JSX.Element[];
};

export const Form: FC<FormPropsType> = props => {
  const {defaultValues, children} = props;
  const {register} = useForm<IFormInputs>({
    resolver: yupResolver(defaultValues),
  });

  return (
    <>
      {(Array.isArray(children) ? [...children] : [children]).map(child => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                key: child.props.name,
              },
              blurOnSubmit: false,
            })
          : child;
      })}
    </>
  );
};
