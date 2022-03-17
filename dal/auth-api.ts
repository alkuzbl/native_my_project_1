import {instance} from './axios-instance';
import {AuthRequestDataType, UserType} from '../redux/types';
import {ResponseAPIType} from './types';

export const authAPI = {
  setLogin: (data: AuthRequestDataType) =>
    instance.post<ResponseAPIType<{userId: number}>>('auth/login', data),
  getAuthMe: () => instance.get<ResponseAPIType<UserType>>('auth/me'),
  logOut: () => instance.delete<ResponseAPIType<{}>>('auth/login'),
};
