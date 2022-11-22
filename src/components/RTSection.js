import React from 'react';
import ITCardItem from './ITCardItem';

function RTSection() {
  return (
    <div style={{'margin':'2rem 2rem'}}>
      <h5 style={{'padding':'5px 10px','marginBottom':'40px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter'}}>Secrets & Stories from India’s Sacred Places</h5>
      <div className='rtsection__container'>
          <ITCardItem 
          img_path='rt1.svg'
          heading='Mahabodhi Temple, Bihar'
          />
          <ITCardItem 
          img_path='rt2.svg'
          heading='Iskcon Temple, Uttar Pradesh'
          />
          <ITCardItem 
          img_path='rt3.svg'
          heading='Akshardham Temple, Delhi'
          />
          <ITCardItem 
          img_path='rt4.svg'
          heading='Golden Temple, Punjab'
          />
      </div>
        
    </div>
  )
}

export default RTSection
