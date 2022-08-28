import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Navber from '../components/Navber';
import Content from '../components/content';
import Dashboard from '../components/dashboard';
import NewBg from '../public/NewBg.jpg'
import Footer from '../components/footer';

const Home: NextPage = () => {
  const styles = {
    paperContainer: {
      zIndex: 1,
      height: '900px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // width: '150%',
      
      backgroundPosition: 'center',
      backgroundImage: `url(${NewBg.src})`,
    },


  };

  return (
    <>
    <Navber/>
    <div style={{marginTop:'10%'}}>
    <Content/>
    </div>
    <div style={{ position: 'sticky',zIndex:5,bottom:'1px' }}>
    <Footer/>

    </div>
    </>
    
  )
}

export default Home
