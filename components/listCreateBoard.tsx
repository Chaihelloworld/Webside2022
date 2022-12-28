import React, { Dispatch, FC, SetStateAction, useState } from 'react';
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

interface Props {
  setName: Dispatch<SetStateAction<any>>
}
const Content : FC<Props> = ({
  setName
}) => {

  return (

    <div>

<ListGroup>
        {/* <ListGroupItem> {' '} <a className={styles.blink} style={{color:'#2e2d2d',fontSize:14,fontWeight:650}}>กิจกรรมและความเคลื่อนไหว</a></ListGroupItem> */}
        <ListGroupItem> <BsFillCaretRightSquareFill color='purple'/>{' '} 
        <Link  href={'/createPage'}>
        <a style={{color:'#797979',fontSize:14}}>ข้อมูลทรัพยากร</a>
        </Link></ListGroupItem>
        <ListGroupItem > <BsFillCaretRightSquareFill color='purple'/>{' '} 
        <Link  href={'/createPage'}><a onClick={()=>{
          setName('ขอบเขตที่ 1')
        }} style={{color:'#797979',fontSize:14}}>ขอบเขตที่ 1</a></Link></ListGroupItem>
       <ListGroupItem > <BsFillCaretRightSquareFill color='purple'/>{' '} 
        <Link  href={'/createPage'}><a onClick={()=>{
          setName('ขอบเขตที่ 2')
        }} style={{color:'#797979',fontSize:14}}>ขอบเขตที่ 2</a></Link></ListGroupItem>
        <ListGroupItem > <BsFillCaretRightSquareFill color='purple'/>{' '} 
        <Link  href={'/createPage'}><a onClick={()=>{
          setName('ขอบเขตที่ 3')
        }} style={{color:'#797979',fontSize:14}}>ขอบเขตที่ 3</a></Link></ListGroupItem>
      </ListGroup>

      
    </div>

  );
}

export default Content;