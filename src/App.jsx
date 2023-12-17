import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar,VideoDetail,ChannelDetail,SearchFeed, Feed } from './component'
function App  ()  {
  return (
    <BrowserRouter>
    <Box sx={{background:'#000'}}>
      <Navbar/>
   
    <Routes>
      <Route path='/' element={<Feed/>}/>
      <Route path='/video/:videoId' element={<VideoDetail/>}/>
      <Route path='/channel/:id' element={<ChannelDetail/>}/>
      <Route path='/search/:text' element={<SearchFeed/>}/>
    </Routes>
    </Box>
      </BrowserRouter>
  )
}

export default App
