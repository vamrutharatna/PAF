import React from 'react';
import ITCardItem from './ITCardItem';


function RC2Section() {
  return (
    <div style={{'margin':'2rem 2rem'}}>
      <h5 style={{'padding':'5px 10px','marginBottom':'40px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter'}}>Mythological Heroes & Characters</h5>
      <div className='rtsection__container'>
          <ITCardItem 
          img_path='../rc5.svg'
          heading='Saraswati The Goddess of Wisdom'
          />
          <ITCardItem 
          img_path='../rc6.svg'
          heading='Vishnu The God of Preservation'

          />
          <ITCardItem 
          img_path='../rc7.svg'
          heading='Brahma The God of Creation'
          />
          <ITCardItem 
          img_path='../rc8.svg'
          heading='Parvati The Goddess of Power'
          />
      </div>
        
    </div>
  )
}

export default RC2Section
