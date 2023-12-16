/* eslint-disable no-unused-vars */
import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
import { Category } from '@mui/icons-material'

// eslint-disable-next-line react/prop-types
const Sidebar = ({ selectedCategory, setSelectedCategory}) => {
  
  return (
    <Stack direction='row' sx={{flexDirection:{md:'column'}, overflowY:'auto' ,height:{xs:'auto',md:'95%'}}}>
        {categories.map((c)=>(
            <button 
            key={c.name}
            className='category-btn'
            style={{ background:c.name===selectedCategory && '#FC1503',color:'white'}}
            onClick={()=>setSelectedCategory(c.name)}
            >
                <span style={{color:c.name===selectedCategory?'white':'red',marginRight:'15px'}}>{c.icon}</span>
                <span style={{opacity:c.name===selectedCategory ?'1':'0.8'}}>{c.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar