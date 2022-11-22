import React from 'react';
import './style.css'
import {
    MDBBtn,
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
function CarouselItem(props) {

    return (

        <MDBCarouselItem
            className='w-100 d-block hero__img'
            itemId={props.id}
            src={props.img}
        >
            <div className='hero__items'>

                <h1 style={{ color: '#FFF8E1' }}><b>{props.title}</b></h1>

                <br></br>

                <p style={{ color: '#FFF8E1' }}>
                    By <span style={{ color: 'orangered' }}>{props.author}</span>  |  {props.date} |  {props.views} <i className='fa fa-eye'></i>
                </p>
                <p style={{ color: '#FFF8E1' }}>{props.description}</p>
                <br></br>
                <span>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{ color: '#FFF8E1' }}> Historical </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{ color: '#FFF8E1' }}> Worship </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{ color: '#FFF8E1' }}> God </MDBBtn>
                </span>
                <br></br>
                <br></br>
                <MDBBtn color='warning' size='lg' style={{ color: 'black' }}>Read More</MDBBtn>
                <br></br>
            </div>

        </MDBCarouselItem>



    );
}

export default CarouselItem