import {instance} from './axios-instance';
import {AuthRequestDataType} from '../redux/types';

export const authAPI = {
  setLogin: (data: AuthRequestDataType) =>
    instance.post<{
      resultCode: number;
      data: {userId: number};
      messages: string[];
    }>('auth/login', data),
  getAuthMe: () => instance.get('auth/me'),
  logOut: () => instance.delete('auth/login'),
};
