import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookIcon,
    WhatsappIcon,
    EmailIcon,
    WhatsappShareButton,
  } from "react-share";
  import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

function StoryContent() {
    const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const exportPdf = () => {

    }

    const shareUrl = 'http://poojaarchana.com';
    const title = 'PoojaArchana';

    const [fontSize, setFontSize] = useState(18);

  return (
    <div style={{'margin':'2rem 2rem','padding':'2rem 2rem','borderRadius':'24px','backgroundColor':'rgba(255, 153, 0, 0.05)','fontFamily':'Inter'}}>
       <div className='bc-icons-2' >
       <nav aria-label="breadcrumb">
            <ol class="breadcrumb purple lighten-4">
            <li class="breadcrumb-item"><a class="black-text" href="/" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Home</a><i class="fas fa-angle-right mx-2"
                aria-hidden="true"></i></li>
            <li class="breadcrumb-item"><a class="black-text" href="/mythological-stories" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Mythology Stories</a><i class="fas fa-angle-right mx-2"
                aria-hidden="true"></i></li>
            <li class="breadcrumb-item"><a class="black-text" href="/mythological-stories" style={{'color':'#4B002D','fontSize':'15px','lineHeight':'28px','marginBottom':'2rem'}}>Ramayana The Epic</a><i class="fas fa-angle-right mx-2"
                aria-hidden="true"></i></li>
            <li class="breadcrumb-item active" style={{'color':'#4B002D','fontSize':'16px','lineHeight':'28px','marginBottom':'2rem'}}>Bala Kanda</li>
            </ol>
        </nav>
        </div>
       <div className='epcontent'>             
                <div className='left_epcontent'>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}}> <i className='fa fa-arrow-left'></i></MDBBtn>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}}> Add to List <i className='fa fa-book'></i></MDBBtn>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}}> Say <i className='fas fa-volume-up'></i></MDBBtn>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}} onClick={toggleShow}> Share <i className='fa fa-share-alt'></i></MDBBtn>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}} onClick={()=> setFontSize(fontSize+2)}> Increase Font <i className='fa fa-font'></i></MDBBtn>
                <MDBModal tabIndex='-1' show={basicModal} setShow={setBasicModal} size='sm'>
                        <MDBModalDialog centered>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Share <i className='fa fa-share-alt'></i></MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody style={{'textAlign':'left'}}>
                                <p><EmailShareButton  url={shareUrl} quote={title}> <EmailIcon size={32} round /> Email </EmailShareButton></p>
                                <p><WhatsappShareButton url={shareUrl} quote={title}> <WhatsappIcon size={32} round /> Whatsapp </WhatsappShareButton></p>
                                <p><FacebookShareButton  url={shareUrl} quote={title}> <FacebookIcon size={32} round /> Facebook </FacebookShareButton></p>
                            </MDBModalBody>
                        </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}} onClick={()=> setFontSize(18)}> Default Font <i className='fa fa-font'></i></MDBBtn>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}} onClick={()=> setFontSize(fontSize-2)}> Decrease Font <i className='fa fa-font'></i></MDBBtn>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}}> Bookmark <i className='fa fa-bookmark'></i></MDBBtn>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}} onClick={exportPdf}> Download <i className='fa fa-download'></i></MDBBtn>

                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}}> RelatedStory <i className='fa fa-link'></i></MDBBtn>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}}> Like <i className='fa fa-heart'></i></MDBBtn>
                <MDBBtn outline color='warning' size='sm' className='mx-1' style={{color:'black','fontSize':'12px'}}><i className='fa fa-arrow-right'></i></MDBBtn>
                </div>
                <div className='right_epcontent'>
                    <p className='story_content' id="story" style={{fontSize:`${fontSize}px`}}>
                    <p style={{'color':'black','fontSize':'24px','fontWeight':'600','lineHeight':'28px'}}>Bala Kanda</p>
                    After Rama and Sita have been married, an elderly Dasharatha expresses his desire to crown Rama, to which the Kosala assembly and his subjects express their support. On the eve of the great event, Kaikeyi was happy about this, but was later on provoked by Manthara, a wicked maidservant, to claim two boons that Dasharatha had long ago granted her. Kaikeyi demands Rama to be exiled into the wilderness for fourteen years, while the succession passes to her son Bharata.
    The heartbroken king, constrained by his rigid devotion to his given word, accedes to Kaikeyi's demands. Rama accepts his father's reluctant decree with absolute submission and calm self-control which characterizes him throughout the story. He is joined by Sita and Lakshmana. When he asks Sita not to follow him, she says, the forest where you dwell is Ayodhya for me, and Ayodhya without you is a veritable hell for me.
    After Rama's departure, King Dasharatha, unable to bear the grief, passes away. Meanwhile, Bharata, who was on a visit to his maternal uncle, learns about the events in Ayodhya. Bharata refuses to profit from his mother's wicked scheming and visits Rama in the forest. He requests Rama to return and rule. But Rama, determined to carry out his father's orders to the letter, refuses to return before the period of exile.
    After Rama and Sita have been married, constrained by his rigid devotion to his given word, accedes to Kaikeyi's demands. Rama accepts his father's reluctant decree with absolute submission and calm self-control which characterizes him throughout the story. He is joined by Sita and Lakshmana. When he asks Sita not to follow him, she says, the forest where you dwell is Ayodhya for me, and Ayodhya without you is a veritable hell for me.
    After Rama's departure, King Dasharatha, unable to bear the grief, passes away. Meanwhile, Bharata, who was on a visit to his maternal uncle, learns about the events in Ayodhya. Bharata refuses to profit from his mother's wicked scheming and visits Rama in the forest. He requests Rama to return and rule. But Rama, determined to carry out his father's orders to the letter, refuses to return before the period of exile.
    After Rama and Sita have been married, constrained by his rigid devotion to his given word, accedes to Kaikeyi's demands. Rama accepts his father's reluctant decree with absolute submission and calm self-control which characterizes him throughout the story. He is joined by Sita and Lakshmana. When he asks Sita not to follow him, she says, the forest where you dwell is Ayodhya for me, and Ayodhya without you is a veritable hell for me.
    After Rama's departure, King Dasharatha, unable to bear the grief, passes away. Meanwhile, Bharata, who was on a visit to his maternal uncle, learns about the events in Ayodhya. Bharata refuses to profit from his mother's wicked scheming and visits Rama in the forest. He requests Rama to return and rule. But Rama, determined to carry out his father's orders to the letter, refuses to return before the period of exile.
    After Rama and Sita have been married, constrained by his rigid devotion to his given word, accedes to Kaikeyi's demands. Rama accepts his father's reluctant decree with absolute submission and calm self-control which characterizes him throughout the story. He is joined by Sita and Lakshmana. When he asks Sita not to follow him, she says, the forest where you dwell is Ayodhya for me, and Ayodhya without you is a veritable hell for me.
    After Rama's departure, King Dasharatha, unable to bear the grief, passes away. Meanwhile, Bharata, who was on a visit to his maternal uncle, learns about the events in Ayodhya. Bharata refuses to profit from his mother's wicked scheming and visits Rama in the forest. He requests Rama to return and rule. But Rama, determined to carry out his father's orders to the letter, refuses to return before the period of exile.
    After Rama and Sita have been married, constrained by his rigid devotion to his given word, accedes to Kaikeyi's demands. Rama accepts his father's reluctant decree with absolute submission and calm self-control which characterizes him throughout the story. He is joined by Sita and Lakshmana. When he asks Sita not to follow him, she says, the forest where you dwell is Ayodhya for me, and Ayodhya without you is a veritable hell for me.
    After Rama's departure, King Dasharatha, unable to bear the grief, passes away. Meanwhile, Bharata, who was on a visit to his maternal uncle, learns about the events in Ayodhya. Bharata refuses to profit from his mother's wicked scheming and visits Rama in the forest. He requests Rama to return and rule. But Rama, determined to carry out his father's orders to the letter, refuses to return before the period of exile.
    After Rama and Sita have been married, constrained by his rigid devotion to his given word, accedes to Kaikeyi's demands. Rama accepts his father's reluctant decree with absolute submission and calm self-control which characterizes him throughout the story. He is joined by Sita and Lakshmana. When he asks Sita not to follow him, she says, the forest where you dwell is Ayodhya for me, and Ayodhya without you is a veritable hell for me.
    After Rama's departure, King Dasharatha, unable to bear the grief, passes away. Meanwhile, Bharata, who was on a visit to his maternal uncle, learns about the events in Ayodhya. Bharata refuses to profit from his mother's wicked scheming and visits Rama in the forest. He requests Rama to return and rule. But Rama, determined to carry out his father's orders to the letter, refuses to return before the period of exile.
                    </p>
    

                    


                </div>
            </div>
    </div>
  )
}

export default StoryContent

