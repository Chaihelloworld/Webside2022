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
import { ListGroup, ListGroupItem } from "reactstrap";
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
import CarouselPage from "../components/CarouselContent";
import ListEvent from "../components/listEvent";
import Mainpartners from "../components/MainPartners";
import stylesAOS from "../styles/feature.module.scss";
import { useCookies } from "react-cookie";
import Events from "../components/event";
import LOGOMAP from "../public/map.png";
import LOGOMAPCO from "../public/mapCo.png";
import LOGOEVENT from "../public/event.png";
import LOGOLOCAL from "../public/location.png";
import LOGOHOME from "../public/home.png";

import styler from "../styles/feature.module.scss";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const styles = {
    paperContainer: {
      width: "100%",
      zIndex: 1,
      height: "max-content",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // width: '150%',
      padding: 15,
      backgroundPosition: "center",
      // backgroundColor: "white",
      backgroundImage: `url(${NewBg.src})`,
    },
  };
  const [state, setStated] = useState(false);
  const [stateCokie, setState] = useState(false);

  const setStateds = () => {
    setStated(true);
    toggle();
  };
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  const setCheck = () => {
    toggle();
  };
  const router = useRouter();
  const [cookieToken, setCookieToken, removeCookiesToken] = useCookies([
    "apiToken",
  ]);
  useEffect(() => {
    if (cookieToken.apiToken) {
      setState(true);
    }
  }, [cookieToken]);
  return (
    <>
      <div>
        <Navber setStated={setStateds} />

        <div className={stylesAOS.container}>
          <div
            style={{
              border: "2px solid #01459a",
              background: "#01459a",
              marginBottom: 25,
            }}
          ></div>
          {""}
          <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
            <ModalBody>
              <Login check={setCheck} />
            </ModalBody>
          </Modal>

          <br />
          <br />
          <div
            style={{
              // marginRight: "5px",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Button
              onClick={() => {
                router.push("/reportMain");
              }}
              className="shadow-drop-2-center"
              style={{
                width: "400px",
                height: "200px",
                background: "#ffdf00bd",
                border: "none",
                borderRadius: "20px 30px 20px 14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={LOGOMAP}
                  alt="Picture of the author"
                  width={"90px"}
                  height={"90px"}
                />
                <h4
                  style={{
                    color: "#ff702c",
                    fontSize: "28px",
                    fontWeight: 650,
                  }}
                >
                  พื้นฐานเมือง
                </h4>
              </div>
            </Button>
            <div className={styler.displayMo}>
              <Button
                className="circle-button shadow-drop-2-center"
                style={{
                  position: "absolute",
                  zIndex: 99,
                  width: "150px",
                  height: "150px",
                  marginTop: "126px",
                  marginLeft: "-75px",
                  borderRadius: "50%",
                  background: "#ff702c",
                  border: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={LOGOHOME}
                    alt="Picture of the author"
                    width={"200px"}
                    height={"200px"}
                  />
                </div>
              </Button>
            </div>

            <Button
              className="shadow-drop-2-center"
              onClick={() => {
                router.push("/report");
              }}
              style={{
                width: "400px",
                height: "200px",
                background: "#ff89b9d1",
                border: "none",
                borderRadius: "20px 30px 20px 14px",
                transform: "translate(4px, 0px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={LOGOMAPCO}
                  alt="Picture of the author"
                  width={"100px"}
                  height={"100px"}
                />
                <h4
                  style={{
                    color: "#990c94",
                    fontSize: "28px",
                    fontWeight: 650,
                  }}
                >
                  คาร์บอนฟุตพริ้น
                </h4>
              </div>
            </Button>
          </div>

          <div
            style={{
              // marginRight: "5px",
              marginTop: "4px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Button
              className="shadow-drop-2-center"
              onClick={() => {
                router.push("/description");
              }}
              style={{
                width: "400px",
                height: "200px",
                background: "#9e50c6bf",
                border: "none",
                borderRadius: "20px 30px 20px 14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={LOGOEVENT}
                  alt="Picture of the author"
                  width={"95px"}
                  height={"95px"}
                />
                <h4
                  style={{
                    color: "#ffe1fe",
                    fontSize: "28px",
                    fontWeight: 650,
                  }}
                >
                  ข้อมูลและกิจกรรม
                </h4>
              </div>
            </Button>

            <Button
              onClick={() => {
                router.push("/map");
              }}
              className="shadow-drop-2-center "
              style={{
                width: "400px",
                height: "200px",
                background: "#00a5bbbf",
                border: "none",
                borderRadius: "20px 30px 20px 14px",
                transform: "translate(4px, 0px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={LOGOLOCAL}
                  alt="Picture of the author"
                  width={"95px"}
                  height={"95px"}
                />
                <h4
                  style={{
                    color: "#99faf1f0",
                    fontSize: "28px",
                    fontWeight: 650,
                  }}
                >
                  คาร์บอน MAP
                </h4>
              </div>
            </Button>
          </div>
        </div>
        {/* <div style={{ border: '1px solid #01459a', background: '#01459a', marginBottom: 25 }}>
                            </div>
        <footer>
          <Mainpartners />
          <div className={stylesAOS["bottom-footer"]}>
            <p>Copyright © 2022 GREENPRODUCT. All Rights Reserved.</p>
          </div>
        </footer> */}
      </div>
    </>
  );
};

export default Home;
