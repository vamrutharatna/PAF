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

function Fest_Con() {
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
              <li class="breadcrumb-item"><a class="black-text" href="/festivals" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Festivals</a></li>
              </ol>
          </nav>
          </div>
          <div style={{'display':'flex','justifyContent':'space-between','alignContent':'center','color':'black'}}>
              <p style={{'color':'#4B002D','fontSize':'24px','fontWeight':'600','lineHeight':'28px','padding':'0.5rem'}}>Holi</p>
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
         <div style={{'marginLeft':'3rem','margin':'2rem 4rem'}}>
         <img src='../../fcon1.svg'></img>
         <p style={{'margin':'2rem'}}>
         In the Braj region of India, where the Hindu deities Radha and Krishna grew up, the festival is celebrated until Rang Panchmi in commemoration of their divine love for each other. The festivities officially usher in spring, with Holi celebrated as a festival of love. Garga Samhita, a puranic work by Sage Garga was the first literature to mention the romantic description of Radha and Krishna playing Holi. There is also a popular symbolic legend behind the festival. In his youth, Krishna despaired whether the fair-skinned Radha would like him because of his dark skin colour. His mother Yashoda, tired of his desperation, asks him to approach Radha and ask her to colour his face in any colour she wanted. This Radha did, and Radha and Krishna became a couple. Ever since, the playful colouring of Radha and Krishna's face has been commemorated as Holi. Beyond India, these legends help to explain the significance of Holi (Phagwah) are common in some Caribbean and South American communities of Indian origin such as Guyana and Trinidad and Tobago. It is also celebrated with great fervour in Mauritius. </p>
        <p style={{'margin':'2rem'}}>
        The Holi festival has a cultural significance among various Hindu traditions of the Indian subcontinent. It is the festive day to end and rid oneself of past errors, to end conflicts by meeting others, a day to forget and forgive. People pay or forgive debts, as well as deal anew with those in their lives. Holi also marks the start of spring, an occasion for people to enjoy the changing seasons and make new friends.         </p>
        <p style={{'margin':'2rem'}}>
        People celebrate Holi with utmost fervour and enthusiasm, especially in North India. One day before Holi, people conduct a ritual called ‘Holika Dahan’. In this ritual, people pile heaps of wood in public areas to burn. It symbolizes the burning of evil powers revising the story of Holika and King Hiranyakashyap. Furthermore, they gather around the Holika to seek blessings and offer their devotion to God.
        </p>
        <p style={{'margin':'2rem'}}>
        The next day is probably the most colourful day in India. People get up in the morning and offer pooja to God. Then, they dress up in white clothes and play with colours. They splash water on one another. Children run around splashing water colours using water guns. Similarly, even the adults become children on this day. They rub colour on each other’s faces and immerse themselves in water.        </p>
        <p style={{'margin':'2rem'}}>
        In the evening, they bathe and dress up nicely to visit their friends and family. They dance throughout the day and drink a special drink called the ‘bhaang’. People of all ages relish holi’s special delicacy ‘gujiya’ ardently.        </p>
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

export default Fest_Con
