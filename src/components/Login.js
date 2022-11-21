import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../services/UserService';
import { doLogin } from '../auth';
import userContext from '../context/userContext'
import { toast } from 'react-hot-toast'
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCardBody,
  MDBCard,

} from 'mdb-react-ui-kit';
import '../components/style.css'

function LogIn() {

  const userContxtData = useContext(userContext);

  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username or Password is required !!");
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        //save the data to localstorage
        doLogin(data, () => {
          console.log("login detail is saved to localstorage");
          //redirect to user dashboard page
          // userContxtData.setUser({
          //     data: data.user,
          //     login: true,
          // });
          // navigate("/user/dashboard");
        });

        toast.success("Login Successful!");

      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on sever !!");
        }
      });
  };

  return (
    <div className='p-3' style={{ 'fontFamily': 'Inter', backgroundImage: 'url(bg.svg)', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center center', 'backgroundSize': 'cover' }}>

      <br></br>

      <a href='/' style={{ 'color': 'white', 'marginLeft': '10rem', 'fontSize': '20px', 'fontWeight': 'bold' }}>
        <i className='fa fa-arrow-left'></i>
        Home
      </a>

      <MDBContainer fluid className='d-flex align-items-center justify-content-center'>

        <MDBCard className='m-5' style={{ maxWidth: '600px', borderRadius: '16px' }}>

          <MDBCardBody className='px-5 py-5'>

            <form className='form-outline' onSubmit={handleFormSubmit}>

              <h2 className="text-capitalize text-center font-weight-bolder mb-5"
                style={{ 'color': 'black' }}
              >
                Welcome Back
              </h2>

              <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Email'
                size='lg'
                id='form2'
                type='email'
                name="email"
                value={loginDetail.username}
                onChange={(e) => handleChange(e, "username")}
              />

              <MDBInput
                wrapperClass='mb-3'
                labelClass='text-black'
                label='Password'
                size='lg'
                id='form3'
                type='password'
                name="password"
                value={loginDetail.password}
                onChange={(e) => handleChange(e, "password")}
              />

              <p className='form-text'
                style={{ 'textAlign': 'right' }}
              >
                <a href='#' style={{ 'color': 'black' }}>
                  Forgot Password?
                </a>
              </p>

              <MDBBtn className='mb-3 w-100'
                size='lg'
                type='submit'
                style={{ 'backgroundColor': '#FF9900', 'borderRadius': '20px' }}
              >
                LogIn

              </MDBBtn>

              <p className='text-center'
                style={{ color: 'black' }}
              >
                or continue with
              </p>

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

                <p className='text-center' style={{ color: 'black' }}>Don't have an account? <a href='/signup' style={{ 'color': '#FF9900' }}><b>SignUp Here</b></a></p>

              </div>

            </form>

          </MDBCardBody>

        </MDBCard>

      </MDBContainer>
    </div>
  )
}

export default LogIn
