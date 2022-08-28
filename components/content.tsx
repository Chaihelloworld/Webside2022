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
function Content() {

  return (

    <div>

      <Row >
        <Col
          xs="12" md={8}
          style={{display:'flex',flexFlow:'row wrap'}}
        >
          <Card
            inverse
            style={{
              width: '18rem'
            }}
          >
            <CardHeader style={{ backgroundColor: '#673ab7', border: 'none' }}>
              พลังงานไฟฟ้าที่ใช้ทั้งหมด
            </CardHeader>
            <CardBody style={{ backgroundColor: '#af82ff', border: 'none' }}>
              <CardTitle tag="h5">
                ผู้ใช้ทั้งหมด {'175'} คน
              </CardTitle>
              <CardText style={{ float: 'right', display: 'flex', fontSize: '25px' }}>
                50,968 หน่วย
              </CardText>
            </CardBody>
          </Card>
          <Card
            inverse
            style={{
              width: '18rem'
            }}
          >
            <CardHeader style={{ backgroundColor: '#673ab7', border: 'none' }}>
              พลังงานน้ำประปาที่ใช้ทั้งหมด
            </CardHeader>
            <CardBody style={{ backgroundColor: '#af82ff', border: 'none' }}>
              <CardTitle tag="h5">
                ผู้ใช้ทั้งหมด {'175'} คน
              </CardTitle>
              <CardText style={{ float: 'right', display: 'flex', fontSize: '25px' }}>
                12,203 ลบ.ม.
              </CardText>
            </CardBody>
          </Card>

          <Card
            inverse
            style={{
              width: '18rem'
            }}
          >
            <CardHeader style={{ backgroundColor: '#673ab7', border: 'none' }}>
              พลังงานน้ำประปาที่ใช้ทั้งหมด
            </CardHeader>
            <CardBody style={{ backgroundColor: '#af82ff', border: 'none' }}>
              <CardTitle tag="h5">
                ผู้ใช้ทั้งหมด {'175'} คน
              </CardTitle>
              <CardText style={{ float: 'right', display: 'flex', fontSize: '25px' }}>
                12,203 ลบ.ม.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col
          xs="12" md={4}
        >
          <Dashboard/>
        </Col>
      </Row>


      
    </div>

  );
}

export default Content;