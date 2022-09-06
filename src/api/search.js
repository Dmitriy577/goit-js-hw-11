import axios from 'axios';

export const search = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '29674426-8ec37b32652a9591c077c362a',
  },
});
