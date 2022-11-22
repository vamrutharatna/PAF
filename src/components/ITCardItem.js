import React from 'react'

function ITCardItem(props) {
  return (
    <div>
      <figure>
        <img src={props.img_path} alt=''></img>
        <p style={{'margin':'1.5rem 0.5rem','color':'black'}}>{props.heading}</p>
      </figure>
    </div>
  )
}

export default ITCardItem
