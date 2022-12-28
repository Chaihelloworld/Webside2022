import React, { useState } from 'react';
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
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import styles from '../styles/BlinkText.module.css';
import Link from 'next/link';
import Navber from './Navber';

function Content() {

  return (

    <div>
{/* <Navber setStated={setStateds} /> */}
<ListGroup>
        <ListGroupItem> {' '} <a className={styles.blink} style={{color:'#2e2d2d',fontSize:14,fontWeight:650}}>กิจกรรมและความเคลื่อนไหว</a></ListGroupItem>
        <ListGroupItem> <BsFillCaretRightSquareFill color='purple'/>{' '} 
        <Link  href={'/'}>
        <a  onClick={() => window.open(
            "https://drive.google.com/uc?id=1UC6pWDMHvI-dFxwJReVS1OD3sJU4vHfh&export=download",
            "_blank"
          )} style={{color:'#797979',fontSize:14}}>แบบฟอร์มบันทึกข้อมูลทรัพยากร</a>
        </Link></ListGroupItem>
        <ListGroupItem> <BsFillCaretRightSquareFill color='purple'/>{' '} <a style={{color:'#797979',fontSize:14}}>ว่าง</a></ListGroupItem>
        <ListGroupItem> <BsFillCaretRightSquareFill color='purple'/>{' '} <a style={{color:'#797979',fontSize:14}}>ว่าง</a></ListGroupItem>
        <ListGroupItem> <BsFillCaretRightSquareFill color='purple'/>{' '} <a style={{color:'#797979',fontSize:14}}>ว่าง</a></ListGroupItem>
      </ListGroup>

      
    </div>

  );
}

export default Content;