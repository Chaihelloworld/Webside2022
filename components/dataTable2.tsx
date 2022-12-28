import React, { FC, useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  Table,
} from 'reactstrap';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import styler from '../styles/Navbar.module.scss'
import Image from 'next/image'
import imgIcon from '../public/img/user.svg'
import LOGO from '../public/LOGO.png'

import { setLogLevel } from 'firebase/app';
import Router from 'next/router';
import { useRouter } from 'next/router'

interface Props {

}

const Example: FC<Props> = ({
}) => {


  return (
    <Table bordered>
    <thead>
        <tr style={{
            marginRight: 80,
            transition: '0.4s ease',
            color: '#797979',
            letterSpacing: '.3px',
            textAlign: 'center',
            fontWeight: 500, fontSize: '14px'
        }}>

            <th>
                หัวข้อ
            </th>
            <th>
                ประเภทพลังงานที่ใช้
            </th>
            <th>
                ปริมาณพลังงานที่ใช้
            </th>
            <th>
                หน่วย
            </th>
            <th>
                (kg CO2 -rq)
            </th>
            <th>
                (tonne CO2)
            </th>
        </tr>
    </thead>
    <tbody>
        <tr style={{
            marginRight: 80,
            transition: '0.4s ease',
            color: '#797979',
            letterSpacing: '.3px',
            textAlign: 'center',
            fontWeight: 500, fontSize: '14px'

        }}>

            <td style={{ textAlign: 'left' }}>
            2.1 การใช้ไฟฟ้าในเขตพื้นที่เทศบาล
            </td>
            <td>
                ก๊าซหุงต้ม
            </td>
            <td>
                <InputGroup size="sm">
                    <Input />
                </InputGroup>
            </td>
            <td>
                กิโลกรัม/ปี
            </td>
            <td>
                <InputGroup size="sm">
                    <Input />
                </InputGroup>
            </td>
            <td>
                <InputGroup size="sm">
                    <Input />
                </InputGroup>
            </td>
        </tr>
        <tr style={{
            marginRight: 80,
            transition: '0.4s ease',
            color: '#797979',
            letterSpacing: '.3px',
            textAlign: 'center',
            fontWeight: 500, fontSize: '14px'

        }}>

            <td style={{ textAlign: 'left' }}>
            2.2 การใช้ไฟฟ้าสาธารณะในเขตพื้นที่เทศบาล
            </td>
            <td>
                ก๊าซหุงต้ม
            </td>
            <td>
                <InputGroup size="sm">
                    <Input />
                </InputGroup>
            </td>
            <td>
                กิโลกรัม/ปี
            </td>
            <td>
                <InputGroup size="sm">
                    <Input />
                </InputGroup>
            </td>
            <td>
                <InputGroup size="sm">
                    <Input />
                </InputGroup>
            </td>
        </tr>
      
    </tbody>
</Table>
  );
}

export default Example;