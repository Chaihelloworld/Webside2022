// import type { NextPage } from "next";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Row,
  Modal,
  ModalBody,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  Label,
  Input,
  FormGroup,
  Form,
  Container,
} from "reactstrap";

import Navber from "../components/Navber";
import AOS from "aos";
import Login from "../components/login";
import { useEffect, useState } from "react";
import stylesAOS from "../styles/feature.module.scss";
import ChartSup from "../components/chartSup";
import Chart from "../components/chart";
import ListChart from "../components/listChart";
import { BsMegaphone } from "react-icons/bs";
import { useCookies } from "react-cookie";

import ChartSupType1 from "../components/chartSupType1";
import TypeCard2 from "../components/TypeCard2";
import Circle from "../components/circle";
import Events from "../components/event";
import MapGraph from "../components/MapGraph";
import MapGraphWater from "../components/MapGraphWater";
import React, { useRef } from "react";

const Home = () => {
  const styles = {
    paperContainer: {
      width: "100%",
      zIndex: 1,
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // width: '150%',
      padding: 20,
      backgroundPosition: "center",
      // backgroundImage: `url(${NewBg.src})`,
    },
    orange: {
      background: "linear-gradient(to right, #FFA500, #FF4500)",
    },
  };
  const [state, setStated] = useState(false);
  const setStateds = () => {
    setStated(true);
    toggle();
  };
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const [stateCokie, setState] = useState(false);

  const toggle = () => setModal(!modal);
  const setCheck = () => {
    toggle();
  };
  const data = [
    {
      id: 1,
      img: "https://picsum.photos/300/200",
      title: "บทความ 1",
      subtitle: "กิจกรรมทดสอบที่ 1",
      detail: "text ........................",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/200",
      title: "บทความ 2",
      subtitle: "กิจกรรมทดสอบที่ 2",
      detail: "text ........................",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/200",
      title: "บทความ 3",
      subtitle: "กิจกรรมทดสอบที่ 3",
      detail: "text ........................",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  const [cookieToken, setCookieToken, removeCookiesToken] = useCookies([
    "apiToken",
  ]);
  useEffect(() => {
    if (cookieToken.apiToken) {
      setState(true);
    }
  }, [cookieToken]);

  /////////////////////////////

  const footerRef = useRef(null);

  useEffect(() => {
    let data = localStorage.getItem("stateClick");
    if (data !== "1") {
      return;
    }
    if (footerRef && footerRef.current) {
      // Focus on the footer element
      footerRef.current.focus();
    }
  }, []);

  //   const handleClick = () => {
  //     // Check if the footer reference is available
  //     if (footerRef && footerRef.current) {
  //       // Focus on the footer element
  //       footerRef.current.focus();
  //     }
  //   };

  return (
    <>
      <Navber setStated={setStateds} />
      <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
        <ModalBody>
          <Login check={setCheck} />
        </ModalBody>
      </Modal>

      <Container>
      <div
            style={{
              border: "2px solid #01459a",
              background: "#01459a",
              marginBottom: 25,
            }}
          ></div>
        <br />
        <Row>
          <Col xs="12" md={6}>
            <ChartSupType1 />
            {/* <Col xs="12" md={6}> */}

            {/* </Col> */}
          </Col>
          <Col xs="12" md={6}>
            <Row>
              <Col xs="12" md={6}>
                <TypeCard2 />
              </Col>
              <Col xs="12" md={6}>
                <Circle />
              </Col>
              <Col xs="12" md={12}>
                {/* <div className=" break-words bg-white shadow-sm "> */}
                  <MapGraph />
                {/* </div> */}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginRight: "1px", marginTop: "15px" }} ref={footerRef}>

          <Col xs="12" md={12}>
            <div className=" break-words bg-white shadow-md ">
              <MapGraphWater />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
