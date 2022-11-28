import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBRadio
}
from 'mdb-react-ui-kit';
function ContactUs() {
  return (
    <div style={{'margin':'1rem','fontFamily':'Inter'}}>
      <div style={{'color':'black','textAlign':'center'}}>
        <h1>Get in Touch</h1>
        <h6>We are here for you! How can we help?</h6>
      </div>
      <div style={{'display':'flex','justifyContent':'left','padding':'2rem','margin':'3rem','alignContent':'center','borderRadius':'18px','overflow':'hidden','color':'black'}}>
        <div style={{'backgroundImage':'url(/bg.svg)','padding':'2rem','backgroundPosition': 'center center', 'backgroundSize': 'cover','borderRadius':'18px','overflow':'hidden','color':'black'}}>
              <h4>Contact Information</h4>
              <p>Say something to start a live chat!</p>
              <br></br>
              <br></br>
              <p><CallIcon />&emsp;&emsp;+1012 3456 789</p>
              <p><EmailIcon />&emsp;&emsp;demo@gmail.com</p>
              <p><LocationOnIcon />&emsp;&emsp;132 Dartmouth Street Boston, <br></br>&emsp;&emsp;&emsp;&ensp;Massachusetts 02156 United States</p>
              <div style={{'display':'flex','justifyContent':'left','alignContent':'center','marginTop':'5rem'}}>
                <p style={{'margin':'0.5rem'}}><FacebookIcon /></p>
                <p style={{'margin':'0.5rem'}}><InstagramIcon /></p>

              </div>
        </div>
        <div style={{'margin':'4rem'}}>
        <MDBRow>

          <MDBCol md='6'>
            <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' labelClass='text-black'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' labelClass='text-black'/>
          </MDBCol>

          </MDBRow>


          <MDBRow>

          <MDBCol md='6'>
            <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' labelClass='text-black'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' labelClass='text-black'/>
          </MDBCol>

          <MDBCol>
            <MDBTextArea wrapperClass='mb-4' label='Your Message' labelClass='text-black'></MDBTextArea>
          </MDBCol>

          </MDBRow>
          <MDBBtn className='mb-4' size='lg' style={{'float':'right','color':'black'}} outline color='warning'>Send Message</MDBBtn>
        </div>
      </div>
      
    </div>
  )
}

export default ContactUs
