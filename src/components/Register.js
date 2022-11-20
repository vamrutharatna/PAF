import React, { useState } from 'react';
import { signUp } from "../services/UserService";
import { toast } from 'react-hot-toast';
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

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      contact: "",
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    console.log(data);

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("Successfully Registered!");
        setData({
          name: "",
          email: "",
          password: "",
          contact: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  }

  return (
    <div style={{ 'fontFamily': 'Inter', backgroundImage: 'url(bg.svg)', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center center', 'backgroundSize': 'cover' }}>

      <br></br>

      <a href='/' style={{ 'color': 'white', 'marginLeft': '10rem', 'fontSize': '20px', 'fontWeight': 'bold' }}><i className='fa fa-arrow-left'></i> Home </a>

      <MDBContainer fluid className='d-flex align-items-center justify-content-center'>

        <MDBCard className='m-3' style={{ maxWidth: '600px', borderRadius: '16px' }}>

          <MDBCardBody className='px-5 py-4'>

            <form className='form-outline' onSubmit={submitForm}>

              <h2 className="text-capitalize text-center font-weight-bolder mb-5"
                style={{ 'color': 'black' }}
              >
                Create an account

              </h2>

              <MDBInput wrapperClass='mb-3'
                labelClass='text-black'
                label='Name'
                size='lg'
                id='form1'
                type='text'
                name="username"
                onChange={(e) => handleChange(e, "name")}
                value={data.name}
                invalid={
                  error.errors?.response?.data?.name ? true : false
                }
              />

              <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Email'
                size='lg'
                id='form2'
                type='email'
                name="email"
                onChange={(e) => handleChange(e, "email")}
                value={data.email}
                invalid={
                  error.errors?.response?.data?.email ? true : false
                }
              />

              <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Password'
                size='lg'
                id='form3'
                type='password'
                name="password"
                onChange={(e) => handleChange(e, "password")}
                value={data.password}
                invalid={
                  error.errors?.response?.data?.password ? true : false
                }
              />

              <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Confirm Password'
                size='lg'
                id='form4'
                type='password'
              />

              <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Mobile Number'
                size='lg'
                id='form2'
                type='text'
                name="number"
                onChange={(e) => handleChange(e, "contact")}
                value={data.contact}
                invalid={
                  error.errors?.response?.data?.about ? true : false
                }
              />

              <MDBBtn
                className='mb-3 w-100'
                size='lg'
                type='submit'
                style={{ 'backgroundColor': '#FF9900', 'borderRadius': '20px' }}
              >
                Register

              </MDBBtn>

              <p className='text-center' style={{ color: 'black' }}>or continue with</p>

              <div className='text-center mb-3'>

                <MDBBtn floating className='mx-1'>
                  <MDBIcon fab icon='facebook-f' style={{ 'backgroundColor': '#FFFFFF', 'color': 'black' }} />
                </MDBBtn>

                <MDBBtn floating className='mx-1'>
                  <MDBIcon fab icon='google' style={{ 'backgroundColor': '#FFFFFF', 'color': 'black' }} />
                </MDBBtn>

                <MDBBtn floating className='mx-1'>
                  <MDBIcon fab icon='twitter' style={{ 'backgroundColor': '#FFFFFF', 'color': 'black' }} />
                </MDBBtn>

                <br></br>
                <br></br>

                <p className='text-center' style={{ color: 'black' }}>
                  Have an account? <a href='/signin' style={{ 'color': '#FF9900' }}>
                    <b>
                      SignIn Here
                    </b>
                  </a>
                </p>

              </div>
            </form>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>
    </div>
  )
}

export default Register
