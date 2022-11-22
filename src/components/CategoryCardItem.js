import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCardItem(props) {
  return (
    <Link to={props.path}>
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
    </Link>
  )
}


export default CategoryCardItem

