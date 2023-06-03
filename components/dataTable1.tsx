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
import { useFormik } from "formik";
import * as yup from "yup";
import styler from '../styles/Navbar.module.scss'
import Image from 'next/image'
import imgIcon from '../public/img/user.svg'
import LOGO from '../public/LOGO.png'

import { setLogLevel } from 'firebase/app';
import Router from 'next/router';
import { useRouter } from 'next/router'
import Swal from 'sweetalert2';


interface Props {
    formik: any;
    isEdit: boolean;
}
const Example: FC<Props> = ({ formik, isEdit }) => {
    // const Example: FC<Props> = ({
    // }) => {

    return (
        <>
            <form
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
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
                                1.1 การเผาไหม้เชื้อเพลิงจากเครื่องจักรหรืออุปกรณ์ในเขตเทศบาล
                            </td>
                            <td>
                                ก๊าซหุงต้ม
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }}
                                        id='zone_1.gas_h.amount_of_energy'
                                        value={formik.values.zone_1.gas_h.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                กิโลกรัม/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }}
                                        id='zone_1.gas_h.kgCO2_eq'
                                        value={formik.values.zone_1.gas_h.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gas_h.tonene_CO2'
                                        value={formik.values.zone_1.gas_h.tonene_CO2}
                                        onChange={formik.handleChange} />
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

                            </td>
                            <td>
                                ถ่านหุงต้ม
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gas_hi.amount_of_energy'
                                        value={formik.values.zone_1.gas_hi.amount_of_energy}
                                        onChange={formik.handleChange} />
                                    {/* <InputGroupAddon addonType="append"> */}
                                    {/* <InputGroupText>To the Right!</InputGroupText> */}
                                    {/* </InputGroupAddon> */}
                                </InputGroup>
                            </td>
                            <td>
                                กิโลกรัม/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gas_hi.kgCO2_eq'
                                        value={formik.values.zone_1.gas_hi.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gas_hi.tonene_CO2'
                                        value={formik.values.zone_1.gas_hi.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                                1.2 การเผาไหม้เชื้อเพลิงจากการขนส่งของยานพาหนะในพื้นที่เทศบาล
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

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
                                1.2.1 การใช้พลังงานภาคขนส่งทางถนน ภายในเขตเทศบาล
                            </td>
                            <td>
                                น้ำมันดีเซล
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input

                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }}
                                        id='zone_1.d_cell.amount_of_energy'
                                        value={formik.values.zone_1.d_cell.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                ลิตร/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.d_cell.kgCO2_eq'
                                        value={formik.values.zone_1.d_cell.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.d_cell.tonene_CO2'
                                        value={formik.values.zone_1.d_cell.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                            </td>
                            <td>
                                น้ำมันเบนซิน
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.bensin.amount_of_energy'
                                        value={formik.values.zone_1.bensin.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                ลิตร/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.bensin.kgCO2_eq'
                                        value={formik.values.zone_1.bensin.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.bensin.tonene_CO2'
                                        value={formik.values.zone_1.bensin.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                            </td>
                            <td>
                                แก๊สโซฮอล์ 91
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_91.amount_of_energy'
                                        value={formik.values.zone_1.gusohal_91.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                ลิตร/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_91.kgCO2_eq'
                                        value={formik.values.zone_1.gusohal_91.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_91.tonene_CO2'
                                        value={formik.values.zone_1.gusohal_91.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                            </td>
                            <td>
                                แก๊สโซฮอล์ 95
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_95.amount_of_energy'
                                        value={formik.values.zone_1.gusohal_95.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                ลิตร/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_95.kgCO2_eq'
                                        value={formik.values.zone_1.gusohal_95.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input
                                        placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_95.tonene_CO2'
                                        value={formik.values.zone_1.gusohal_95.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                            </td>
                            <td>
                                แก๊สโซฮอล์ E20
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }}
                                        id='zone_1.gusohal_e20.amount_of_energy'
                                        value={formik.values.zone_1.gusohal_e20.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                ลิตร/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_e20.kgCO2_eq'
                                        value={formik.values.zone_1.gusohal_e20.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_e20.tonene_CO2'
                                        value={formik.values.zone_1.gusohal_e20.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                            </td>
                            <td>
                                แก๊สโซฮอล์ E85
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_e85.amount_of_energy'
                                        value={formik.values.zone_1.gusohal_e85.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                ลิตร/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_e85.kgCO2_eq'
                                        value={formik.values.zone_1.gusohal_e85.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.gusohal_e85.tonene_CO2'
                                        value={formik.values.zone_1.gusohal_e85.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                            </td>
                            <td>
                                น้ำมันไบโอดีเซล
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.bio_dcell.amount_of_energy'
                                        value={formik.values.zone_1.bio_dcell.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                ลิตร/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.bio_dcell.kgCO2_eq'
                                        value={formik.values.zone_1.bio_dcell.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.bio_dcell.tonene_CO2'
                                        value={formik.values.zone_1.bio_dcell.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                            </td>
                            <td>
                                ก๊าซปีโตรเลียมแหลว(LPG)
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.lpg.amount_of_energy'
                                        value={formik.values.zone_1.lpg.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                กิโลกรัม/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.lpg.kgCO2_eq'
                                        value={formik.values.zone_1.lpg.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.lpg.tonene_CO2'
                                        value={formik.values.zone_1.lpg.tonene_CO2}
                                        onChange={formik.handleChange} />
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

                            </td>
                            <td>
                                ก๊าซธรรมชาติ(NGV)
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.ngv.amount_of_energy'
                                        value={formik.values.zone_1.ngv.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                กิโลกรัม/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.ngv.kgCO2_eq'
                                        value={formik.values.zone_1.ngv.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.ngv.tonene_CO2'
                                        value={formik.values.zone_1.ngv.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                                1.3 การใช้ปุ๋ยหรือสารเคมี
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

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
                                1.4 การบำบัดน้ำเสีย
                            </td>
                            <td>
                                ปริมาณน้ำเสีย
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.water_b.amount_of_energy'
                                        value={formik.values.zone_1.water_b.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                ลบ.ม./ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.water_b.kgCO2_eq'
                                        value={formik.values.zone_1.water_b.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_1.water_b.tonene_CO2'
                                        value={formik.values.zone_1.water_b.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                                2.1 การใช้ไฟฟ้าในเขตพื้นที่เทศบาล
                            </td>
                            <td>
                                พลังงานไฟฟ้า
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas.amount_of_energy'
                                        value={formik.values.zone_2.gas.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                               หน่วย/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas.kgCO2_eq'
                                        value={formik.values.zone_2.gas.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas.tonene_CO2'
                                        value={formik.values.zone_2.gas.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                                ไฟสาธารณะ
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas_1.amount_of_energy'
                                        value={formik.values.zone_2.gas_1.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                            หน่วย/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas_1.kgCO2_eq'
                                        value={formik.values.zone_2.gas_1.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas_1.tonene_CO2'
                                        value={formik.values.zone_2.gas_1.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                                2.3 การใช้พลังงานในส่วนธุรกิจ การค้า และหน่วยงานต่างๆ
                            </td>
                            <td>
                                พลังงานไฟฟ้า
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas_2.amount_of_energy'
                                        value={formik.values.zone_2.gas_2.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                            หน่วย/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas_2.kgCO2_eq'
                                        value={formik.values.zone_2.gas_2.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas_2.tonene_CO2'
                                        value={formik.values.zone_2.gas_2.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                                2.4 การใช้พลังงานในอุตสาหกรรมการผลิต
                            </td>
                            <td>
                                พลังงานไฟฟ้า
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas_3.amount_of_energy'
                                        value={formik.values.zone_2.gas_3.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                            หน่วย/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas_3.kgCO2_eq'
                                        value={formik.values.zone_2.gas_3.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_2.gas_3.tonene_CO2'
                                        value={formik.values.zone_2.gas_3.tonene_CO2}
                                        onChange={formik.handleChange} />
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
                                3.1 การจัดการขยะมูลฝอยแบบฝังกลบนอกเขตเทศบาล
                            </td>
                            <td>
                                ปริมาณ
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_3.gas.amount_of_energy'
                                        value={formik.values.zone_3.gas.amount_of_energy}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                ตัน/ปี
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_3.gas.kgCO2_eq'
                                        value={formik.values.zone_3.gas.kgCO2_eq}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup size="sm">
                                    <Input placeholder="0"
                                        type='number'
                                        pattern="[0-9.]*"
                                        onKeyPress={(e) => {
                                            const regex = new RegExp(/Enter|[0-9.]/);
                                            if (!regex.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} id='zone_3.gas.tonene_CO2'
                                        value={formik.values.zone_3.gas.tonene_CO2}
                                        onChange={formik.handleChange} />
                                </InputGroup>
                            </td>
                        </tr>

                    </tbody>

                </Table>
                <div>
                    {/* <br />
                    <p style={{

                        color: '#797979',
                        letterSpacing: '.3px',
                        textAlign: 'center',
                        fontWeight: 500, fontSize: '14px'

                    }}> <span style={{ color: 'red' }}>*</span>ข้อมูลวันที่</p>
                    <InputGroup size="sm">
                        <Input type="date" />
                    </InputGroup> */}
                    <br />
                    <Button color="primary" block size="sm">บันทึกข้อมูล </Button>{' '}
                </div>
            </form>
        </>
    );
}

export default Example;