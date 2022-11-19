import React from 'react';
import CategoryCardItem from './CategoryCardItem';

function Category() {
  return (
    <div style={{'margin':'2rem 3rem'}}>
      <h5 style={{'padding':'5px 10px','marginBottom':'40px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter'}}>Browse Categories</h5>
      <div className='category__container'>
          <CategoryCardItem 
          img_path='myth.svg'
          heading='Mythology Stories'
          />
          <CategoryCardItem 
          img_path='char.svg'
          heading='Characters'
          />
          <CategoryCardItem 
          img_path='fest.svg'
          heading='Festivals'
          />
          <CategoryCardItem 
          img_path='temp.svg'
          heading='Temples'
          />
      </div>
        
    </div>
  )
}

export default Category
