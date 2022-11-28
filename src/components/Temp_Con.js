import React,{useState, useMemo} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import DownloadForOfflineSharpIcon from '@mui/icons-material/DownloadForOfflineSharp';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import TurnedInNotRoundedIcon from '@mui/icons-material/TurnedInNotRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Pagination from '@mui/material/Pagination';
import { MDBBtn } from 'mdb-react-ui-kit';

function Temp_Con() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div style={{'margin':'2rem 2rem','padding':'2rem 2rem','borderRadius':'24px','backgroundColor':'rgba(255, 153, 0, 0.05)','fontFamily':'Inter'}}>
        <div className='bc-icons-2' >
         <nav aria-label="breadcrumb">
              <ol class="breadcrumb purple lighten-4">
              <li class="breadcrumb-item"><a class="black-text" href="/" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Home</a><i class="fas fa-angle-right mx-2"
                  aria-hidden="true"></i></li>
              <li class="breadcrumb-item"><a class="black-text" href="/temples" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Temples</a></li>
              </ol>
          </nav>
          </div>
          <div style={{'display':'flex','justifyContent':'space-between','alignContent':'center','color':'black'}}>
              <p style={{'color':'#4B002D','fontSize':'24px','fontWeight':'600','lineHeight':'28px','padding':'1rem'}}>Lepakshi Veerabhadra Swamy Temple, Andhra Pradesh</p>
              <div style={{'display':'flex','justifyContent':'space-between','alignContent':'center'}}>
                      <div style={{'display':'flex','justifyContent':'center','alignContent':'center','color':'black'}}>
                      <ListItemIcon>
                          <VolumeUpRoundedIcon />
                      </ListItemIcon>
                      
                      <ListItemIcon>
                          <TurnedInNotRoundedIcon />
                      </ListItemIcon>
                      
                      <a
                              id="fade-button"
                              aria-controls={open ? 'fade-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={handleClick}
                          >
                              <MoreVertRoundedIcon />
                      </a>
                      <Menu
                          id="fade-menu"
                          MenuListProps={{
                          'aria-labelledby': 'fade-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          TransitionComponent={Fade}>
                          <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                              <ShareSharpIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>Share</ListItemText>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                              <DownloadForOfflineSharpIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>Download</ListItemText>
                          </MenuItem>
                      </Menu>
                      </div>
              </div>
  
         </div>
         <div style={{'marginLeft':'4rem','margin':'2rem 4rem'}}>
         <img src='../../tcon1.svg'></img>
         <p style={{'margin':'2rem'}}>
         Also known as the Veerabhadra Temple, this ancient Vijaynagara-styled compound articulates the exotic stone carvings and profuses every bit of what India was famous for. The fresco paintings of Rama and Krishna, the central monument with tales from Purana and the mount of Lord Shiva from a single rock (supposedly the largest in the world), this 16th-century temple cultivates every bit of your curiosity. What's astounding is the fact that it is also known as the Hanging Temple of India for the fact that all the 70 marvellous stone pillars that support the Veerabhadra Varbhagriha are not touching the ground. The reason for this remains a mystery!  </p>
         <p style={{'margin':'2rem'}}>
         The guide whipped out a twig from his shirt pocket with a flourish and said dramatically: “Now I show you best part of Lepakshi temple.” He got down on his knees before the large grey pillar before us. Bending forward, he passed the twig slowly under the pillar. From one end to the other! There was an audible gasp from the group of tourists, mostly Europeans, as the twig emerged from the other side. He repeated the exercise with a page of an old grimy newspaper which he pulled out from another pocket.
         </p>
  
         </div>
         <div style={{'textAlign':'center','display':'flex','justifyContent':'space-between','alignContent':'center','margin':'3rem 3rem'}} >
          <MDBBtn outline color='warning' size='lg' style={{'color':'black'}}>Previous</MDBBtn>
         <Pagination
          count={1}
          />
          <MDBBtn outline color='warning' size='lg' style={{'color':'black'}}>Next</MDBBtn>
         </div>
  
  
      </div>
    )
}

export default Temp_Con
