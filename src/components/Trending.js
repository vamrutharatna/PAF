import React, { useState, useEffect } from 'react';
import TrendingCardItem from './TrendingCardItem'
import './style.css'
import {
  load
} from '../services/StoryService';
import { toast } from 'react-hot-toast';

function Trending() {

  const [story, setStory] = useState([]);
  const [character, setCharacter] = useState([]);
  const [festival, setFestival] = useState([]);
  const [temple, setTemple] = useState([]);

  useEffect(() => {
    // load post of postId 
    load(2).then(data => {
      console.log(data);
      setStory(data)
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])

  useEffect(() => {
    // load post of postId 
    load(10).then(data => {
      console.log(data);
      setCharacter(data)
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])

  useEffect(() => {
    // load post of postId 
    load(11).then(data => {
      console.log(data);
      setFestival(data)
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])

  useEffect(() => {
    // load post of postId 
    load(12).then(data => {
      console.log(data);
      setTemple(data)
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])

  return (
    <div style={{ 'margin': '1rem 3rem', 'fontFamily': 'Inter' }}>
      <h5 style={{ 'padding': '5px 10px', 'marginBottom': '40px', color: 'black', 'fontWeight': 'bold', 'fontFamily': 'Inter' }}>Trending Stories to read</h5>
      <div className='trending__container'>
        <TrendingCardItem
          src='mahabharat.svg'
          author='Robin Sharma'
          posted='Aug 23, 2021'
          time_to_read='2 min'
          heading={story.title}
          description={story.description}
        />
        <TrendingCardItem
          src='e5.svg'
          author='Arundhati Roy'
          posted='Sep 14, 2022'
          time_to_read='3 min'
          heading={character.title}
          description={character.description}
        />
        <TrendingCardItem
          src='rakhi 1.svg'
          author='Vikram Seth'
          posted='Oct 09, 2022'
          time_to_read='5 min'
          heading={festival.title}
          description={festival.description}
        />
        <TrendingCardItem
          src='tem3.svg'
          author='Amitav Ghosh'
          posted='Apr 18, 2012'
          time_to_read='3 min'
          heading={temple.title}
          description={temple.description}
        />
      </div>
    </div>
  )
}

export default Trending
