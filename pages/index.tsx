import type { NextPage } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Container,
  Navbar,
  Row,
  UncontrolledCarousel,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Navber from "../components/Navber";
import Dashboard from "../components/dashboard";
import NewBg from "../public/NewBg.jpg";
import Form from "../components/form";
import Reports from "./reports";
import Qrcodes from "../public/img/qrcode.jpg";
import Image from "next/image";
import Login from "../components/login";
import { useState } from "react";

const Home: NextPage = () => {
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
      backgroundImage: `url(${NewBg.src})`,
    },
  };
const [state,setStated]=useState(false);
const setStateds= ()=>{
  setStated(true)
  toggle();
}
const [modal, setModal] = useState(false);
const [unmountOnClose, setUnmountOnClose] = useState(true);

const toggle = () => setModal(!modal);
const setCheck=()=>{
  toggle();
}
  return (
    <>
      <>
        <Navber setStated={setStateds} />
      

        <div style={styles.paperContainer}>
         

 <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
        <ModalBody>
        <Login check={setCheck} />
        </ModalBody>

      </Modal>
        
       

          <Row>
            <Col xs="12" md={6}></Col>
            <Col xs="12" md={6}>
              <Form />
            </Col>
          </Row>
        </div>
        <Navbar style={{ backgroundColor: "#01459a" }}></Navbar>

        <div style={{ padding: 20 }}>
          <Dashboard />

        </div>
      </>
      <div
        style={{
          bottom: "150px",
          float: "right",
          zIndex: 99,
          position: "sticky",
        }}
      >
        <div
          style={{
            // position: "fixed",
            border: "5px solid #0dcaf0",
            borderRadius: 10,
            bottom: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Image
            src={Qrcodes}
            style={{transform: "translate(0px,2px)"}}
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <Button
            color="info"
            disableElevation
            style={{
              transform: "translate(0px,4px)",
              width: 100,
              color: "white",
              fontWeight: 700,
            }}
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?id=1UC6pWDMHvI-dFxwJReVS1OD3sJU4vHfh&export=download",
                "_blank"
              )
            }
          >
            ดาวน์โหลด
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
