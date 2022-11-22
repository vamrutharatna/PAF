import React from 'react';
import { Link } from 'react-router-dom';


function ContentCardItem(props) {
  return (
    <Link to={props.path}>
    <div>
      <figure>
        <img src={props.src} alt=''/>
        <br></br>
        <br></br>
        <p style={{color:'black', 'fontSize':'14px'}}>By <span style={{color:'#FF9900'}}>{props.author}</span> | {props.posted} | {props.time_to_read}</p>
        <h4 style={{'margin':'20px 0px', color:'black','fontWeight':'bold'}}>{props.heading}</h4>
        <p style={{color:'black','fontSize':'16px','width':'320px'}}>{props.description}</p>
      </figure>
    </div>
    </Link>
  )
}

export default ContentCardItem
