import axios from 'axios'

export default axios.create({
  baseURL: 'https://youtube-v31.p.rapidapi.com/',
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '4e1cd2742dmsh94f18e0bd1ab2cep16347bjsn9b6643863de7',
  },
})
