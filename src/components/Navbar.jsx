import { Notifications, Padding, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, Toolbar, Typography,styled } from '@mui/material'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
})

const Search = styled('div')(({theme})=>({
  backgroundColor:'white',
  padding: '0 10px',
  width:'40%',
  borderRadius:theme.shape.borderRadius
  
}))

const Icons = styled(Box)(({theme})=>({
  display:'none',
  gap:'20px',
  alignItems:'center',
  [theme.breakpoints.up('sm')]:{
    display:'flex'

  }


  
}))


const UserBox = styled('div')(({theme})=>({
  display:'none',
  gap:'10px',
  alignItems:'center',
  [theme.breakpoints.down('sm')]:{
    display:'flex'

  }

}))

const Navbar = () => {
  const [open,setOpen]=useState(false);



  return (
    <AppBar position='sticky'>
      <StyledToolbar >
        <Typography 
        padding={2}
        sx={{display:{xs:'none', sm:'block'}}}
        variant='h5'>
         
       Ashish Singh
        </Typography>
        <Pets  sx={{display:{xs:'block', sm:'none'}}}/>
        <Search>
          <InputBase placeholder='search...'></InputBase>
        </Search>
        <Icons>
        <Badge badgeContent={4} color="error">
          <MailIcon />
          </Badge>

          <Badge badgeContent={4} color="error">
          <Notifications/>
          </Badge>
          <Avatar 
           onClick={(e)=>setOpen(true)}
           src='https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

          />
        </Icons>
        <UserBox  onClick={(e)=>setOpen(true)}>
        <Avatar  src='https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Typography variant='h5'>Ashish</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Navbar