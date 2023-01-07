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
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import Navber from "../components/Navber";
import Dashboard from "../components/dashboard";
import NewBg from "../public/NewBg.jpg";
import Form from "../components/form";
import Textname from "../components/Textname";
import Reports from "./reports";
import Qrcodes from "../public/img/qrcode.jpg";
import Image from "next/image";
import Login from "../components/login";
import { useEffect, useState } from "react";
import CarouselPage from "../components/CarouselContent"
import ListEvent from "../components/listEvent";
import Mainpartners from "../components/MainPartners"
import stylesAOS from '../styles/feature.module.scss';
import { useCookies } from 'react-cookie';
import Events from "../components/event";

const Home: NextPage = () => {
  const styles = {
    paperContainer: {
      width: "100%",
      zIndex: 1,
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // width: '150%',
      padding: 15,
      backgroundPosition: "center",
      backgroundImage: `url(${NewBg.src})`,
    },
  };
  const [state, setStated] = useState(false);
  const [stateCokie, setState] = useState(false);

  const setStateds = () => {
    setStated(true)
    toggle();
  }
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  const setCheck = () => {
    toggle();
  }
  const [cookieToken, setCookieToken, removeCookiesToken] = useCookies(['apiToken']);
  useEffect(() => {
    if (cookieToken.apiToken) {
      setState(true)

    }
  }, [cookieToken])
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
            <Col xs="12" md={6}>
              {/* <CarouselPage /> */}
              {/* <Textname /> */}
            </Col>
            <Col xs="0" md={1}>
              {/* <CarouselPage /> */}
            </Col>
            <Col xs="12" md={4}
             style={stateCokie ?{ zIndex:0}:{ zIndex:1}}
             >
              <Form />

              {/* <ListEvent /> */}
              {/* <Mainpartners /> */}
            </Col>
            <Col xs="0" md={1}>
              {/* <CarouselPage /> */}
            </Col>
          </Row>
        </div>
        <Navbar style={{ backgroundColor: "#01459a"}}></Navbar>
        <div style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Row>
            <Col xs="12" md={12}>
              <div>
                <Mainpartners />
              </div>
            </Col>
          </Row>
        </div>

        <Row style={{display:"contents"}}>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <div style={{ border: '3px solid #01459a', background: '#01459a', marginBottom: 25 }}>
            </div>{''}
            <div className={stylesAOS['x_feature']} id="x_feature" >
              <div
                data-aos="zoom-in-up"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <h3 style={{ color: '#797979' }}>Chiangrai-Decarbonization City (CDC): เพื่อการพัฒนาเมืองคาร์บอนต่ำที่น่าอยู่สร้างเศรษฐกิจสีเขียวและแหล่งท่องเที่ยวระดับนานาชาติ 
               </h3>
                <h6 style={{ color: '#797979' }}>• เพื่อพัฒนาเทคโนโลยีพร้อมใช้ Green Technology ที่สอดคล้องกับบริบทของธุรกิจต้นแบบเป้าหมายในพื้นที่เทศบาลนครเชียงราย</h6>
                <h6 style={{ color: '#797979' }}>• เพื่อประเมินมาตรฐาน การควบคุมและการประเมินโครงการลงทุนเพื่อลดการปล่อยก๊าซเรือนกระจกจากการใช้พลังงานไฟฟ้าในส่วนธุรกิจต้นแบบเป้าหมายในพื้นที่เทศบาลนครเชียงราย</h6>
                {/* <h6 style={{ color: '#797979' }}>• เพื่อจัดการองค์ความรู้ ค้นหา รวบรวม จัดเก็บ วิเวิคราะห์ สังเคราะห์องค์ความรู้ที่เกิดขึ้น จากการขับเคลื่อนการพัฒนาเมือง ท้องถิ่น และกลไกเติบโตใหม่ เพื่อพื่นำสู่การเผยแพร่สู่สาธารณะในรูปแบบต่างๆ </h6>
                <h6 style={{ color: '#797979' }}>• เพื่อถอดบทเรียนงานวิจัยและภาคปฎิบัติบัติที่เกี่ยวข้องกับการพัฒนาเมืองและกลไกเติบโตใหม่ วิเวิคราะห์ สังสัเคราะห์ เพื่อพื่ผลิต เป็นข้อเสนอเชิงนโยบาย (Policy Paper)</h6>
                <h6 style={{ color: '#797979' }}>• เพื่อติดตามความก้าวหน้าส่งเสริมและสนับสนุนการดำเนินโครงการวิจัยเพื่อพัฒนาเมือง ท้องถิ่น และกลไกเติบโตใหม่ที่ได้รับอนุมัติจากโปรแกรม 15 หน่วยบริหารและจัดการทุน ด้านการ พัฒนาระดับพื้นที่</h6>
                <h6 style={{ color: '#797979' }}>• เพื่อเผยแพร่ข้อมูลข่าวสาร และชุดความรู้ที่เป็นผลที่ได้จากการทำการวิจัวิยเพื่อนำไปสู่การสื่อสารสาธารณะ และสร้างความเข้าใจในการดำเนินงานที่เกี่ยวข้องกับการพัฒนาเมืองท้องถิ่นและกลไกเติบโตใหม่</h6>
                <h6 style={{ color: '#797979' }}>• เพื่อส่งเสริมสนับสนุนงานวิจัยภายใต้ประเด็นวิจัยที่สนับสนุนการพัฒนาเมือง ท้องถิ่น และกลไกเติบโตใหม่</h6>
                <h6 style={{ color: '#797979' }}>• เพื่อสนับสนุนการดำเนินงานของหน่วยบริหารและจัดการทุนด้านการพัฒนาระดับพื้นที่ (บพท.) ในการจัดประชุม สัมมนาต่าง ๆ ที่เกี่ยวข้องกับการพัฒนาเมือง ท้องถิ่น และกลไกเติบโตใหม่</h6> */}
              </div>
            </div>

          </Col>
          < Events />
        </Row>

     


      </>
      {/* <div
        style={{
          bottom: "150px",
          float: "right",
          zIndex: 99,
          position: "sticky",
        }}
      > */}
        {/* <div
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
            style={{ transform: "translate(0px,2px)" }}
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
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Home;
