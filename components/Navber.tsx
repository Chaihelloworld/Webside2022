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
} from 'reactstrap';
import { useCookies } from 'react-cookie';
import axios from 'axios';

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
  useEffect(()=>{
   if(cookieToken.apiToken){
    setState(true)

   }
  },[cookieToken])
  return (
    <div >
      <Nav className="my-1 "

        style={{ backgroundColor: '#212529', height: '65px' }}
      >
        <NavbarBrand href="/" className="me-auto mt-3 p-1" style={{ color: 'white' }}>
          HOME
        </NavbarBrand>
        {state &&((
           <NavItem>
           <NavLink
             active
           >
             <Button color="info" className='mt-1' style={{ color: 'white', fontWeight: 700 }}
               onClick={() => {
                 logoutAPI();
               }}

             >
               Logout
             </Button>

           </NavLink>
         </NavItem>
        ))}
   {!state &&((
    <NavItem>
            <NavLink
              active
              href="/login"
            >
              <Button color="info" className='mt-1' style={{ color: 'white', fontWeight: 700 }}>
                Login
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
    </div>
  );
}

export default Example;