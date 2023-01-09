// import type { NextPage } from "next";
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Col,
    Row,
    Modal,
    ModalBody,
    Card,
    Label,
    Input,
    FormGroup,
    Form,
} from "reactstrap";

import Navber from "../components/Navber";
import AOS from 'aos';
import Login from "../components/login";
import { useEffect, useState } from "react";
import stylesAOS from '../styles/feature.module.scss';
import ChartSup from "../components/chartSup";
import Chart from "../components/chart";
import ListChart from "../components/listChart";
import { BsMegaphone } from "react-icons/bs";
import { useCookies } from 'react-cookie';

import Events from "../components/event";

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
    };
    const [state, setStated] = useState(false);
    const setStateds = () => {
        setStated(true)
        toggle();
    }
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const [stateCokie, setState] = useState(false);

    const toggle = () => setModal(!modal);
    const setCheck = () => {
        toggle();
    }
    const data = [{
        "id": 1,
        "img": "https://picsum.photos/300/200",
        "title": "บทความ 1",
        "subtitle": "กิจกรรมทดสอบที่ 1",
        "detail": "text ........................"
    },
    {
        "id": 2,
        "img": "https://picsum.photos/300/200",
        "title": "บทความ 2",
        "subtitle": "กิจกรรมทดสอบที่ 2",
        "detail": "text ........................"
    },
    {
        "id": 3,
        "img": "https://picsum.photos/300/200",
        "title": "บทความ 3",
        "subtitle": "กิจกรรมทดสอบที่ 3",
        "detail": "text ........................"
    }]
    useEffect(() => {
        AOS.init();
    }, []);
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
                        {/* <Col xs="12" md={4}>
                            <Chart />
                        </Col> */}

                        <Col xs="12" md={12}>
                        <iframe src="https://locatestore.com/Oakuod" style={{border:'none',width:'100%',height:"600px"}} allow="geolocation"></iframe>
                        </Col>
                    </Row>
                </div>
               


            </>
        </>
    );
};

export default Home;
