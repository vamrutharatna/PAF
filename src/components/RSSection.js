import React from 'react';
import ITCardItem from './ITCardItem';

function RSSection() {
  return (
    <div style={{'margin':'2rem 2rem'}}>
      <h5 style={{'padding':'5px 10px','marginBottom':'40px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter'}}>Read next episodes of Ramayana The Epic</h5>
      <div className='rtsection__container'>
          <ITCardItem 
          img_path='../../rs1.svg'
          heading='Ayodhya Kanda'
          />
          <ITCardItem 
          img_path='../../rs2.svg'
          heading='Aranya Kanda'
          />
          <ITCardItem 
          img_path='../../rs3.svg'
          heading='Kishkindha kanda'
          />
          <ITCardItem 
          img_path='../../rs4.svg'
          heading='Sundara Kanda'
          />
      </div>
        
    </div>
  )
}

export default RSSection
