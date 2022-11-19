import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCardBody,
    MDBCard,

} from 'mdb-react-ui-kit';
import '../components/style.css'

function Register() {
  return (
    <div style={{'fontFamily':'Inter',backgroundImage: 'url(bg.svg)','backgroundRepeat':'no-repeat','backgroundPosition':'center center','backgroundSize':'cover'}}>
    <br></br>
    <a href='/' style={{'color':'white','marginLeft':'10rem','fontSize':'20px','fontWeight':'bold'}}><i className='fa fa-arrow-left'></i> Home</a>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center'>
      <MDBCard className='m-3' style={{maxWidth: '600px', borderRadius:'16px'}}>
        <MDBCardBody className='px-5 py-4'>
            <form className='form-outline'>
          <h2 className="text-capitalize text-center font-weight-bolder mb-5" style={{'color':'black'}}>Create an account</h2>
          <MDBInput wrapperClass='mb-3' labelClass='text-black' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-3' labelClass='text-black' label='Your Mobile Number' size='lg' id='form2' type='text'/>
          <MDBInput wrapperClass='mb-3' labelClass='text-black' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-3' labelClass='text-black' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-3' labelClass='text-black' label='Repeat your password' size='lg' id='form4' type='password'/>
          <MDBBtn className='mb-3 w-100' size='lg' style={{'backgroundColor':'#FF9900', 'borderRadius':'20px'}}>Register</MDBBtn>
          <p className='text-center' style={{color:'black'}}>or continue with</p>
          <div className='text-center mb-3'>

              <MDBBtn floating className='mx-1'>
                <MDBIcon fab icon='facebook-f' style={{'backgroundColor':'#FFFFFF','color':'black'}}/>
              </MDBBtn>

              <MDBBtn floating className='mx-1'>
                <MDBIcon fab icon='google' style={{'backgroundColor':'#FFFFFF','color':'black'}}/>
              </MDBBtn>

              <MDBBtn floating className='mx-1'>
                <MDBIcon fab icon='twitter' style={{'backgroundColor':'#FFFFFF','color':'black'}} />
              </MDBBtn>

              <MDBBtn floating className='mx-1'>
                <MDBIcon fab icon='github' style={{'backgroundColor':'#FFFFFF','color':'black'}} />
              </MDBBtn>
                <br></br>
                <br></br>
              <p className='text-center' style={{color:'black'}}>Have an account? <a href='/signin' style={{'color':'#FF9900'}}><b>SignIn Here</b></a></p>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
          
    </MDBContainer>
    </div>
  )
}

export default Register
