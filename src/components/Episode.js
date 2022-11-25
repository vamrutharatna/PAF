
import React,{useState, useMemo} from 'react';
import Button from '@mui/material/Button';
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
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MDBBtn } from 'mdb-react-ui-kit';

function Episode() {
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
            <li class="breadcrumb-item"><a class="black-text" href="/mythological-stories" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Mythology Stories</a><i class="fas fa-angle-right mx-2"
                aria-hidden="true"></i></li>
            <li class="breadcrumb-item"><a class="black-text" href="/mythological-stories" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Ramayana The Epic</a><i class="fas fa-angle-right mx-2"
                aria-hidden="true"></i></li>
            <li class="breadcrumb-item active" style={{'color':'#4B002D','fontSize':'16px','lineHeight':'28px','marginBottom':'2rem'}}>Bala Kanda</li>
            </ol>
        </nav>
        </div>
        <div style={{'display':'flex','justifyContent':'space-between','alignContent':'center'}}>
            <p style={{'color':'#4B002D','fontSize':'24px','fontWeight':'600','lineHeight':'28px'}}>Bala Kanda: Preparing for the renowned mission</p>
            <div style={{'display':'flex','justifyContent':'space-between','alignContent':'center'}}>
                    <div style={{'display':'flex','justifyContent':'center','alignContent':'center'}}>
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
       <img src='../../story.svg'></img>
       <p style={{'margin':'2rem'}}>
       Dasharatha was the king of Ayodhya and had three wives – Kausalya (eldest wife. She was the daughter of the King of Kosala Kingdom), Kaikeyi (second wife. Kaikeyī belonged ruling family of the Kekaya clan), Sumitra (third wife. She came from the ancient kingdom of Kashi.) but no children.
The thought of his dynasty ending with him saddened King Dasharatha and he was very eager to have a son who would take care of the throne of Ayodhya.
King Dasharatha visited the royal family’s Guru, Vashistha and narrated his problem. Vasistha comforted King Dashrath by telling him that he would have four sons.
With King Dasharath’s consent, Guru Vashistha summoned Rishi Shringi to perform the Putra-Kam yagna (sacrificial fire for the birth of sons). The gods gave him with a bowl of divine nectar.
</p>
<p style={{'margin':'2rem'}}>
As the three queens sat to eat their share of the prasadam, an eagle snatched Sumitra’s share. To console Sumitra, Kaikeyi and Kausalya gave half of their share each to Sumitra. With Kausalya and Kaikeyi each bearing one son i.e. Rama was born to Kausalya, Bharata was born to Kaikeyi, and Sumitra gave birth to twins i.e. Lakshman and Shatrughan ( Ram portrayed as the seventh avatar of the God Vishnu who had opted to be born into mortality in order to combat the demon Ravan, who was oppressing the Gods, and who could only be destroyed by a mortal.
While Bharata and Shatrughna are his disc and conch-shell, Lakshman is portrayed as an avatar of the Shesha, the nag associated with the God Vishnu.)
</p>
<p style={{'margin':'2rem'}}>
Rishi (Sage) Viswamitra trained the sons of King Dasharath in the art of firing missile-arrows imbibed with secret chants that could cause the arrows to shower fire or water on its enemies, and even follow them through the seven worlds until they’re killed.
When Ram was 16 years old, Rishi Vishvamitra visited to the court of King Dasharatha where the King received him with great honour. Rishi Viswamitra lived in the forest and was performing great sacrifices. However, the rakshas (Rakshas) Mericha and Subahu were disturbing sacrificial rites.
He knew that Rama had taken birth on earth to protect his devotees and so he decided to visit King Dasharatha to ask him for favour. The Rishi asked the king to send his sons to the forest with him. Reluctantly the king agreed.
</p>
<p style={{'margin':'2rem'}}>

Rishi Vishwamtra took Rama and Lakshmana, to his ashram, as he needed Ram’s help in slaying several Rakshas that had been harassing him and several other Rishis living in the area.
Ram encountered his first problem-female rakshasi (demoness) Tadaka, Tadaka, a cursed yaksha demoness. When asked to slay the rakshasi, Rama considered it sinful to kill a woman. Rishi Vishwamitra explained that evil had no gender. The killing of Tadaka liberates the yaksha soul who was cursed for a sin, and had to adopt a rakshasi’s body.


       </p>

       </div>
       <div style={{'textAlign':'center','display':'flex','justifyContent':'space-between','alignContent':'center','margin':'3rem 3rem'}} >
        <MDBBtn outline color='warning' size='lg' style={{'color':'black'}}>Previous Episode</MDBBtn>
       <Pagination
        count={3}
        renderItem={(item) => (
            <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            />
        )}
        />
        <MDBBtn outline color='warning' size='lg' style={{'color':'black'}}>Next Episode</MDBBtn>
       </div>


    </div>
  )
}

export default Episode
