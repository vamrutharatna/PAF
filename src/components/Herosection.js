import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarouselItem from './CarouselItem';
import { myAxios } from '../services/Helper'
import {
    loadMythologyStory,
    loadCharacters,
    loadFestivals,
    loadTemples
} from '../services/StoryService';
import { toast } from 'react-hot-toast';
import './style.css'
import {
    MDBBtn,
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
function Carousel() {

    const { storyId } = useParams();
    const [mythologyStory, setMythologyStory] = useState([]);
    const [charecter, setCharacter] = useState([]);
    const [festival, setfestival] = useState([]);
    const [temple, setTemple] = useState([]);

    useEffect(() => {
        // load post of postId 
        loadMythologyStory().then(data => {
            console.log(data);
            setMythologyStory(data)
        }).catch(error => {
            console.log(error)
            toast.error("Error in loading")
        })

    }, [])

    useEffect(() => {
        // load post of postId 
        loadCharacters().then(data => {
            console.log(data);
            setCharacter(data)
        }).catch(error => {
            console.log(error)
            toast.error("Error in loading")
        })

    }, [])

    useEffect(() => {
        // load post of postId 
        loadFestivals().then(data => {
            console.log(data);
            setfestival(data)
        }).catch(error => {
            console.log(error)
            toast.error("Error in loading")
        })

    }, [])

    useEffect(() => {
        // load post of postId 
        loadTemples().then(data => {
            console.log(data);
            setTemple(data)
        }).catch(error => {
            console.log(error)
            toast.error("Error in loading")
        })

    }, [])

    return (
        <div style={{ 'margin': '2rem 3rem' }} className='hero__div'>
            <MDBCarousel showControls showIndicators >

                <CarouselItem
                    id={1}
                    img='shri_ram.jpg'
                    title={mythologyStory.title}
                    description={mythologyStory.description}
                    views={mythologyStory.views}
                    author='PoojaArchana Team'
                />

                <CarouselItem
                    id={2}
                    img='krishna.png'
                    title={charecter.title}
                    description={charecter.description}
                    views={charecter.views}
                    author='PoojaArchana Team'
                />

                <CarouselItem
                    id={3}
                    img='holi.jpg'
                    title={festival.title}
                    description={festival.description}
                    views={festival.views}
                    author='PoojaArchana Team'
                />

                <CarouselItem
                    id={4}
                    img='somnath.jpg'
                    title={temple.title}
                    description={temple.description}
                    views={temple.views}
                    author='PoojaArchana Team'
                />

            </MDBCarousel>
        </div>
        // <div style={{'margin':'2rem 3rem'}} className='hero__div'>
        // <MDBCarousel showControls showIndicators >
        //     <MDBCarouselItem
        //         className='w-100 d-block hero__img'
        //         itemId={1}
        //         src='siva1.png'
        //         alt='...'
        //     >
        //         <div className='hero__items'>
        //             <h1><b>The Significance of Adiyogi</b></h1>
        //             <br></br>

        //             <p>
        //                 By <span style={{color:'orangered'}}>Sadhguru</span>  |  May 23, 2022 |  235 <i className='fa fa-eye'></i>
        //             </p>
        //             <p>
        //             The significance of Adiyogi or Shiva is just this – no such event happened. There was no war, there was no strife. He did not cater to the needs of the day. He provided tools and methods to evolve human consciousness in such a way ...
        //             </p>
        //             <br></br>
        //             <span>
        //             <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Historical </MDBBtn>
        //             <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Worship </MDBBtn>
        //             <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> God </MDBBtn>
        //             </span>
        //             <br></br>
        //             <br></br>
        //             <MDBBtn color='warning' size='lg' style={{color:'black'}}>Read More</MDBBtn>
        //             <br></br>
        //         </div>

        //     </MDBCarouselItem>
        //     <MDBCarouselItem
        //         className='w-100 d-block hero__img'
        //         itemId={2}
        //         src='siva1.png'
        //         alt='...'
        //     >
        //         <div className='hero__items'>
        //             <h1><b>The Significance of Adiyogi</b></h1>
        //             <br></br>

        //             <p>
        //                 By <span style={{color:'orangered'}}>Sadhguru</span>  |  May 23, 2022 |  235 <i className='fa fa-eye'></i>
        //             </p>
        //             <p>
        //             The significance of Adiyogi or Shiva is just this – no such event happened. There was no war, there was no strife. He did not cater to the needs of the day. He provided tools and methods to evolve human consciousness in such a way ...
        //             </p>
        //             <br></br>
        //             <span>
        //             <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Historical </MDBBtn>
        //             <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Worship </MDBBtn>
        //             <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> God </MDBBtn>
        //             </span>
        //             <br></br>
        //             <br></br>
        //             <MDBBtn color='warning' size='lg' style={{color:'black'}}>Read More</MDBBtn>
        //             <br></br>
        //         </div>
        //     </MDBCarouselItem>
        //     <MDBCarouselItem
        //         className='w-100 d-block hero__img'
        //         itemId={3}
        //         src='siva1.png'
        //         alt='...'
        //     >
        //         <div className='hero__items'>
        //             <h1><b>The Significance of Adiyogi</b></h1>
        //             <br></br>

        //             <p>
        //                 By <span style={{color:'orangered'}}>Sadhguru</span>  |  May 23, 2022 |  235 <i className='fa fa-eye'></i>
        //             </p>
        //             <p>
        //             The significance of Adiyogi or Shiva is just this – no such event happened. There was no war, there was no strife. He did not cater to the needs of the day. He provided tools and methods to evolve human consciousness in such a way ...
        //             </p>
        //             <br></br>
        //             <span>
        //             <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Historical </MDBBtn>
        //             <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> Worship </MDBBtn>
        //             <MDBBtn outline rounded className='mx-2' color='dark' style={{color:'white'}}> God </MDBBtn>
        //             </span>
        //             <br></br>
        //             <br></br>
        //             <MDBBtn color='warning' size='lg' style={{color:'black'}}>Read More</MDBBtn>
        //             <br></br>
        //         </div>
        //     </MDBCarouselItem>
        // </MDBCarousel>
        // </div>
    );
}

export default Carousel