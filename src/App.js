import logo from './logo.svg';
import './App.css';
import {Box, Button, Stack, ThemeProvider, Typography, createTheme} from '@mui/material'
import {Add , Settings} from '@mui/icons-material'
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost';
import { useState } from 'react';

function App() {
 
  return (
   



<Box bgcolor={'Background.default'}>
      <Navbar/>
      <Stack direction={'row'} spacing={2} justifyContent="space-between">

      <Sidebar/>
      <Feed/>
      <Rightbar/>

      </Stack>
      <AddPost/>

    </Box>


 
   
  );
}

export default App;
