import React from 'react';
import { Link } from 'react-router-dom';
import ContentCardItem from './ContentCardItem';

function Fest_Content() {
  return (
    <div style={{'margin':'2rem 2rem','padding':'1rem 2rem','borderRadius':'24px','backgroundColor':'rgba(255, 153, 0, 0.05)','fontFamily':'Inter'}}>
       <Link to='/' style={{'textDecoration':'none'}}>
            <p style={{'color':'#4B002D','fontSize':'14px','lineHeight':'28px','marginBottom':'2rem'}}>Home</p>
       </Link>
       <p style={{'color':'black','fontSize':'24px','fontWeight':'600','lineHeight':'28px'}}>Festivals</p>
       <div style={{'display':'flex','justifyContent':'space-between','alignContent':'center'}}>
            <p style={{'color':'#4C4C4C','font-style': 'normal','fontSize':'16px','fontWeight':'400','lineHeight':'28px'}}>Secrets & Stories of India’s Sacred Festivals</p>
            <div style={{'display':'flex','justifyContent':'space-between','alignContent':'center'}}>
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
       <div className='content__container' style={{'margin':'3rem 0rem'}}>
       <ContentCardItem
                      path='/festivals/{1}'
                      src='t4.svg'
                      author='Vikram Seth'
                      posted='Jan, 2022'
                      time_to_read='5 min read'
                      heading='Holi'
                      description='The ancient tantric temple, where the Goddess is worshipped as Siddha Kubjika, is one of the Shakti Peeths where the womb and the...'
          />
          <ContentCardItem 
                      src='rakhi 1.svg'
                      author='Robin Sharma'
                      posted='Apr, 2022'
                      time_to_read='2 min read '
                      heading='Rakhi'
                      description='Also known as the Veerabhadra Temple, this ancient Vijaynagara-styled compound articulates the exotic stone carvings and profuses every bit...'
          />
          <ContentCardItem 
                      src='fest.svg'
                      author='Harry Potter'
                      posted='Mar, 2022'
                      time_to_read='3 min read'
                      heading='Diwali'
                      description='Whoever plans a visit to the panorama of the Himalayas and enjoying the snow of Manali, Hidimba Temple gets automatically named on the bucket-list....'
          />
          <ContentCardItem 
                      src='char.svg'
                      author='Arundhati Roy '
                      posted='Oct, 2022'
                      time_to_read='5 min read'
                      heading='Ganesh Chaturdhi'
                      description='Ajanta and Ellora, the eternal flame of mysticism, mythical and mysterious set of caves dedicated to Hindu Gods and Lord Buddha....'
            />
        
                      
      </div>
      <nav aria-label="Search results pages">
        <ul class="pagination justify-content-center pagination-circle">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul> 
      </nav>
    </div>
  )
}

export default Fest_Content
