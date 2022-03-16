import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {'API-KEY': '9516ef39-f560-41bf-8390-4ed5f28be538'},
});
