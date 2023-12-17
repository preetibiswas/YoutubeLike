import { useState,useEffect } from 'react'
import { Box,Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import Video from './Video'
import apiClient from '../utils/apiClient'

const SearchFeed = () => {
  const {text}=useParams()
  console.log("searchText",text)

  const [videos,setVideos]=useState([])

 useEffect(()=>{
  apiClient.get(`search?part=snippet&q=${text}`).then((res)=>setVideos(res.data.items))
 },[text])
  return (
 
        <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
            <Typography sx={{color:'#fff'}} p={2} variant='h4' fontWeight='bold' mb={2}>Search Results for<span style={{color:'#F31503'}}>{text}</span>videos
                
            </Typography>
            <Video videos={videos}/>
        </Box>

  )
}

export default SearchFeed