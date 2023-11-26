import { AxiosResponse } from 'axios'
import { apiGet } from './axios/axiosUtils'

const getSessionKey = async () => {
  try {
    const response: AxiosResponse = await apiGet('/createsession')
    const data = response.data
    localStorage.setItem('sessionKey', data)
  } catch (error) {
    console.error('Error fetching session key:', error)
  }
}

export default getSessionKey
