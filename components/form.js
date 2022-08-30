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
const validationSchema = yup.object({
  // fullname: yup
  //   .string()
  //   .required("กรุณากรอกชื่อเป็นภาษาไทยเท่านั้น")
  //   .matches(/^[ก-๙]+$/, "กรุณากรอกชื่อเป็นภาษาไทยเท่านั้น"),
  // phone: yup
  //   .number()
  //   .required("กรุณากรอก username เป็นตัวเลขเท่านั้น")
  //   .typeError("กรุณากรอก username เป็นตัวเลขเท่านั้น"),
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
      userid:"",
      name: "",
      link: [],
    },
  ]);
  const formik = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      email: "",
      address: "",
      member: "",
      amount_month: "",
      occupation: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const param = {
          fullname: values.fullname,
          phone: values.phone,
          email: values.email,
          address: values.address,
          member: values.member,
          amount_month: values.amount_month,
          occupation: values.occupation,
        };
        console.log(param)

        const result = await axios.post(
          "https://e9be-184-82-27-191.ap.ngrok.io/api/create_list",
          param
        );

        if (result) {
         

          console.log(result);
          setModal(false);
          Swal.fire("Good job!", "You clicked the button!", "success");
        } else {
          console.log("err 500");
        }
        if(Overload){
          teestupload();
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
      console.log(inputList.userid)
      const param = inputList
      
      // if(param.userid == null) 
      for (let index = 0; index < param.length; index++) {
        console.log(param[index])
        const result = await axios.post(
          "https://e9be-184-82-27-191.ap.ngrok.io/api/create_room",
          param[index]
        );
  
        if (result) {
          console.log(result);
          setModal(false);
          Swal.fire("Good job!", "You clicked the button!", "success");
        } else {
          console.log("err 500");
        }
      
      }
    } catch (error) {
      console.log(error);
    } finally {
      setOverload(false)

      console.log("connecting");
    }
   
  };
  
  const handleInputChange = (e, index) => {
    const dataimg = e.target.files
    let i = 0;
      const imageTage = [];
    if (dataimg == null) {
      
      console.log("image = null");
    } else {

      const length = e.target.files.length;

      for (let index = 0; index < length; index++) {
        const imageRef = ref(
          storage,
          `images/${dataimg[index].name + v4()}`
        );
        uploadBytes(imageRef, dataimg[index]).then((res) => {
          imageTage.push(res.metadata.name);
        });
      }
      setOverload(true)
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
    setInputList([
      ...inputList,
      {  userid:"",
        name: "",
        link: [],
      },
    ]);
  };
console.log(formik.values.phone)
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
            <div style={{display:'flex'}}>
            <Button className={styler.btnstyle} onClick={toggle}>
              บันทึกข้อมูล
            </Button>
            <Button  color="success"
                disableElevation  style={{transform:'translate(5px,0px)',width:250}} onClick={()=> window.open('https://docs.google.com/forms/d/e/1FAIpQLSecTcif-SUzSzxLGulvbGTQgeH_rjiLQ_nTIkmGiScrdtlftA/viewform', "_blank")} >
              Google form
            </Button>
            </div>
           
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
              <Label for="fullname">ชื่อ-สกุล</Label>
              <Col sm={12}>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder=""
                  fullWidth
                  type="text"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullname && Boolean(formik.errors.fullname)
                  }
                  helperText={formik.touched.fullname && formik.errors.fullname}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="phone">เบอร์โทรศัพท์</Label>
              <Col sm={12}>
                <Input
                  id="phone"
                  name="phone"
                  placeholder=""
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="email">อีเมล์</Label>
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
            </FormGroup>
            <FormGroup>
              <Label for="address">ที่อยู่ บ้านเลขที่ ตำบล</Label>
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
            </FormGroup>

            <FormGroup>
              <Label for="member">จำนวนสมาชิกในครัวเรือน</Label>
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
            </FormGroup>

            <FormGroup>
              <Label for="amount_month">รายได้ต่อเดือน</Label>
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
            </FormGroup>
            <FormGroup>
              <Label for="occupation">อาชีพของผู้ปกครอง</Label>
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
