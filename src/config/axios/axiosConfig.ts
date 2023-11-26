import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

const instance: AxiosInstance = axios.create({
  baseURL: 'https://linkedin-cv-crawler.beta-limited.workers.dev/interview',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  async (config: AdaptAxiosRequestConfig) => {
    try {
      const sessionKey = localStorage.getItem('sessionKey')

      if (sessionKey) {
        config.headers = config.headers ?? {}
        config.headers['Session-ID'] = sessionKey
      }
      return config
    } catch (error) {
      return Promise.reject(error)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
