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
    Table,
} from "reactstrap";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BsFillCaretRightSquareFill, BsMegaphone } from "react-icons/bs";
import Navber from "../components/Navber";
import Dashboard from "../components/dashboard";
import NewBg from "../public/NewBg.jpg";
import Form from "../components/form";
import Reports from "./reports";
import Qrcodes from "../public/img/qrcode.jpg";
import Image from "next/image";
import Login from "../components/login";
import { useState } from "react";
import CarouselPage from "../components/CarouselContent"
import ListEvent from "../components/listEvent";
import Mainpartners from "../components/MainPartners"
import stylesAOS from '../styles/feature.module.scss';
import ListCreateBoard from "../components/listCreateBoard";

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
            // backgroundImage: `url(${NewBg.src})`,
        },
    };
    const [state, setStated] = useState(false);
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

                </div>
                {/* <Navbar style={{ backgroundColor: "#01459a"}}></Navbar> */}
                <div style={{
                    padding: 20,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Row>
                        <Col xs="12" md={12}>
                            <div>
                                <p style={{
                                    color: '#797979',
                                    transition: '0.4s ease',
                                    letterSpacing: '2px',
                                    textAlign: 'left',
                                    fontWeight: 500
                                }}> <BsMegaphone color='red' style={{ transform: 'translate(0px,-2px)' }} /> {' '}บทความและกิจกรรม</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Row style={{ display: "contents" }}>

                        <Col  sm="12" md={{ size: 8, offset: 2 }}>
                            <div style={{ border: '3px solid #01459a', background: '#01459a', marginBottom: 25 }}>
                            </div>{''}
                            <div className={stylesAOS['x_feature']} id="x_feature" >
                                <div
                                    data-aos="zoom-in-up"
                                    data-aos-duration="600"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="true"
                                >
                               ................................
                                </div>
                            </div>

                        </Col>
                </Row>



            </>
        </>
    );
};

export default Home;
