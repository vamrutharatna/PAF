import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentCardItem from './ContentCardItem';
import { load } from '../services/StoryService';
import { toast } from 'react-hot-toast';
import { myAxios } from '../services/Helper';

function Myth_Content() {

  const [myth1, setMyth1] = useState([]);
  const [myth2, setMyth2] = useState([]);
  const [myth3, setMyth3] = useState([]);
  const [myth4, setMyth4] = useState([]);

  useEffect(() => {
    // load post of postId 
    load(1).then(data => {
      console.log(data);
      setMyth1(data)
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])

  useEffect(() => {
    // load post of postId 
    load(3).then(data => {
      console.log(data);
      setMyth2(data)
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])

  useEffect(() => {
    // load post of postId 
    load(2).then(data => {
      console.log(data);
      setMyth3(data)
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])

  useEffect(() => {
    // load post of postId 
    load(13).then(data => {
      console.log(data);
      setMyth4(data)
    }).catch(error => {
      console.log(error)
      toast.error("Error in loading")
    })

  }, [])


  return (
    <div style={{ 'margin': '2rem 2rem', 'padding': '1rem 2rem', 'borderRadius': '24px', 'backgroundColor': 'rgba(255, 153, 0, 0.05)', 'fontFamily': 'Inter' }}>
      <Link to='/'>
        <p style={{ 'color': '#4B002D', 'fontSize': '14px', 'lineHeight': '28px', 'marginBottom': '2rem' }}>Home</p>
      </Link>
      <p style={{ 'color': 'black', 'fontSize': '24px', 'fontWeight': '600', 'lineHeight': '28px' }}>Mythology Stories</p>
      <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignContent': 'center' }}>
        <p style={{ 'color': '#4C4C4C', 'font-style': 'normal', 'fontSize': '16px', 'fontWeight': '400', 'lineHeight': '28px' }}>Check out our interesting stories. Click on any one to dive into the episodes of Mythology!</p>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignContent': 'center' }}>
          <label>Sort By:</label>
          <div class="input-field col s12 sort_div">
            <select className='sort'>
              <option value="1" selected>Most Popular</option>
              <option value="2">Latest First</option>
              <option value="3">Oldest First</option>
              <option value="4">Shortest First</option>
              <option value="5">Highest First</option>
            </select>
          </div>
        </div>
      </div>
      <div className='content__container' style={{ 'margin': '3rem 0rem' }}>
        <ContentCardItem
          path='/mythological-stories/episodes'
          src={myth1.imageName}
          author='Robin Sharma'
          posted='Apr, 2022'
          time_to_read='7 Episodes'
          heading={myth1.title}
          description={myth1.description}
        />
        <ContentCardItem
          src={myth2.imageName}
          author='Harry Potter'
          posted='Mar, 2022'
          time_to_read='10 Episodes'
          heading={myth2.title}
          description={myth2.description}
        />
        <ContentCardItem
          src={myth3.imageName}
          author='Vikram Seth'
          posted='Jan, 2022'
          time_to_read='5 Episodes'
          heading={myth3.title}
          description={myth3.description}
        />
        <ContentCardItem
          src={myth4.imageName}
          author='Arundhati Roy '
          posted='Oct, 2022'
          time_to_read='10 Episodes'
          heading={myth4.title}
          description={myth4.description}
        />
        {/* <ContentCardItem
          src='m1.svg'
          author='Robin Sharma'
          posted='Apr, 2022'
          time_to_read='7 Episodes'
          heading='Ramayana The Epic'
          description='Once, Bhagiratha asked Brahma to bring the river Ganges down to earth to purify the souls of his ancestors and help them to attain nirvana...'
        />
        <ContentCardItem
          src='m2.svg'
          author='Harry Potter'
          posted='Mar, 2022'
          time_to_read='10 Episodes'
          heading='Bhagvad Gita'
          description='Once, Bhagiratha asked Brahma to bring the river Ganges down to earth to purify the souls of his ancestors and help them to attain nirvana...'
        />
        <ContentCardItem
          src='m3.svg'
          author='Vikram Seth'
          posted='Jan, 2022'
          time_to_read='5 Episodes'
          heading='Mahabharat'
          description='Once, Bhagiratha asked Brahma to bring the river Ganges down to earth to purify the souls of his ancestors and help them to attain nirvana...'
        />
        <ContentCardItem
          src='m4.svg'
          author='Arundhati Roy '
          posted='Oct, 2022'
          time_to_read='10 Episodes'
          heading='RadheKrishna Tales'
          description='Once, Bhagiratha asked Brahma to bring the river Ganges down to earth to purify the souls of his ancestors and help them to attain nirvana...'
        /> */}
      </div>
    </div>
  )
}

export default Myth_Content
