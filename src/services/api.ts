import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://filipeydtmoney.netlify.app/api/transactions'
})
