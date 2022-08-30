import type { NextPage } from 'next'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Navbar, Row, UncontrolledCarousel } from 'reactstrap';
import Navber from '../components/Navber';
import Dashboard from '../components/dashboard';
import NewBg from '../public/NewBg.jpg'
import Form from '../components/form';
import Reports from './reports'
const Home: NextPage = () => {
  const styles = {
    paperContainer: {
      width: '100%',
      zIndex: 1,
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // width: '150%',
      padding:20,
      backgroundPosition: 'center',
      backgroundImage: `url(${NewBg.src})`,
    },


  };

  return (
    <>
      <Navber />
      <div style={styles.paperContainer}>
      <Row>
          <Col
            xs="12" md={6}
          >
          </Col>
          <Col
            xs="12" md={6}
          >
            <Form />
          </Col>
        </Row>
</div>
<Navbar style={{backgroundColor:'#01459a'}}>
   
            </Navbar>
            <div style={{padding:20}}>
            <Dashboard/>

            </div>

    </>

  )
}

export default Home
