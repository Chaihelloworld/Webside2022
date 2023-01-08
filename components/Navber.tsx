import React, { FC, useEffect, useState } from 'react';
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavbarText,
} from 'reactstrap';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import styler from '../styles/Navbar.module.scss'
import Image from 'next/image'
import imgIcon from '../public/img/user.svg'
import LOGOBANNERS from '../public/LOGO.png'

import { setLogLevel } from 'firebase/app';
import Router from 'next/router';
import { useRouter } from 'next/router'
import Reports from '../pages/reports';

interface Props {

  setStated: () => void;
}

const Example: FC<Props> = ({
  setStated,
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [cookie, setCookie, removeCookie] = useCookies(['email']);
  const [cookiePass, setCookiePass, removeCookiesPass] = useCookies(['password']);
  const [cookieToken, setCookieToken, removeCookiesToken] = useCookies(['apiToken']);
  const [state, setState] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const router = useRouter()


  const logoutAPI = () => {
    // console.log('logout')
    setState(false)
    removeCookie('email');
    removeCookiesPass('password');
    removeCookiesToken('apiToken')

    router.push('/')


  };
  useEffect(() => {
    if (cookieToken.apiToken) {
      setState(true)

    }
  }, [cookieToken])
  const setLog = () => {
    setStated();
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div >
      <Navbar
        style={{ backgroundColor: 'white' }}
      >
        <div style={{ color: 'white', margin: 'auto' }}>

        </div>
      </Navbar>
      <Nav

        style={{
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <NavItem  >
          <Image
            src={LOGOBANNERS}
            alt="Picture of the author"

          />
        </NavItem>

        <Nav style={{
          marginRight: 10,
          transition: '0.4s ease',
          color: '#797979',
          letterSpacing: '.3px',
          textAlign: 'center',
          fontWeight: 500
        }}>
          <div style={{display:'flex',transform:'translate(-20px,0px)'}}>
            {!state ? <>
              <NavItem>
              <NavLink
                active
                href="/"
                style={{
                  color: '#797979', transition: '0.4s ease',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                หน้าหลัก
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active
                href="/"
                style={{
                  color: '#797979', transition: '0.4s ease',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                กิจกรรม
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active
                href="/report"
                style={{
                  color: '#797979', transition: '0.4s ease',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                ฟุตพริ้นท์ เมือง
              </NavLink>
            </NavItem>
            </>:<>
            <NavItem>
              <NavLink
                active
                href='/createPage'
                style={{
                  color: '#797979', transition: '0.4s ease',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                บันทึกค่าทรัพยากร
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active
                href='/TableData'
                style={{
                  color: '#797979', transition: '0.4s ease',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                ข้อมูลทรัพยากร
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active
                // href='/'
                // onClick={}
                style={{
                  color: '#797979', transition: '0.4s ease',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                {/* ดาวน์โหลดข้อมูลแบบสอบถาม */}
                <Reports/>
              </NavLink>
            </NavItem>
            </>}
           
          </div>


          {state && ((
            <NavItem >
    

                <Button outline style={{transform:"translate(0px,0px)"}} className={styler.root} onClick={() => {
                  logoutAPI();
                }}
                >

                  <div>
                    ออกจากระบบ

                  </div>
                </Button>
            </NavItem>
          ))}
          {!state && ((
            <NavItem >

              <Button outline style={{transform:"translate(0px,0px)"}} className={styler.root}
                onClick={() => { setLog() }}
              >
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

            </NavItem>
          ))}
        </Nav>


      </Nav>
   
      <Navbar
        style={{ backgroundColor: '#01459a' ,zIndex:-1 }}
      >
        <div style={{ color: 'white', margin: 'auto' }}>

        </div>
      </Navbar>
      {/* <Navbar >
        <NavbarBrand >   
          <Image
            src={LOGOBANNERS}
            alt="Picture of the author"

          />
        </NavbarBrand>
        
      </Navbar> */}
    </div>
  );
}

export default Example;