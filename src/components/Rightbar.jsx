import { Start } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageListItem,
  ImageList,
  Typography,
  List,
  ListItemText,
  ListItemAvatar,
  ListItem
} from "@mui/material";
import React from "react";
import LatestConversation from "./LatestConversation";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}  width={300} alignItems={'flex-start'}>
        <Typography variant="h5">Onliine Friends </Typography>
        <AvatarGroup max={4} >
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/53581/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/248241/pexels-photo-248241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </AvatarGroup>

     
 <Typography variant="h5" mt={2}>Latest Photos </Typography>
        <ImageList  cols={3} rowHeight={100}  gap={15}>
          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt="IMAGE"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/2228583/pexels-photo-2228583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="IMAGE"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/2904979/pexels-photo-2904979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="IMAGE"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/2922353/pexels-photo-2922353.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`}
              alt="IMAGE"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/576739/pexels-photo-576739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="IMAGE"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt="IMAGE"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>



{/* Code for latest conversations part  */}


 <Typography variant="h5" mt={3}>Latest Conversations </Typography>

 

<LatestConversation/>
<LatestConversation/>
<LatestConversation/>
<LatestConversation/>
<LatestConversation/>
<LatestConversation/>
<LatestConversation/>


      
      </Box>
    </Box>
  );
};

export default Rightbar;
