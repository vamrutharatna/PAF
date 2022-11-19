import React from 'react';
import './style.css'
import {
    MDBBtn,
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
function Carousel() {
    return (
        <div style={{'margin':'2rem 3rem'}} className='hero__div'>
        <MDBCarousel showControls showIndicators >
            <MDBCarouselItem
                className='w-100 d-block hero__img'
                itemId={1}
                src='siva1.png'
                alt='...'
            >
                <div className='hero__items'>
                    <h1><b>The Significance of Adiyogi</b></h1>
                    <br></br>

                    <p>
                        By <span style={{color:'orangered'}}>Sadhguru</span>  |  May 23, 2022 |  235 <i className='fa fa-eye'></i>
                    </p>
                    <p>
                    The significance of Adiyogi or Shiva is just this – no such event happened. There was no war, there was no strife. He did not cater to the needs of the day. He provided tools and methods to evolve human consciousness in such a way ...
                    </p>
                    <br></br>
                    <span>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Historical </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Worship </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> God </MDBBtn>
                    </span>
                    <br></br>
                    <br></br>
                    <MDBBtn color='warning' size='lg' style={{color:'black'}}>Read More</MDBBtn>
                    <br></br>
                </div>
                
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block hero__img'
                itemId={2}
                src='siva1.png'
                alt='...'
            >
                <div className='hero__items'>
                    <h1><b>The Significance of Adiyogi</b></h1>
                    <br></br>

                    <p>
                        By <span style={{color:'orangered'}}>Sadhguru</span>  |  May 23, 2022 |  235 <i className='fa fa-eye'></i>
                    </p>
                    <p>
                    The significance of Adiyogi or Shiva is just this – no such event happened. There was no war, there was no strife. He did not cater to the needs of the day. He provided tools and methods to evolve human consciousness in such a way ...
                    </p>
                    <br></br>
                    <span>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Historical </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Worship </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> God </MDBBtn>
                    </span>
                    <br></br>
                    <br></br>
                    <MDBBtn color='warning' size='lg' style={{color:'black'}}>Read More</MDBBtn>
                    <br></br>
                </div>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block hero__img'
                itemId={3}
                src='siva1.png'
                alt='...'
            >
                <div className='hero__items'>
                    <h1><b>The Significance of Adiyogi</b></h1>
                    <br></br>

                    <p>
                        By <span style={{color:'orangered'}}>Sadhguru</span>  |  May 23, 2022 |  235 <i className='fa fa-eye'></i>
                    </p>
                    <p>
                    The significance of Adiyogi or Shiva is just this – no such event happened. There was no war, there was no strife. He did not cater to the needs of the day. He provided tools and methods to evolve human consciousness in such a way ...
                    </p>
                    <br></br>
                    <span>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Historical </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Worship </MDBBtn>
                    <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> God </MDBBtn>
                    </span>
                    <br></br>
                    <br></br>
                    <MDBBtn color='warning' size='lg' style={{color:'black'}}>Read More</MDBBtn>
                    <br></br>
                </div>
            </MDBCarouselItem>
        </MDBCarousel>
        </div>
    );
}

export default Carousel