import {instance} from './axios-instance';
import {AuthRequestDataType, ProfileType, UserType} from '../redux/types';
import {ResponseAPIType} from './types';
import axios from 'axios';

export const authAPI = {
  setLogin: (data: AuthRequestDataType) =>
    instance.post<ResponseAPIType<{userId: number}>>('auth/login', data),
  getAuthMe: () => instance.get<ResponseAPIType<UserType>>('auth/me'),
  logOut: () => instance.delete<ResponseAPIType<{}>>('auth/login'),
};

export const userApi = {
  getUser: (userId: number) =>
    axios.get<ProfileType>(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
      {
        withCredentials: true,
        headers: {'API-KEY': '9516ef39-f560-41bf-8390-4ed5f28be538'},
      },
    ),
};
