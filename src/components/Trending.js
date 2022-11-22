import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrendingCardItem from './TrendingCardItem'
import './style.css'
import {
  loadMythologyStory,
  load
} from '../services/StoryService';
import { toast } from 'react-hot-toast';

function Trending() {

  const [story, setStory] = useState([]);

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
          src='t2.svg'
          author='Arundhati Roy'
          posted='Sep 14, 2022'
          time_to_read='3 min'
          heading='The Ramayana Retold'
          description='The story of Ramayan is one of the most popular epics of all times. Ramayana literally means “the journey of Lord Ram”....'
        />
        <TrendingCardItem
          src='t3.svg'
          author='Vikram Seth'
          posted='Oct 09, 2022'
          time_to_read='5 min'
          heading='India’s Religious Capital'
          description='Also known as Banaras or Benaras, this holy city is located in the southeastern part of the state of Uttar Pradesh in northern India....'
        />
        <TrendingCardItem
          src='t4.svg'
          author='Amitav Ghosh'
          posted='Apr 18, 2012'
          time_to_read='3 min'
          heading='The Story of Holi'
          description='Holi gets its name from Holika, demon king Hiranyakashyap’s sister. Hiranyakashyap had got a boon from Lord Vishnu that he would not....'
        />
      </div>
    </div>
  )
}

export default Trending
