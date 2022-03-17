import * as React from 'react';
import {FC} from 'react';
import {useForm} from 'react-hook-form';

type FormPropsType = {
  defaultValues: any;
  children: JSX.Element | JSX.Element[];
};

export const Form: FC<FormPropsType> = props => {
  const {defaultValues, children} = props;
  const methods = useForm({defaultValues});

  return (
    <>
      {(Array.isArray(children) ? [...children] : [children]).map(child => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
              blurOnSubmit: false,
            })
          : child;
      })}
    </>
  );
};
