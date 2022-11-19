import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar className='shadow-0' expand='lg' sticky light bgColor='light'>
      <MDBContainer>
        <MDBNavbarBrand className='fs-3' href='#' style={{'font-family': 'SeoulHangang CBL'}}>
            <span style={{color:'#FF5C00','font-weight':'bold'}}>Pooja</span>
            <span style={{color:'#FF0099','font-weight':'bold'}}>Archana</span>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' style={{'font-family': 'Inter','font-weight':'bold'}}>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle size='lg' outline color='warning' className='ms-4' style={{'font-weight':'bold'}}>
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Mythology Stories</MDBDropdownItem>
                  <MDBDropdownItem link>Characters</MDBDropdownItem>
                  <MDBDropdownItem link>Temples</MDBDropdownItem>
                  <MDBDropdownItem link>Festivals</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav right className='mr-auto mb-2 mb-lg-0' style={{'font-family': 'Inter'}}>

                        <MDBInputGroup tag="form" className='d-flex w-auto mt-3 mb-3'>
                            <input className='form-control'  size='lg' placeholder='Search' aria-label="Search" type='Search' style={{border:'2px solid black'}}/>
                            <MDBBtn outline color='dark' size='mx-2'><i className='fa fa-search'></i></MDBBtn>
                        </MDBInputGroup>

                        <MDBNavbarItem>
                            <MDBNavbarLink className='fs-5 ms-2' active aria-current='page' href='/signin'>
                                <MDBBtn size='lg' color='light' style={{'font-weight':'bold', color:'black'}}>
                                    SignIn
                                </MDBBtn>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active className='fs-5 ms-2 mt-0.5' aria-current='page' href='/signup'>
                                <MDBBtn size='lg' color='warning' style={{'font-weight':'bold', color:'black'}}>
                                    SignUp
                                </MDBBtn>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}