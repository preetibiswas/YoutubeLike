import React from 'react'
import { useState,useEffect } from 'react'
import { Stack,Box,Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Video from './Video'
import apiClient from '../utils/apiClient'

const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState('')
  const [videos,setVideos]=useState([])

  useEffect(()=>{
         apiClient.get(`search?part=snippet&q=${selectedCategory}`).then((res)=>setVideos(res.data.items))
  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{xs:'column',md:'row'}}}>

        <Box sx={{height:{xs:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
            <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            />

            <Typography variant='body2'className='copyright' sx={{color:'#fff',mt:1.5}}>
                copyright 2022 jsm media
            </Typography>
        </Box>
        <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
            <Typography sx={{color:'#fff'}} p={2} variant='h4' fontWeight='bold' mb={2}>{selectedCategory}<span style={{color:'#F31503'}}>Videos</span>
                
            </Typography>
            <Video videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed