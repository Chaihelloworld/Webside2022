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
  const [imageUpload, setImageUpload] = useState(null);
  const [modal, setModal] = useState(false);
  const [getUser, setGetUser] = useState();
  const [Overload, setOverload] = useState(false);

  const toggle = () => setModal(!modal);

  // const submit = () => {
  //   console.log(email, password);

  // };
  const [inputList, setInputList] = useState([
    {
      userid: "",
      name: "",
      link: [],
    },
  ]);
  const [data, setData] = useState();
  const initialValues = {
    schoolname: "",
    fullname: "",
    class: "",
    num: "",
    phone: "",
    email: "",
    address: "",
    member: "",
    amount_month: "",
    occupation: "",
    billelec: "",
    numbillelec: "",
    name_using_w: "",
    num_using_w: "",
    using_pow: "",
    using_pow_amount: "",
    guss_amount: "",
    guss_size: "",
    guss_using: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      // console.log('values ===>',values)
      setData(values);

      // if (Overload) {
      teestupload();
      // }
      try {
        const param = {
          schoolname: values.schoolname,
          fullname: values.fullname,
          class: values.class,
          num: values.num,
          phone: values.phone,
          email: values.email,
          address: values.address,
          member: values.member,
          amount_month: values.amount_month,
          occupation: values.occupation,
          billelec: values.billelec,
          numbillelec: values.numbillelec,
          name_using_w: values.name_using_w,
          num_using_w: values.num_using_w,
          using_pow: values.using_pow,
          using_pow_amount: values.using_pow_amount,
          guss_amount: values.guss_amount,
          guss_size: values.guss_size,
          guss_using: values.guss_using,
        };

        const result = await axios.post(
          "https://www.serverwebp-api.com/api/create_list",
          param
        );

        if (result) {
          // console.log(result);

          setModal(false);
          Swal.fire("Good job!", "บันทึกข้อมูลสำเร็จ!", "success");
          window.location.reload();
        } else {
          console.log("err 500");
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log("connecting");
      }
    },
  });
  const [flielength, setFlieLength] = useState(0);
  const [arryImg, setArryImg] = useState([]);

  useEffect(() => {
    for (let i = 0; i < inputList.length; i++) {
      // console.log(inputList[i])
      const list = [...inputList];
      // list[i]["date"] = value;

      if (list[i]["name"]) {
        console.log(list[i]["link"]);
      } else {
        // list[i]["date"] = dayjs(selectedDate).format("YYYY-MM-DD")
        console.log("elseler");
      }
      setInputList(list);
    }
  }, []);

  const teestupload = async () => {
    // console.log(imageTage)
    try {
      console.log(inputList.userid);
      const param = inputList;

      // if(param.userid == null)
      for (let index = 0; index < param.length; index++) {
        // console.log(param[index]);
        const result = await axios.post(
          "https://www.serverwebp-api.com/api/create_room",
          param[index]
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setOverload(false);

      // console.log("connecting");
    }
  };

  const handleInputChange = (e, index) => {
    const dataimg = e.target.files;
    let i = 0;
    const imageTage = [];
    if (dataimg == null) {
      // console.log("image = null");
    } else {
      const length = e.target.files.length;

      for (let index = 0; index < length; index++) {
        const imageRef = ref(storage, `images/${dataimg[index].name + v4()}`);
        uploadBytes(imageRef, dataimg[index]).then((res) => {
          imageTage.push(res.metadata.name);
        });
      }
      setOverload(true);
    }

    const { name, value } = e.target;
    const { link } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    list[index]["link"] = imageTage;
    list[index]["userid"] = formik.values.phone;
    // console.log(imageTage);

    setInputList(list);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const handleAddClick = () => {
    setInputList([...inputList, { userid: "", name: "", link: [] }]);
  };

  return (
    <div style={{ marginTop: 50, marginBottom: 50 }}>
      <Row>
        <Col sm={12} md={12}>
          <Card body style={{ backgroundColor: "#ffffffc7" }}>
            <CardTitle style={{ fontWeight: 700, fontSize: "25px" }}>
              แบบฟอร์มบันทึกข้อมูล
            </CardTitle>
            <CardText style={{ padding: "12px" }}>
              แบบฟอร์มเก็บข้อมูลไฟฟ้า น้ำประปา และคาร์บอน เพื่อนประโยชน์ส่วนรวม
              ข้อมูลจะถูกจัดเก็บและนำมาประมวลผล และแสดงผลผ่านกราฟ เพื่อให้คุณ
              สามารถตรวจสอบ ได้ด้วยตนเองแบบฟอร์มเก็บข้อมูลไฟฟ้า น้ำประปา
              และคาร์บอน เพื่อนประโยชน์ส่วนรวม ข้อมูลจะถูกจัดเก็บและนำมาประมวลผล
              และแสดงผลผ่านกราฟ เพื่อให้คุณ สามารถตรวจสอบ
              ได้ด้วยตนเองแบบฟอร์มเก็บข้อมูลไฟฟ้า น้ำประปา และคาร์บอน
              เพื่อนประโยชน์ส่วนรวม ข้อมูลจะถูกจัดเก็บและนำมาประมวลผล
              และแสดงผลผ่านกราฟ เพื่อให้คุณ สามารถตรวจสอบ ได้ด้วยตนเอง
            </CardText>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button className={styler.btnstyle} onClick={toggle}>
                บันทึกข้อมูล
              </Button>

              <Button
                color="success"
                disableElevation
                style={{ transform: "translate(5px,0px)", width: 250 }}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSecTcif-SUzSzxLGulvbGTQgeH_rjiLQ_nTIkmGiScrdtlftA/viewform",
                    "_blank"
                  )
                }
              >
                Google form
              </Button>
            </div>
            {/* <Button  color="info" 
                disableElevation  style={{transform:'translate(0px,0px)',width:250,color:'white',fontWeight:700,marginTop:15}} onClick={()=> window.open('https://drive.google.com/file/d/1UC6pWDMHvI-dFxwJReVS1OD3sJU4vHfh/view', "_blank")} >
              ไฟล์สำหรับปริ้น
            </Button>
            <div style={{width:'250px',marginTop:15}}>
            <Image
                  src={Qrcodes}
                  alt="Picture of the author"
                  width={250}
                  height={250}
                />
            </div> */}
          </Card>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggle} size="lg" {...args}>
        <ModalHeader toggle={toggle}>
          {" "}
          <p style={{ fontSize: "16px" }}>บันทึกข้อมูลการใช้พลังงานครัวเรือน</p>
        </ModalHeader>
        <ModalBody>
          {/* <Form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}> */}
          <form
            // method="post"
            // onChange={handleOnChange}
            // onSubmit={handleOnSubmit}
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
              <FormGroup>
              <Label for="schoolname" style={{color:'#005aa9'}}>
                ส่วนที่ 1 ข้อมูลทั่วไป
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="schoolname">
                <span style={{ color: "red" }}>*</span>ชื่อโรงเรียน
              </Label>
              <Col sm={12}>
                <Input
                  id="schoolname"
                  name="schoolname"
                  placeholder=""
                  fullWidth
                  type="text"
                  value={formik.values.schoolname}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.schoolname)}
                />
                {Boolean(formik.errors.schoolname) ? (
                  <smail style={{ fontSize: 12, color: "red" }}>
                    *กรุณากรอกข้อมูล
                  </smail>
                ) : (
                  ""
                )}
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="fullname">
                <span style={{ color: "red" }}>*</span>ชื่อ-สกุล
              </Label>
              <Col sm={12}>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder=""
                  fullWidth
                  type="text"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.fullname)}
                />
                {Boolean(formik.errors.fullname) ? (
                  <smail style={{ fontSize: 12, color: "red" }}>
                    *กรุณากรอกข้อมูล
                  </smail>
                ) : (
                  ""
                )}
              </Col>
            </FormGroup>
            <FormGroup style={{ marginTop: 15 }}>
              <Row>
                <Col sm={6}>
                  <Label for="class">
                    <span style={{ color: "red" }}>*</span>ชั้น
                  </Label>
                  <Input
                    id="class"
                    name="class"
                    placeholder=""
                    type="text"
                    value={formik.values.class}
                    onChange={formik.handleChange}
                    error={formik.touched.class && Boolean(formik.errors.class)}
                    helperText={formik.touched.class && formik.errors.class}
                  />
                  {Boolean(formik.errors.class) ? (
                    <smail style={{ fontSize: 12, color: "red" }}>
                      *กรุณากรอกข้อมูล
                    </smail>
                  ) : (
                    ""
                  )}
                </Col>

                <Col sm={6}>
                  <Label for="num">
                    <span style={{ color: "red" }}>*</span>เลขที่
                  </Label>

                  <Input
                    id="num"
                    name="num"
                    placeholder=""
                    type="text"
                    value={formik.values.num}
                    onChange={formik.handleChange}
                    error={formik.touched.num && Boolean(formik.errors.num)}
                    helperText={formik.touched.num && formik.errors.num}
                  />
                  {Boolean(formik.errors.num) ? (
                    <smail style={{ fontSize: 12, color: "red" }}>
                      *กรุณากรอกข้อมูล
                    </smail>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label for="phone">
                <span style={{ color: "red" }}>*</span>เบอร์โทรศัพท์
              </Label>
              <Col sm={12}>
                <Input
                  id="phone"
                  name="phone"
                  placeholder=""
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
                {Boolean(formik.errors.phone) ? (
                  <smail style={{ fontSize: 12, color: "red" }}>
                    *กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง
                  </smail>
                ) : (
                  ""
                )}
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="email">
                <span style={{ color: "red" }}>*</span>อีเมล์
              </Label>
              <Col sm={12}>
                <Input
                  id="email"
                  name="email"
                  placeholder=""
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Col>
              {Boolean(formik.errors.email) ? (
                <smail style={{ fontSize: 12, color: "red" }}>
                  *กรุณากรอกอีเมล์ให้ถูกต้อง
                </smail>
              ) : (
                ""
              )}
            </FormGroup>
            <FormGroup>
              <Label for="address">
                <span style={{ color: "red" }}>*</span>ที่อยู่ บ้านเลขที่ ตำบล
              </Label>
              <Col sm={12}>
                <Input
                  id="address"
                  name="address"
                  type="textarea"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Col>
              {Boolean(formik.errors.address) ? (
                <smail style={{ fontSize: 12, color: "red" }}>
                  *กรุณากรอกข้อมูล
                </smail>
              ) : (
                ""
              )}
            </FormGroup>

            <FormGroup>
              <Label for="member">
                <span style={{ color: "red" }}>*</span>จำนวนสมาชิกในครัวเรือน
                (คน)
              </Label>
              <Col sm={12}>
                <Input
                  id="member"
                  name="member"
                  placeholder=""
                  type="number"
                  value={formik.values.member}
                  onChange={formik.handleChange}
                  error={formik.touched.member && Boolean(formik.errors.member)}
                  helperText={formik.touched.member && formik.errors.member}
                />
              </Col>
              {Boolean(formik.errors.member) ? (
                <smail style={{ fontSize: 12, color: "red" }}>
                  *กรุณากรอกข้อมูล
                </smail>
              ) : (
                ""
              )}
            </FormGroup>

            <FormGroup>
              <Label for="amount_month">
                <span style={{ color: "red" }}>*</span>รายได้ต่อเดือน (บาท)
              </Label>
              <Col sm={12}>
                <Input
                  id="amount_month"
                  name="amount_month"
                  placeholder=""
                  type="number"
                  value={formik.values.amount_month}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.amount_month &&
                    Boolean(formik.errors.amount_month)
                  }
                  helperText={
                    formik.touched.amount_month && formik.errors.amount_month
                  }
                />
              </Col>
              {Boolean(formik.errors.amount_month) ? (
                <smail style={{ fontSize: 12, color: "red" }}>
                  *กรุณากรอกข้อมูล
                </smail>
              ) : (
                ""
              )}
            </FormGroup>
            <FormGroup>
              <Label for="occupation">
                <span style={{ color: "red" }}>*</span>อาชีพของผู้ปกครอง
              </Label>
              <Col sm={12}>
                <Input
                  id="occupation"
                  name="occupation"
                  placeholder=""
                  type="text"
                  value={formik.values.occupation}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.occupation &&
                    Boolean(formik.errors.occupation)
                  }
                  helperText={
                    formik.touched.occupation && formik.errors.occupation
                  }
                />
              </Col>
              {Boolean(formik.errors.occupation) ? (
                <smail style={{ fontSize: 12, color: "red" }}>
                  *กรุณากรอกข้อมูล
                </smail>
              ) : (
                ""
              )}

              
            </FormGroup>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <FormGroup>
              <Label for="schoolname" style={{color:'#005aa9'}}>
                ส่วนที่ 2 ข้อมูลด้านการใช้พลังงาน
              </Label>
            </FormGroup>
            <div
              style={{
                // justifyContent: "space-between",
                float: "right",
                // alignItems: "center",
              }}
            >
        
              <Button
                type="button"
                size="sm"
             
                style={{ transform: "translate(0px,0px)" ,backgroundColor:'#5e7387',border:'none'}}
                onClick={()=>{
                  window.open(
                    "https://drive.google.com/file/d/1zHBfxX-YxaM33667BklbyI5iOKGDX-PC/view",
                    "_blank"
                  )
                }}
                disableElevation
              >
                ดูตัวอย่างคู่มือการเก็บข้อมูล
              </Button>
              </div>
            </div>
            
      
              
            {/* <FormGroup style={{ marginTop: 15 }}>
              <Col sm={12}>
                <Image
                  src={imgIcon}
                  alt="Picture of the author"
                  width={750}
                  height={250}
                />
              </Col>
            </FormGroup> */}

            <FormGroup style={{ marginTop: 1 }}>
              
              <Row>
                <Col sm={6}>
                  <Label for="billelec">หมายเลขที่ผู้ใช้ไฟฟ้า</Label>
                  <Input
                    id="billelec"
                    name="billelec"
                    placeholder=""
                    type="text"
                    value={formik.values.billelec}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.billelec && Boolean(formik.errors.billelec)
                    }
                    helperText={
                      formik.touched.billelec && formik.errors.billelec
                    }
                  />
                </Col>

                <Col sm={6}>
                  <Label for="numbillelec">รหัสเครื่องวัด</Label>

                  <Input
                    id="numbillelec"
                    name="numbillelec"
                    placeholder=""
                    type="text"
                    value={formik.values.numbillelec}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.numbillelec &&
                      Boolean(formik.errors.numbillelec)
                    }
                    helperText={
                      formik.touched.numbillelec && formik.errors.numbillelec
                    }
                  />
                </Col>
              </Row>
            </FormGroup>
            {/* <FormGroup style={{ marginTop: 15 }}>
              <Col sm={12}>
                <Image
                  src={imgweater}
                  alt="Picture of the author"
                  width={750}
                  height={250}
                />
              </Col>
            </FormGroup> */}
            <FormGroup>
              <Row>
                <Col sm={6}>
                  <Label for="name_using_w">ชื่อผู้ใช้น้ำ</Label>

                  <Input
                    id="name_using_w"
                    name="name_using_w"
                    placeholder=""
                    type="text"
                    value={formik.values.name_using_w}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.name_using_w &&
                      Boolean(formik.errors.name_using_w)
                    }
                    helperText={
                      formik.touched.name_using_w && formik.errors.name_using_w
                    }
                  />
                </Col>

                <Col sm={6}>
                  <Label for="num_using_w">เลขที่ผู้ใช้น้ำ</Label>

                  <Input
                    id="num_using_w"
                    name="num_using_w"
                    placeholder=""
                    type="text"
                    value={formik.values.num_using_w}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.num_using_w &&
                      Boolean(formik.errors.num_using_w)
                    }
                    helperText={
                      formik.touched.num_using_w && formik.errors.num_using_w
                    }
                  />
                </Col>

                <Col sm={6} style={{marginTop:5}}>
                  <Label for="using_pow">การใช้น้ำมันดีเซล (บาท/เดือน)</Label>
                  <Input
                    id="using_pow"
                    name="using_pow"
                    placeholder=""
                    type="text"
                    value={formik.values.using_pow}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.using_pow &&
                      Boolean(formik.errors.using_pow)
                    }
                    helperText={
                      formik.touched.using_pow && formik.errors.using_pow
                    }
                  />
                </Col>

                <Col sm={6} style={{marginTop:5}}>
                  <Label for="using_pow_amount">
                    การใช้น้ำมันดีเซล (ลิตร/เดือน)
                  </Label>
                  <Input
                    id="using_pow_amount"
                    name="using_pow_amount"
                    placeholder=""
                    type="text"
                    value={formik.values.using_pow_amount}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.using_pow_amount &&
                      Boolean(formik.errors.using_pow_amount)
                    }
                    helperText={
                      formik.touched.using_pow_amount &&
                      formik.errors.using_pow_amount
                    }
                  />
                </Col>
                <Col sm={6} style={{marginTop:5}}>
                  <Label for="using_pow">การใช้น้ำมันเบนซิน (บาท/เดือน)</Label>
                  <Input
                    id="using_pow"
                    name="using_pow"
                    placeholder=""
                    type="text"
                    value={formik.values.using_pow}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.using_pow &&
                      Boolean(formik.errors.using_pow)
                    }
                    helperText={
                      formik.touched.using_pow && formik.errors.using_pow
                    }
                  />
                </Col>

                <Col sm={6} style={{marginTop:5}}>
                  <Label for="using_pow_amount">
                    การใช้น้ำมันเบนซิน (ลิตร/เดือน)
                  </Label>
                  <Input
                    id="using_pow_amount"
                    name="using_pow_amount"
                    placeholder=""
                    type="text"
                    value={formik.values.using_pow_amount}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.using_pow_amount &&
                      Boolean(formik.errors.using_pow_amount)
                    }
                    helperText={
                      formik.touched.using_pow_amount &&
                      formik.errors.using_pow_amount
                    }
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col sm={6}>
                  <Label for="guss_size">ขนาดถังก๊าซหุงต้ม (ลิตร/เดือน)</Label>
                  <Input
                    id="guss_size"
                    name="guss_size"
                    placeholder=""
                    type="text"
                    value={formik.values.guss_size}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.guss_size &&
                      Boolean(formik.errors.guss_size)
                    }
                    helperText={
                      formik.touched.guss_size && formik.errors.guss_size
                    }
                  />
                </Col>
                <Col sm={6}>
                  <Label for="guss_amount">จำนวนก๊าซหุงต้ม (กิโลกรัม)</Label>
                  <Input
                    id="guss_amount"
                    name="guss_amount"
                    placeholder=""
                    type="text"
                    value={formik.values.guss_amount}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.guss_amount &&
                      Boolean(formik.errors.guss_amount)
                    }
                    helperText={
                      formik.touched.guss_amount && formik.errors.guss_amount
                    }
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label for="guss_using">
                ปริมาณก๊าซหุงต้มขนาด 1 ถัง ใช้ได้กี่เดือน
              </Label>
              <Col sm={12}>
                <Input
                  id="guss_using"
                  name="guss_using"
                  placeholder=""
                  type="text"
                  value={formik.values.guss_using}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.guss_using &&
                    Boolean(formik.errors.guss_using)
                  }
                  helperText={
                    formik.touched.guss_using && formik.errors.guss_using
                  }
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="schoolname" style={{color:'#005aa9'}}>
                ส่วนที่ 3 ข้อมูลเครื่องใช้ไฟฟ้า
              </Label>
            </FormGroup>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                float: "right",
                alignItems: "center",
              }}
            >
              {" "}
        
              {" "}
              <Button
                type="button"
                size="sm"
                style={{ transform: "translate(-15px,-8px)" ,backgroundColor:'#5e7387',border:'none'}}
                onClick={()=>{
                  window.open(
                    "https://drive.google.com/file/d/10Nwu_s0Zqjl-LI2nlqDwa4Ea6Cj1xseY/view?usp=sharing",
                    "_blank"
                  )
                }}
                disableElevation
              >
                ดูตัวอย่างคู่มือการเก็บข้อมูล
              </Button>
              <Button
                type="button"
                size="sm"
                color="primary"
                style={{ transform: "translate(0px,-8px)" }}
                onClick={handleAddClick}
                disableElevation
              >
                เพิ่มประเภทห้อง
              </Button>
            </div>
            {inputList.map((x, i) => {
              return (
                <>
                  <FormGroup>
                    <Label for="name">ประเภทห้อง</Label>
                    {inputList.length !== 1 && (
                      <Button
                        size="sm"
                        style={{
                          border: "none",
                          transform: "translate(5px,1px)",
                          height: "25px",
                          backgroundColor: "red",
                        }}
                        onClick={() => handleRemoveClick(i)}
                      >
                        <BsFillTrashFill
                          fontSize={10}
                          style={{
                            transform: "translate(0px,-4px)",
                          }}
                        />
                      </Button>
                    )}

                    <Col sm={12}>
                      <Input
                        id="name"
                        name="name"
                        placeholder=""
                        type="text"
                        // value={formik.values.occupation}
                        // onChange={formik.handleChange}
                        onChange={(e) => handleInputChange(e, i)}
                        error={
                          formik.touched.occupation &&
                          Boolean(formik.errors.occupation)
                        }
                        helperText={
                          formik.touched.occupation && formik.errors.occupation
                        }
                      />
                    </Col>
                  </FormGroup>
                  <Input
                    id="link"
                    name="link"
                    type="file"
                    multiple
                    // onChange={onChange}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </>
              );
            })}
            <FormGroup
              style={{
                marginTop: 25,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                style={{ width: "150px" }}
                color="success"
                disableElevation
              >
                บันทึก
              </Button>
              <Button
                color="danger"
                style={{ transform: "translate(10px,0px)" }}
                outline
                onClick={toggle}
              >
                ยกเลิก
              </Button>
            </FormGroup>
            {/* </Form> */}
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Modals;
