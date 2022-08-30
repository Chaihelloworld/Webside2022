import axios from 'axios';
import { useRouter } from 'next/router';
import React, { SyntheticEvent, useState } from 'react';
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

function Content() {

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
    console.log(email, password);
    axios.post('https://e9be-184-82-27-191.ap.ngrok.io/api/login', {
      email: email,
      password: password
    })
      .then((response) => {
        // console.log(response);
        if (response) {
          setCookieToken('apiToken', response.data.token);
          setCookie('email', email);
          setCookiePass('password', password);
          // console.log(response.data.token);

          router.push('/')
        } else {
          console.log('error')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    // <Container

    //   fluid="sm"
    // >
<Container
    fluid
    
  >
      <Row>
        <Col
          className="bg-light border"
          md={{
            offset: 4,
            size: 4
          }}
          sm="12"
        >
          <h1 style={{ textAlign: 'center' }}>LOGIN</h1>
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
            <Button type="submit">
              Submit
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