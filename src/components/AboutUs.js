import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

function AboutUs() {
  return (
    <div style={{'margin':'4rem 3rem'}}>
      <h1 style={{'padding':'5px 10px','marginBottom':'40px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter','textAlign':'center'}}>About Us</h1>
      <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
            <MDBCol>
                <MDBCard  border='light' background='white' className='ms-auto me-auto' style={{ width: '25rem', }}>
                    <MDBCardBody>
                        <MDBCardTitle style={{'color':'#FF9900'}}><u>OUR MISSION</u></MDBCardTitle>
                        <MDBCardText style={{'color':'black'}}>
                        The younger generation is learning less and less about India's rich tradition and culture. Mythology stories are rarely told in an engaging manner. Our goal is to help the reader comprehend our ancient history while also giving them the greatest content possible in a fun way.                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard  border='light' background='white' className='ms-auto me-auto' style={{ width: '25rem', }}>
                    <MDBCardBody>
                        <MDBCardTitle style={{'color':'#FF9900'}}><u>OUR VISION</u></MDBCardTitle>
                        <MDBCardText style={{'color':'black'}}>
                        One way to increase user engagement is to make the content appealing; one tale should inevitably lead to another that are related. The product has an interesting approach of delivering mythology tales. Gamification will be used to engage users with a pleasing user interface.                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <br></br>
        <h1 style={{'padding':'10px 10px','marginBottom':'40px', color:'black', 'fontWeight':'bold', 'fontFamily':'Inter','textAlign':'center'}}>Our Team</h1>
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
            <MDBCol>
                <MDBCard  border='light' background='white' className='ms-auto me-auto' style={{ width: '25rem', }}>
                    <MDBCardBody>
                        <MDBCardTitle style={{'color':'#FF9900'}}>Rajeshwari Gupta</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard  border='light' background='white' className='ms-auto me-auto' style={{ width: '25rem', }}>
                    <MDBCardBody>
                        <MDBCardTitle style={{'color':'#FF9900'}}>Tanmay Chakraborty</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
            <MDBCol>
                <MDBCard  border='light' background='white' className='ms-auto me-auto' style={{ width: '25rem', }}>
                    <MDBCardBody>
                        <MDBCardTitle style={{'color':'#FF9900'}}>AmruthaRatna Varada</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard  border='light' background='white' className='ms-auto me-auto' style={{ width: '25rem', }}>
                    <MDBCardBody>
                        <MDBCardTitle style={{'color':'#FF9900'}}>Ankush Sinha</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

    </div>
  )
}

export default AboutUs
