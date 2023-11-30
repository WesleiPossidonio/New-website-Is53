import axios, { InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'https://is-53-back-end.vercel.app/',
})

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const userData = localStorage.getItem('is53:userData1.0')
  const token = userData && JSON.parse(userData).token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
