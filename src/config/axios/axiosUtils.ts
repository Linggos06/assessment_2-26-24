import instance from './axiosConfig'
import { AxiosResponse } from 'axios'

const apiGet = async <T>(url: string): Promise<AxiosResponse<T>> => instance.get<T>(url)
const apiPost = async <T>(url: string, data?: unknown): Promise<AxiosResponse<T>> =>
  instance.post<T>(url, data)

export { apiGet, apiPost }
