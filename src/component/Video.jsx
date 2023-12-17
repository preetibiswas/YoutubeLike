/* eslint-disable react/prop-types */
import { Box,Stack } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


const Video = ({videos,direction}) => {
    // console.log(videos)
    if(!videos?.length) return <p>loaing</p>

  return (
    <Stack direction={ direction ||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
    {videos.map((item, index) => (
      <Box key={index}>
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard ChannelDetails={item} />}
      </Box>
    ))}
  </Stack>
  )
}

export default Video