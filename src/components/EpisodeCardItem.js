import React from 'react';
import { Link } from 'react-router-dom';

function EpisodeCardItem(props) {
  return (
    
      <div className='ccardItem'>
        <figure>
        <Link to={props.path} style={{'textDecoration':'none'}}>
          <img src={props.src} alt='' />
          <br></br>
          <br></br>
          <p style={{ 'color': 'black' }}><span style={{ 'margin': '20px 0px', color: 'black', 'fontSize': '20px', 'fontWeight': 'bold' }}>{props.episode_id}.{props.heading} </span> |  <span style={{ color: 'black', 'fontSize': '14px' }}>{props.time_to_read}</span></p>
          <p style={{ color: 'black', 'fontSize': '16px', 'width': '320px' }}>{props.description}</p>
          </Link>
        </figure>
      </div>
    
  )
}

export default EpisodeCardItem
