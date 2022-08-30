import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from 'reactstrap';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import styler from '../styles/Navbar.module.scss'
import Image from 'next/image'
import imgIcon from '../public/img/user.svg'
function Example(props: any) {
  const [collapsed, setCollapsed] = useState(true);
  const [cookie, setCookie, removeCookie] = useCookies(['email']);
  const [cookiePass, setCookiePass, removeCookiesPass] = useCookies(['password']);
  const [cookieToken, setCookieToken, removeCookiesToken] = useCookies(['apiToken']);
  const [state, setState] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);


  const logoutAPI = () => {
    console.log('logout')
    setState(false)
    removeCookie('email');
    removeCookiesPass('password');
    removeCookiesToken('apiToken')

    window.location.reload()


  };
  useEffect(() => {
    if (cookieToken.apiToken) {
      setState(true)

    }
  }, [cookieToken])
  return (
    <div >
           <Navbar 
                style={{backgroundColor:'#01459a'}}
                >
                  <div style={{color:'white',margin:'auto'}}>
                  Copyright © 2022 FORM GOOGLE. All Rights Reserved.

                  </div>
            </Navbar>
      <Nav 

        style={{
          backgroundColor: 'white', height: '65px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Nav
        >
          <NavItem>
            <NavLink
              active
              href="#"
            >
              หน้าหลัก
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="#">
              Another Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
            >
              Disabled Link
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        {state && ((
          <NavItem>
            <NavLink
              active
            >

              <Button outline className={styler.root} onClick={() => {
                logoutAPI();
              }}
              >
                {/* <Image
                  src={imgIcon}
                  alt="Picture of the author"
                  width={25}
                  height={25}
                /> */}
                <div>
                  ออกจากระบบ

                </div>
              </Button>
            </NavLink>
          </NavItem>
        ))}
        {!state && ((
          <NavItem>
            <NavLink
              active
            href="/login"
            >
              <Button outline className={styler.root} onClick={function noRefCheck() { }}>
                <Image
                  src={imgIcon}
                  alt="Picture of the author"
                  width={25}
                  height={25}
                />
                <div>
                  เข้าสู่ระบบ

                </div>
              </Button>
           
            </NavLink>
          </NavItem>
        ))}



        {/* <NavItem>
          <NavLink
          style={{color:'white'}}
            active
            href="/dashboard"
          >
            Register
          </NavLink>
        </NavItem> */}

      </Nav>
      <Navbar 
                style={{backgroundColor:'#01459a'}}
                >
                  <div style={{color:'white',margin:'auto'}}>

                  </div>
            </Navbar>
    </div>
  );
}

export default Example;