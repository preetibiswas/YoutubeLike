import axios from 'axios'

export default axios.create({
  baseURL: 'https://youtube-v31.p.rapidapi.com/',
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'a613e24dcbmsh01805e99f615a5dp158f6ejsna873e9f3bdab',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
})
