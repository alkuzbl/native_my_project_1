import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {'API-KEY': '3e38d8b8-e96b-4053-a284-8500f7337dfb'},
});
