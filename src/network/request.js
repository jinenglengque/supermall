import axios from 'axios'
import qs from 'qs'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    // console.log('来到了request拦截success中');

    // config.data = qs.stringify(config.data)
    // console.log(config)
    return config
  }, err => {
    console.log(err);
  });

  instance.interceptors.response.use(response => {
    return response.data
  }, err => {
    console.log(err);
  });

  return instance(config)

}