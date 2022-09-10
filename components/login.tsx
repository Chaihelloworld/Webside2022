import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FC, SyntheticEvent, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { useCookies } from 'react-cookie';
import styler from "../styles/Navbar.module.scss";
import Image from 'next/image'
import imgIcon from '../public/img/user.svg'
import Swal from "sweetalert2";

interface Props {

  check: () => void;
}


  const Content :FC<Props>  = ({
    check
  }) =>{
  const [cookie, setCookie] = useCookies(['email']);
  const [cookieToken, setCookieToken] = useCookies(['apiToken']);
  const [cookiePass, setCookiePass] = useCookies(['password']);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();





  // const submit = async (e: SyntheticEvent) => {
  //     e.preventDefault();

  //   const res = await fetch('/api/login', {
  //         method: 'POST',
  //         headers: {'Content-Type': 'application/json'},
  //         credentials: 'include',
  //         body: JSON.stringify({
  //             email,
  //             password
  //         })
  //     });
  //     console.log(email,password)

  //     await router.push('/');
  // }


  const submit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      axios.post('http://159.89.194.56:5000/api/login', {
        email: email,
        password: password
      })
        .then((response) => {
          if (response) {
            setCookieToken('apiToken', response.data.token);
            setCookie('email', email);
            setCookiePass('password', password);
            Swal.fire("เข้าสู่ระบบสำเร็จ!", "ยินดีต้อนรับ admin", "success");

            // console.log(response.data.token);
            router.push('/')
            check();
          } 
        })
        .catch((error) => {
          console.log(error);
          Swal.fire("เข้าสู่ระบบไม่สำเร็จ!", "กรุณาตรวจสอบ email และ รหัสผ่าน", "error");
          check();
          // console.log('error====');
    
  
        });
   
  };
  return (

    
<Container
    fluid
    
  >
      <Row>
        <Col
        style={{border:'none'}}
          // className="bg-light border"
          md={{
            offset: 1,
            size: 10
          }}
          
          sm="12"
        >
          <div style={{display:'flex',flexDirection: 'column',marginTop:15,marginBottom:15}}>
          <Image
                  src={imgIcon}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
          <h5 style={{ textAlign: 'center',color:'#1286ec',marginTop:5,marginBottom:5 }}>
         
            ลงชื่อเข้าสู่ระบบ</h5>
          </div>
           
          <Form inline onSubmit={submit}>
            <FormGroup>
              <Label
                for="exampleEmail"
                hidden
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label
                for="examplePassword"
                hidden
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="รหัสผ่าน"
                className="form-control"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            {' '}
            <Button type="submit" className={styler.btnstyleSUBMIT} style={{marginTop:5,margin:'auto',transform:'translate(0px,-5px)'}}>
              เข้าสู่ระบบ
            </Button>
            {' '}
          </Form>

        </Col>
      </Row>
    </Container>
    // </div>
  );
}

export default Content;