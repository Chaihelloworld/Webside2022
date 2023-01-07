import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Col,
  Form,
  FormText,
  Input,
  Label,
  Card,
  CardText,
  CardTitle,
  Row,
} from "reactstrap";
import styler from "../styles/Navbar.module.scss";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import { storage } from "../libs/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useFormik } from "formik";
import * as yup from "yup";
import { BsFillTrashFill } from "react-icons/bs";
import { v4 } from "uuid";
import { async } from "@firebase/util";
import Qrcodes from "../public/img/qrcode.jpg";
import imgIcon from "../public/img/elec.png";
import imgweater from "../public/img/weater.png";

import Text from "../public/text.png";
import Logobanner from "../public/logobanner.png"
const validationSchema = yup.object({
  schoolname: yup.string().required("กรุณากรอกข้อมูล"),
  // .matches(/^[ก-๙]+$/, "กรุณากรอกชื่อเป็นภาษาไทยเท่านั้น"),
  fullname: yup.string().required("กรุณากรอกข้อมูล"),
  // .required("กรุณากรอกชื่อเป็นภาษาไทยเท่านั้น")
  // .matches(/^[ก-๙]+$/, "กรุณากรอกชื่อเป็นภาษาไทยเท่านั้น"),
  class: yup.string().required("กรุณากรอกข้อมูล"),
  num: yup.string().required("กรุณากรอกข้อมูล"),
  phone: yup
    .number()
    .required("กรุณากรอก phone เป็นตัวเลขเท่านั้น")
    .typeError("กรุณากรอก phone เป็นตัวเลขเท่านั้น"),
  address: yup.string().required("กรุณากรอกข้อมูล"),
  member: yup.string().required("กรุณากรอกข้อมูล"),
  amount_month: yup.string().required("กรุณากรอกข้อมูล"),
  occupation: yup.string().required("กรุณากรอกข้อมูล"),
  // billelec: yup.string().required("กรุณากรอกข้อมูล"),
  // numbillelec: yup.string().required("กรุณากรอกข้อมูล"),
  // name_using_w: yup.string().required("กรุณากรอกข้อมูล"),
  // num_using_w: yup.string().required("กรุณากรอกข้อมูล"),
  // using_pow: yup.string().required("กรุณากรอกข้อมูล"),
  // using_pow_amount: yup.string().required("กรุณากรอกข้อมูล"),
  // guss_amount: yup.string().required("กรุณากรอกข้อมูล"),
  // guss_size: yup.string().required("กรุณากรอกข้อมูล"),
  // guss_using: yup.string().required("กรุณากรอกข้อมูล"),
});

function Modals(args) {


  return (
    <div style={{ marginTop: 50, marginBottom: 50 }}>
      <Row>
        <Col sm={12} md={12}>
          <Card body style={{ backgroundColor: "#ffffff00",border:'none' }}>
            <CardTitle style={{ fontWeight: 700, fontSize: "25px" }}>
            <Image
            src={Text}

            width={450}
              height={380}
            />
              {/* <Image
              width={450}
              height={100}
            src={Logobanner}
            /> */}

            </CardTitle>

            </Card>
            </Col>
            </Row>
            </div>
  );
}

export default Modals;
