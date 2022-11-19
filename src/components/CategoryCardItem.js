import React from 'react';

function CategoryCardItem(props) {
  return (
    <div>
      <div>
        <img src={props.img_path}></img>
      </div>
      <div>
        <h6 style={{'padding':'20px 10px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter'}}>
            {props.heading}
        </h6>
      </div>
    </div>
  )
}


export default CategoryCardItem

