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
import { BsFillCaretRightSquareFill, BsSlashLg } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import styles from '../styles/BlinkText.module.css';
import Link from 'next/link';

function Content() {

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
            <a style={{ color: '#797979', fontSize: 14 }}>ค่า kg CO2 -eq ที่งหมดในปี 2022 เท่ากับ 82,442,826.66</a>
          </Link></ListGroupItem>
        <ListGroupItem> <BsSlashLg color='#3182ce' />{' '}
          <Link href={'/'}>
            <a style={{ color: '#797979', fontSize: 14 }}>tonne CO2 ที่งหมดในปี 2022 เท่ากับ 12,330.14</a>
          </Link></ListGroupItem>

      </ListGroup>


    </div>

  );
}

export default Content;