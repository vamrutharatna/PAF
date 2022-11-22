import React from 'react';
import { Link } from 'react-router-dom';
import ContentCardItem from './ContentCardItem';


function Myth_Content() {
  return (
    <div style={{'margin':'2rem 2rem','padding':'1rem 2rem','borderRadius':'24px','backgroundColor':'rgba(255, 153, 0, 0.05)','fontFamily':'Inter'}}>
       <Link to='/'>
            <p style={{'color':'#4B002D','fontSize':'14px','lineHeight':'28px','marginBottom':'2rem'}}>Home</p>
       </Link>
       <p style={{'color':'black','fontSize':'24px','fontWeight':'600','lineHeight':'28px'}}>Mythology Stories</p>
       <div style={{'display':'flex','justifyContent':'space-between','alignContent':'center'}}>
            <p style={{'color':'#4C4C4C','font-style': 'normal','fontSize':'16px','fontWeight':'400','lineHeight':'28px'}}>Check out our interesting stories. Click on any one to dive into the episodes of Mythology!</p>
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
                      path='/mythological-stories/episodes'
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
                      description='Once, Bhagiratha asked Brahma to bring the river Ganges down to earth to purify the souls of his ancestors and help them to attain nirvana...'/>
          <ContentCardItem 
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
                      description='Once, Bhagiratha asked Brahma to bring the river Ganges down to earth to purify the souls of his ancestors and help them to attain nirvana...'/>
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

export default Myth_Content
