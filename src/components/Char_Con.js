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

function Char_Con() {
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
              <li class="breadcrumb-item"><a class="black-text" href="/characters" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Characters</a></li>
              </ol>
          </nav>
          </div>
          <div style={{'display':'flex','justifyContent':'space-between','alignContent':'center','color':'black'}}>
              <p style={{'color':'#4B002D','fontSize':'24px','fontWeight':'600','lineHeight':'28px','padding':'0.5rem'}}>Lord Siva</p>
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
         <div style={{'marginLeft':'2rem','margin':'2rem 4rem'}}>
         <img src='../../ccon1.svg'></img>
         <p style={{'margin':'2rem'}}>
         Shiva (Siva) is one of the most important gods in the Hindu pantheon and is considered a member of the holy trinity (trimurti) of Hinduism with Brahma and Vishnu. A complex character, he may represent goodness, benevolence and serve as the Protector. He is also associated with Time, and particularly as the destroyer and creator of all things.         </p>
        <p style={{'margin':'2rem'}}>
        In Hinduism, the universe is thought to regenerate in cycles (every 2,160,000,000 years). Shiva destroys the universe at the end of each cycle which then allows for a new Creation. Shiva is also the great ascetic, abstaining from all forms of indulgence and pleasure, concentrating rather on meditation as a means to find perfect happiness. He also has a darker side as the leader of evil spirits, ghosts and as the master of thieves, villains and beggars. Shiva is the most important Hindu god for the Shaivism sect, the patron of Yogis and Brahmins, and also the protector of the Vedas, the sacred texts. </p>        <p style={{'margin':'2rem'}}>
        </p>
        <p style={{'margin':'2rem'}}>
        Shiva's wife was Parvati, often incarnated as Kali and Durga. She was in fact a reincarnation of Sati (or Dakshayani), the daughter of the god Daksha. Daksha did not approve of Sati's marriage to Shiva and even went further and held a special sacrificial ceremony to all the gods except Shiva. Outraged at this slight, Sati threw herself on the sacrificial fire. Shiva reacted to this tragedy by creating two demons (Virabhadra and Rudrakali) from his hair who wreaked havoc on the ceremony and beheaded Daksha. The other gods appealed to Shiva to end the violence and, complying, he brought Daksha back to life but with the head of a ram (or goat). Sati was eventually reincarnated as Parvati in her next life and she re-married Shiva. </p>       
         <p style={{'margin':'2rem'}}>
         With Parvati, Shiva had a son, the god Ganesha. The boy was in fact created out of earth and clay to keep her company and protect her while Shiva went on his meditative wanderings. However, Shiva returned one day and, finding the boy guarding the room where Parvati was bathing, he enquired who he was. Not believing the boy was his son, and thinking him an impudent beggar, Shiva called up the bhutaganas demons who fought the boy and eventually managed to distract him with the appearance of the beautiful Maya and, whilst he admired the beauty, they lopped off his head. At the commotion, Parvati rushed from her bath and screamed that her son had been killed. Realising his error, Shiva then sent for a new head with which to make the boy whole again but the nearest at hand was of an elephant. And so Ganesha, the elephant-headed god, was born. Other sons of Shiva are Skanda or Karttikeya, the god of war and Kuvera, the god of treasures.
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

export default Char_Con
