import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Navber from '../components/Navber';
import Content from '../components/content';
import Dashboard from '../components/dashboard';
import Login from '../components/login';
import NewBg from '../public/NewBg.jpg'
import Footer from '../components/footer';
import axios from 'axios';

const Home: NextPage = () => {

  const styles = {
    paperContainer: {
      zIndex: 1,
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minWidth: 'fit-content',

      backgroundPosition: 'center',
      backgroundImage: `url(${NewBg.src})`,
    },


  };



  return (
    <>
  
    <Navber/>
    <Login/>
</>
  )
}

export default Home
