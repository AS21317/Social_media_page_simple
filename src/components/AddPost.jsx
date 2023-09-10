import styled from '@emotion/styled'
import { Add as AddIcon, DateRange, DeleteOutline, EmojiEmotions } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';


// const StyledModal = styled(Modal)({
//   display:'flex',
//    justifyContent:'center',
//    alignItems:'center'
// })

const AddPost = () => {

  const [open , setOpen] = useState(false)
  return (
    <>
    <Tooltip
     onClick={e=>setOpen(true)}
    title="Add Post" sx={{position:'fixed' , bottom:20, left:{xs:"calc(50%-25px)", md:30} }}>
   
   <Fab size="small" color="secondary" aria-label="add">
     <AddIcon/>

</Fab>
  
 </Tooltip>

<Modal   sx={{display:'flex' , justifyContent:'center', alignItems:'center'}}
 open={open}
 onClose={e=>setOpen(false)}
 aria-labelledby="modal-modal-title"
 aria-describedby="modal-modal-description"
>
 <Box  width={400} height={280} bgcolor={'white'} padding={2} borderRadius={5}>
  <Typography  variant='h5' textAlign={'center'} color={'gray'} >Create Post</Typography>
  <Box  sx={{display:'flex', alignItems:'center',gap:2}}>
    <Avatar src='https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    <Typography>Ashish Singh</Typography>
  </Box>

  <TextField
          id="standard-multiline-static"
       sx={{width:'90%',}}     
          multiline
          rows={3}
          placeholder="What's on your Mind"
          variant="standard"
        />

        <Stack direction={'row' } gap={1} mt={2} mb={3}>
          <EmojiEmotions color='primary'/>
         <ImageIcon color='secondary'/>
         <VideoCameraBackIcon color='success'/>
         <PersonAddAltIcon color='error'/>
        
           


        </Stack>

        <ButtonGroup
         variant="contained"
         fullWidth 
         
         aria-label="outlined primary button group">
  <Button >Post</Button>
  <Button sx={{width:'100px'}}> <DateRange/> </Button>
</ButtonGroup>
 </Box>
</Modal>

    </>
  
  )
}

export default AddPost