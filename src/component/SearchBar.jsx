import React,{ useState} from 'react'
import { Paper,IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';

const SearchBar = () => {
    const [text,setText]=useState('')
  return (
    <Paper  elevation={3}  component='form' onSubmit={()=>{}} sx={{borderRadius:20,border:'1px solid #e3e3e3',pl:2, boxShadow:'none', mr:{sm:5}}}>

       <input type="text" className='search-bar' placeholder='Search...' value='' onChange={()=>{}} />
       <IconButton type='submit' sx={{p:'10px', color:'red'}}>
        <Search/>
        <AbcOutlinedIcon/>

       </IconButton>
    </Paper>
  )
}

export default SearchBar