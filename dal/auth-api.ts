import {instance} from './axios-instance';

export const authAPI = {
  setLogin: (data: any) =>
    instance.post<{
      resultCode: number;
      data: {userId: number};
      messages: string[];
    }>('auth/login', data),
  getAuthMe: () => instance.get('auth/me'),
  logOut: () => instance.delete('auth/login'),
};
