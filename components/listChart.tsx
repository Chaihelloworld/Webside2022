import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';
import Dashboard from './dashboard';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BsFillCaretRightSquareFill, BsSlashLg } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import styles from '../styles/BlinkText.module.css';
import Link from 'next/link';
import axios from 'axios';

function Content() {
//    const date = new Date().getFullYear();
const [data, setData] = useState([])
const [valueCO2, setValueCO2] = useState(0)
const [valuetonne, setValuetonne] = useState(0)

   const fetchdata = async() => {
    const date = new Date().getFullYear();

    try {

      const result = await axios.get(
        `https://serverwebp-api.com/api/resource/report?year=${2022}`);
      console.log('x ===',result.data.success)
      let KgCo2 = 0
      let tonene = 0

      if (result.data.success) {
       let v1 = result.data.data.KgCO2[0]
       let v2 = result.data.data.KgCO2[1]
       let v3 = result.data.data.KgCO2[2]
       let t1 = result.data.data.tonene[0]
       let t2 = result.data.data.tonene[1]
       let t3 = result.data.data.tonene[2]
  
        KgCo2 = v1+v2+v3
        tonene = t1+t2+t3
        console.log('--------------------------------')
        // for (let index = 0; index < conData.length; index++) {
        //   const element = conData[index];
        //   console.log(element)
        // }
        // setData(result.data.data)
        setValueCO2(KgCo2)
        setValuetonne(tonene)

      } else {
        KgCo2=0
        tonene = 0
        console.log(KgCo2)
        setValueCO2(KgCo2)
        setValuetonne(tonene)
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("connecting");
    }
  }
  // useEffect(()=>{
  //   if(valueCO2 == 0){
  //     return;
  //   }
  // },[valueCO2])
  useEffect(()=>{
   
    fetchdata();
  },[])
  return (

    <div>

      <ListGroup>
        
          <ListGroupItem>  {' '} <a className={styles.blink} style={{ color: '#2e2d2d', fontSize: 14, fontWeight: 650 }}> <BsBarChartLine style={{ transform: 'translate(0px,-2px)' }} /> ข้อมูลทรัพยากร</a>  
          {/* <Button style={{float:'right'}} size="sm" color="success"
          >
            เพิ่มข้อมูล
          </Button> */}
          </ListGroupItem>
        <ListGroupItem> <BsSlashLg color='#4a5568' />{' '}
          <Link href={'/'}>
            <a style={{ color: '#797979', fontSize: 14 }}>ค่า kg CO2 -eq ที่งหมดในปี 2022 เท่ากับ {valueCO2.toLocaleString()}</a>
          </Link></ListGroupItem>
        <ListGroupItem> <BsSlashLg color='#3182ce' />{' '}
          <Link href={'/'}>
            <a style={{ color: '#797979', fontSize: 14 }}>tonne CO2 ที่งหมดในปี 2022 เท่ากับ  {valuetonne.toLocaleString()}</a>
          </Link></ListGroupItem>

      </ListGroup>


    </div>

  );
}

export default Content;

