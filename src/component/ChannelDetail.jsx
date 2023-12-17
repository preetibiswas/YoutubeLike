import React from 'react'
import { useState,useEffect } from'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Video from './Video'
import ChannelCard from './ChannelCard'
import apiClient from '../utils/apiClient'

const ChannelDetail = () => {
  const {id}=useParams()

  const [channelDetail,setChannelDetail]=useState(null)
  const[videos,setVideos]=useState([])
useEffect(()=>{
  apiClient.get(`channels?part=snippet&id=${id}`).then((res)=>{setChannelDetail(res.data?.items[0]);
  console.log(res.data?.items[0])})

  apiClient.get(`search?channelId=${id}&part=snippet&order=date`).then((res)=>setVideos(res.data?.items))

},[id])
// useEffect(() => {
//   apiClient.get(`channels?part=snippet&id=${id}`).then((res) => {
//     const channelData = res.data?.items[0];
//     if (channelData) {
//       setChannelDetail(channelData);
//       console.log(channelData);
//     } else {
//       console.error("Channel data not available in the response");
//     }
//   });

//   apiClient.get(`search?channelId=${id}&part=snippet&order=date`).then((res) => setVideos(res.data?.items));

// }, [id]);
 
  console.log(id)
 
  return (
    <Box minHeight='95vh' >
      <Box>
        <div
        style={{
         
background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(188,29,253,1) 48%, rgba(252,176,69,1) 100%)',
zIndex:10,
height:'300px'

        }}
        />
        <ChannelCard ChannelDetails={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}}/>
        <Video videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail