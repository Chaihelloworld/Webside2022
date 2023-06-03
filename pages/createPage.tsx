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
import Login from "../components/login";
import { useState } from "react";

import stylesAOS from '../styles/feature.module.scss';

import DataTable1 from "../components/dataTable1";
import { useFormik } from 'formik';

import { useCookies } from 'react-cookie';
import axios from 'axios';

import { useRouter } from 'next/router'
import Swal from 'sweetalert2';

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
    const [name, setName] = useState('ขอบเขตที่ 1');

    const toggle = () => setModal(!modal);
    const setCheck = () => {
        toggle();
    }
    const initialValues =
    {
        zone_1: {
            gas_h: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2:'',
            },
            gas_hi: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            d_cell: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            bensin: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            gusohal_91: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            gusohal_95: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            gusohal_e20: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            gusohal_e85: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            bio_dcell: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            lpg: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            ngv: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            ceme: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            water_b: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            }

        },
        zone_2: {
            gas: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            gas_1: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            gas_2: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            },
            gas_3: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            }
        },
        zone_3: {
            gas: {
                amount_of_energy: '',
                kgCO2_eq: '',
                tonene_CO2: '',
            }
        }
    }
const router = useRouter();
    // console.log(initialValues)
    const formik = useFormik({
        initialValues: initialValues,
        // validationSchema: validationSchema,

        onSubmit: async (values) => {
            // console.log('values ===>', values)
            //   setData(values);

            // if (Overload) {
            //   teestupload();
            // }
            try {
                const param =
                {
                    zone_1: {
                        gas_h: {
                            amount_of_energy: formik.values.zone_1.gas_h.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.gas_h.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.gas_h.tonene_CO2,
                        },
                        gas_hi: {
                            amount_of_energy: formik.values.zone_1.gas_hi.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.gas_hi.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.gas_hi.tonene_CO2,
                        },
                        d_cell: {
                            amount_of_energy: formik.values.zone_1.d_cell.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.d_cell.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.d_cell.tonene_CO2,
                        },
                        bensin: {
                            amount_of_energy: formik.values.zone_1.bensin.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.bensin.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.bensin.tonene_CO2,
                        },
                        gusohal_91: {
                            amount_of_energy: formik.values.zone_1.gusohal_91.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.gusohal_91.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.gusohal_91.tonene_CO2,
                        },
                        gusohal_95: {
                            amount_of_energy: formik.values.zone_1.gusohal_95.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.gusohal_95.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.gusohal_95.tonene_CO2,
                        },
                        gusohal_e20: {
                            amount_of_energy: formik.values.zone_1.gusohal_e20.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.gusohal_e20.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.gusohal_e20.tonene_CO2,
                        },
                        gusohal_e85: {
                            amount_of_energy: formik.values.zone_1.gusohal_e85.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.gusohal_e85.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.gusohal_e85.tonene_CO2,
                        },
                        bio_dcell: {
                            amount_of_energy: formik.values.zone_1.bio_dcell.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.bio_dcell.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.bio_dcell.tonene_CO2,
                        },
                        lpg: {
                            amount_of_energy: formik.values.zone_1.lpg.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.lpg.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.lpg.tonene_CO2,
                        },
                        ngv: {
                            amount_of_energy: formik.values.zone_1.ngv.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.ngv.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.ngv.tonene_CO2,
                        },
                        ceme: {
                            amount_of_energy: formik.values.zone_1.ceme.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.ceme.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.ceme.tonene_CO2,
                        },
                        water_b: {
                            amount_of_energy: formik.values.zone_1.water_b.amount_of_energy,
                            kgCO2_eq: formik.values.zone_1.water_b.kgCO2_eq,
                            tonene_CO2: formik.values.zone_1.water_b.tonene_CO2,
                        }

                    },
                    zone_2: {
                        gas: {
                            amount_of_energy: formik.values.zone_2.gas.amount_of_energy,
                            kgCO2_eq: formik.values.zone_2.gas.kgCO2_eq,
                            tonene_CO2: formik.values.zone_2.gas.tonene_CO2,
                        },
                        gas_1: {
                            amount_of_energy: formik.values.zone_2.gas_1.amount_of_energy,
                            kgCO2_eq: formik.values.zone_2.gas_1.kgCO2_eq,
                            tonene_CO2: formik.values.zone_2.gas_1.tonene_CO2,
                        },
                        gas_2: {
                            amount_of_energy: formik.values.zone_2.gas_2.amount_of_energy,
                            kgCO2_eq: formik.values.zone_2.gas_2.kgCO2_eq,
                            tonene_CO2: formik.values.zone_2.gas_2.tonene_CO2,
                        },
                        gas_3: {
                            amount_of_energy: formik.values.zone_2.gas_3.amount_of_energy,
                            kgCO2_eq: formik.values.zone_2.gas_3.kgCO2_eq,
                            tonene_CO2: formik.values.zone_2.gas_3.tonene_CO2,
                        }
                    },
                    zone_3: {
                        gas: {
                            amount_of_energy: formik.values.zone_3.gas.amount_of_energy,
                            kgCO2_eq: formik.values.zone_3.gas.kgCO2_eq,
                            tonene_CO2: formik.values.zone_3.gas.tonene_CO2,
                        }
                    }
                }
                // console.log()
                const valueData = {
                    data:param
                }
                // let data = JSON.stringify(param)
                const result = await axios.post(
                    "https://www.serverwebp-api.com/api/resource",
                    valueData
                );

                if (result) {
                    // console.log(result);
                      Swal.fire("Good job!", "บันทึกข้อมูลสำเร็จ!", "success");
                      router.push('/TableData');
                    // console.log("Good job!");
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
                                }}> <BsMegaphone color='red' style={{ transform: 'translate(0px,-2px)' }} /> {' '}บันทึกข้อมูลทรัพยากร
                                    {/* &ensp;
                                    {name ? name : ''} */}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row style={{ display: "contents" }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>


                        {/* <Col xs="12" md={3} style={{ transform: 'translate(-10px,0px)' }}>
                            <div style={{ border: '3px solid #01459a', background: '#01459a', marginBottom: 25 }}>
                            </div>{''}
                            <div className={stylesAOS['x_feature']} id="x_feature" >
                                <div
                                    data-aos="zoom-in-up"
                                    data-aos-duration="600"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="true"
                                >
                                    <ListCreateBoard setName={setName} />
                               

                                </div>
                            </div>

                        </Col> */}
                        <Col xs="12" md={8}>
                            <div style={{ border: '3px solid #01459a', background: '#01459a', marginBottom: 25 }}>
                            </div>{''}
                            <div className={stylesAOS['x_feature']} id="x_feature" >
                                <div
                                    data-aos="zoom-in-up"
                                    data-aos-duration="600"
                                    data-aos-easing="ease-in-out"
                                    data-aos-once="true"
                                >
                                    {/* {name === 'ขอบเขตที่ 1' ? */}
                                        <DataTable1  formik={formik} isEdit={false}/> 
                                        {/* : name === 'ขอบเขตที่ 2' ? <DataTable2 /> : <DataTable3 />

                                    } */}
                                </div>
                            </div>

                        </Col>
                    </div>
                </Row>



            </>
        </>
    );
};

export default Home;
