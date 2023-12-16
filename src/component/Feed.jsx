import React from 'react'
import { useState,useEffect } from 'react'
import { Stack,Box,Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Video from './Video'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>

        <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
            <Sidebar/>

            <Typography variant='body2'className='copyright' sx={{color:'#fff',mt:'1.5px'}}>
                copyright 2022 jsm media
            </Typography>
        </Box>
        <Box>
            <Typography sx={{color:'#fff'}} p={2} variant='h4' fontWeight='bold'>New <span style={{color:'#F31503'}}>Videos</span>
                
            </Typography>
            <Video/>
        </Box>
    </Stack>
  )
}

export default Feed