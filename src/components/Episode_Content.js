import React from 'react';
import { Link } from 'react-router-dom';
import EpisodeCardItem from './EpisodeCardItem';


function Episode_Content() {
  return (
    <div style={{'margin':'2rem 2rem','padding':'2rem 2rem','borderRadius':'24px','backgroundColor':'rgba(255, 153, 0, 0.05)','fontFamily':'Inter'}}>
       <div className='bc-icons-2' >
       <nav aria-label="breadcrumb">
            <ol class="breadcrumb purple lighten-4">
            <li class="breadcrumb-item"><a class="black-text" href="/" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Home</a><i class="fas fa-angle-right mx-2"
                aria-hidden="true"></i></li>
            <li class="breadcrumb-item"><a class="black-text" href="/mythological-stories" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Mythology Stories</a><i class="fas fa-angle-right mx-2"
                aria-hidden="true"></i></li>
            <li class="breadcrumb-item active" style={{'color':'#4B002D','fontSize':'16px','lineHeight':'28px','marginBottom':'2rem'}}>Ramayana The Epic</li>
            </ol>
        </nav>
        </div>
        

       <p style={{'color':'black','fontSize':'24px','fontWeight':'600','lineHeight':'28px'}}>Ramayana The Epic</p>
       <div style={{'alignContent':'center','marginTop':'2rem'}}>
            <p style={{'color':'#4C4C4C','font-style': 'normal','fontSize':'16px','fontWeight':'400','lineHeight':'28px'}}>
            The Ramayana is an ancient Sanskrit epic which follows Prince Rama's quest to rescue his beloved wife Sita from the clutches of Ravana with the help of an army of
            monkeys. It is traditionally attributed to the authorship of the sage Valmiki and dated to around 500 BCE to 100 BCE. One of the most important literary works of ancient
            India, it has greatly influenced art and culture in the Indian subcontinent and South East Asia, with versions of the story also appearing
            in the Buddhist canon from a very early date.
            </p>
       </div>
       <p style={{'color':'black','fontSize':'18px','fontWeight':'600','lineHeight':'28px','marginTop':'2rem'}}>7 Episodes</p>
       <div className='content__container' style={{'margin':'2rem 0rem'}}>
          <EpisodeCardItem 
                      path='/mythological-stories/episodes/{1}'
                      episode_id='1'
                      src='../e1.svg'
                      time_to_read='2 min read'
                      heading='Bala Kanda'
                      description='This Sarga (section) details the stories of Rama`s childhood and events related to the time frame. Dasharatha was the King of Ayodhya....'
          />
          <EpisodeCardItem 
                      episode_id='2'
                      src='../e2.svg'
                      time_to_read='5 min read'
                      heading='Ayodhya Kanda'
                      description='After Rama and Sita have been married, an elderly Dasharatha expresses his desire to crown Rama, to which the Kosala assembly and his subjects...'
          />
          <EpisodeCardItem
                      episode_id='3' 
                      src='../e3.svg'
                      time_to_read='3 min read'
                      heading='Aranya Kanda'
                      description='After thirteen years of exile, Rama, Sita, and Lakshmana journey southward along the banks of the river Godavari, where they build cottages ....'
          />
          <EpisodeCardItem 
                      episode_id='4'
                      src='../e4.svg'
                      time_to_read='3 min read'
                      heading='Kishkindha Kanda'
                      description='Citadel Kishkindha Kanda is set in the place of Vanaras(Vana-nara) - Forest dwelling humans. Rama and Lakshmana meet Hanuman...'/>
          <EpisodeCardItem 
                      episode_id='5'
                      src='../e5.svg'
                      time_to_read='4 min read'
                      heading='Sundara Kanda'
                      description='Sundara Kanda forms the heart of Valmiki`s Ramayana and consists of a detailed, vivid account of Hanuman’s heroics...'
          />
          <EpisodeCardItem 
                      episode_id='6'
                      src='../e6.svg'
                      time_to_read='4 min read'
                      heading='Yuddha Kanda'
                      description='Also known as Lanka Kanda, this book describes the war between the army of Rama and the army of Ravana. Having received Hanuman`s report on Sita,'
          />
          <EpisodeCardItem
                      episode_id='7'
                      src='../e7.svg'
                      time_to_read='3 min read'
                      heading='Uttara Kanda'
                      description='Considered by several scholars to be an interpolation to the original six chapters, this kanda narrates Rama`s reign of Ayodhya, the birth of Lava ...'
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

export default Episode_Content
