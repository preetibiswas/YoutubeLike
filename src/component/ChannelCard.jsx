/* eslint-disable react/prop-types */
import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
const ChannelCard = ({ ChannelDetails }) => {
  console.log(ChannelDetails)
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
      }}
    >
      <Link to={`/channelDetails?.id?.channelId`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={
              ChannelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={ChannelDetails?.snippet?.title}
            sx={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6" sx={{ color: '#fff' }}>
            {ChannelDetails?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'grey', ml: '5px' }} />
          </Typography>
          {ChannelDetails?.statistics?.subscriberCount && (
            <Typography>{parseInt(ChannelDetails?.statistics?.subscriberCount).toLocaleString()}</Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
