import React from 'react';
import ITCardItem from './ITCardItem';


function RC1Section() {
  return (
    <div style={{'margin':'2rem 2rem'}}>
      <h5 style={{'padding':'5px 10px','marginBottom':'40px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter'}}>Mythological Heroes & Characters</h5>
      <div className='rtsection__container'>
          <ITCardItem 
          img_path='rc1.svg'
          heading='Viswanatha Shiva'
          />
          <ITCardItem 
          img_path='rc2.svg'
          heading='Dwarkapati'
          />
          <ITCardItem 
          img_path='rc3.svg'
          heading='Laddoo Gopal'
          />
          <ITCardItem 
          img_path='rc4.svg'
          heading='Maha Maya'
          />
      </div>
        
    </div>
  )
}

export default RC1Section
