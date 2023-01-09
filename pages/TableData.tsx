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
import { useEffect, useState } from "react";
import CarouselPage from "../components/CarouselContent"
import ListEvent from "../components/listEvent";
import Mainpartners from "../components/MainPartners"
import stylesAOS from '../styles/feature.module.scss';
import ListCreateBoard from "../components/listCreateBoard";
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import stylesIcon from '../styles/BlinkText.module.css';
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
interface datalist {
    sumCO2rq: any;
    tonneCO2: any;
    created_date: string;
    id: number;
    modified_date: string
    raw: [

    ]

}
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
    const [loading, setLoading] = useState(false);

    const toggle = () => setModal(!modal);
    const setCheck = () => {
        toggle();
    }

    const [listdata, setListdata] = useState([]);
    const router = useRouter();
    const fatchData = async () => {

        try {

            const result = await axios.get(
                "https://www.serverwebp-api.com/api/resource");

            if (result) {
                console.log(result.data.data);
                // setListdata(result.data.data)
                console.log(result.data.data);
                let data = result.data.data
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    data[i]['sumCO2rq'] = 0
                    data[i]['tonneCO2'] = 0
                    for (const [key1, value1] of Object.entries(element.raw)) {
                        // for (const [key2, value2] of Object.entries(element.raw[key1])) 
                        for (const key2 in element.raw[key1]) {
                            const value2 = element.raw[key1][key2]
                            // console.log('123',element.raw[key1])

                            if (value2.kgCO2_eq) {
                                data[i]['sumCO2rq'] += Number(value2.kgCO2_eq)
                            }
                            if (value2.tonene_CO2) {
                                data[i]['tonneCO2'] += Number(value2.tonene_CO2)
                            }
                        }
                    }
                    //   console.log(sumEnergy)
                    setListdata(data)
                    //   console.log(data)
                    //   console.log(tonneCO2)


                }

            } else {
                console.log("err 500");
            }
        } catch (error) {
            console.log(error);
        } finally {
            console.log("connecting");
        }
    }
    useEffect(() => {
        fatchData();
        setLoading(false)

    }, [loading])
    const formatDate =(data: string | number | Date)=>{
        const date = new Date(data);


        
        const formattedDate = date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
        return formattedDate
    }
   
    const fetchdata = async (id: any) => {    
        try {
    
          const result = await axios.delete(
            `https://www.serverwebp-api.com/api/resource?id=${id}`);
          console.log('x ===',result.data.success)
          setLoading(true)
          let KgCo2 = 0
          let tonene = 0
    
        //   if (result.data.success) {
            console.log('delete success!')
            Swal.fire("Good job!", "ลบข้อมูลสำเร็จ!", "success");
            router.push('/TableData');
            // router.reload();
        //   } 
         
        } catch (error) {
          console.log(error);
          console.log('delete success!')
        } finally {
          console.log("connecting");

        }
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
                                }}> <BsMegaphone color='red' style={{ transform: 'translate(0px,-2px)' }} /> {' '}ข้อมูลทรัพยากร</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Row style={{ display: "contents" }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Col xs="12" md={12}>
                            <div style={{ border: '3px solid #01459a', background: '#01459a', marginBottom: 25 }}>
                            </div>{''}
                            {/* <div className={stylesAOS['x_feature']} id="x_feature" >
                                <div
                                    data-aos="zoom-in-up"
                                    data-aos-duration="600"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="true"
                                > */}
                                    <Table bordered>
                                        <thead>
                                            <tr style={{
                                                marginRight: 80,
                                                transition: '0.4s ease',
                                                color: '#797979',
                                                letterSpacing: '.3px',
                                                textAlign: 'center',
                                                fontWeight: 500
                                            }} >
                                                <th>
                                                    วันที่
                                                </th>
                                                {/* <th>
                                                    ขอบเขตที่
                                                </th> */}

                                                <th>
                                                    ปริมาณพลังงาน kgCO2_eq
                                                </th>
                                                <th>
                                                    ปริมาณพลังงาน tonneCO2
                                                </th>
                                                <th>
                                                    หน่วย
                                                </th>

                                                <th style={{ width: 100 }}>
                                                    จัดการ
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listdata.map((data: datalist, index) => {

                                    
                                                return (
                                                    <tr key={index}  style={{
                                                        marginRight: 80,
                                                        transition: '0.4s ease',
                                                        color: '#797979',
                                                        letterSpacing: '.3px',
                                                        textAlign: 'center',
                                                        fontWeight: 500
                                                    }}>
                                                        <th scope="row">
                                                            {formatDate(data.created_date)}
                                                        </th>
                                                        {/* <td>
                                                            1
                                                        </td> */}

                                                        <td>
                                                            {data.sumCO2rq.toLocaleString("en-US")
}
                                                        </td>
                                                        <td>
                                                            {data.tonneCO2.toLocaleString("en-US")
}
                                                        </td>
                                                        <td>
                                                            กิโลกรัม/ปี
                                                        </td>

                                                        <td>
                                                            <div style={{ display: 'flex', padding: 5 }}>

                                                                <Button 
                                                                    onClick={()=>{
                                                                        router.push({
                                                                            pathname:
                                                                                '/update',
                                                                            query: {
                                                                                id: data.id
                                                                            }
                                                                        })
                                                                    }}
                                                        
                                                                    className={stylesIcon.editIcon}>
                                                                    <FaEdit />
                                                                </Button>

                                                                <Button
                                                                    className={stylesIcon.deleteIcon}
                                                                    onClick={()=>{
                                                                        fetchdata(data.id)
                                                                    }}
                                                                    fetchdata
                                                                >
                                                                    <RiDeleteBinLine />
                                                                </Button>


                                                            </div>

                                                        </td>
                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </Table>
                                {/* </div>
                            </div> */}

                        </Col>
                    </div>
                </Row>



            </>
        </>
    );
};

export default Home;
