import React, { FC, useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavbarText,
} from "reactstrap";
import { useCookies } from "react-cookie";
import axios from "axios";

import styler from "../styles/Navbar.module.scss";
import Image from "next/image";
import imgIcon from "../public/img/user.svg";
import LOGOBANNERS from "../public/LOGO.png";

import { setLogLevel } from "firebase/app";
import Router from "next/router";
import { useRouter } from "next/router";
import Reports from "../pages/reports";
import Mainpartners from "./MainPartners";

interface Props {
  setStated: () => void;
}

const Example: FC<Props> = ({ setStated }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [cookie, setCookie, removeCookie] = useCookies(["email"]);
  const [cookiePass, setCookiePass, removeCookiesPass] = useCookies([
    "password",
  ]);
  const [cookieToken, setCookieToken, removeCookiesToken] = useCookies([
    "apiToken",
  ]);
  const [state, setState] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const router = useRouter();

  const logoutAPI = () => {
    // console.log('logout')
    setState(false);
    removeCookie("email");
    removeCookiesPass("password");
    removeCookiesToken("apiToken");

    router.push("/");
  };
  useEffect(() => {
    if (cookieToken.apiToken) {
      setState(true);
    }
  }, [cookieToken]);
  const setLog = () => {
    setStated();
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Nav className={styler.mobileSideNav}>
        <NavItem>
          <Image
            src={LOGOBANNERS}
            alt="Picture of the author"
            width={"200px"}
            height={"90px"}
          />
        </NavItem>
        <Nav className={styler.mobileSide}>
          <div style={{ display: "flex" }}>
            {!state ? (
              <>
                <NavItem>
                  <NavLink
                    active
                    href="/"
                    style={{
                      color: "#797979",
                      transition: "0.4s ease",
                      letterSpacing: "2px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    หน้าหลัก
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active
                    href="/description"
                    style={{
                      color: "#797979",
                      transition: "0.4s ease",
                      letterSpacing: "2px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    ข้อมูลและกิจกรรม
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active
                    href="/report"
                    style={{
                      color: "#797979",
                      transition: "0.4s ease",
                      letterSpacing: "2px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    ฟุตพริ้นท์ เมือง
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active
                    href="/map"
                    style={{
                      color: "#797979",
                      transition: "0.4s ease",
                      letterSpacing: "2px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Carbon Map
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active
                    href="/reportMain"
                    style={{
                      color: "#797979",
                      transition: "0.4s ease",
                      letterSpacing: "2px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    พื้นฐานเมือง
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink
                    active
                    href="/createPage"
                    style={{
                      color: "#797979",
                      transition: "0.4s ease",
                      letterSpacing: "2px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    บันทึกค่าทรัพยากร
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active
                    href="/TableData"
                    style={{
                      color: "#797979",
                      transition: "0.4s ease",
                      letterSpacing: "2px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    ข้อมูลทรัพยากร
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active
                    // href='/'
                    // onClick={}
                    style={{
                      color: "#797979",
                      transition: "0.4s ease",
                      letterSpacing: "2px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    {/* ดาวน์โหลดข้อมูลแบบสอบถาม */}
                    <Reports />
                  </NavLink>
                </NavItem>
              </>
            )}
          </div>

          {state && (
            <NavItem>
              <NavLink
                active
                href="#"
                onClick={() => {
                  logoutAPI();
                }}
                style={{
                  color: "#797979",
                  transition: "0.4s ease",
                  letterSpacing: "2px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                ออกจากระบบ
              </NavLink>
            </NavItem>
          )}
          {!state && (
            <NavItem>
              <NavLink
                active
                href="#"
                onClick={() => {
                  setLog();
                }}
                style={{
                  color: "#797979",
                  transition: "0.4s ease",
                  letterSpacing: "2px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                เข้าสู่ระบบ
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Nav>

      <Navbar color="faded" light className={styler.mobileSideDisplay}>
        <NavbarBrand href="/" className="me-auto">
          <Image
            src={LOGOBANNERS}
            alt="Picture of the author"
            width={"200px"}
            height={"90px"}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                style={{
                  color: "#797979",
                  transition: "0.4s ease",
                  letterSpacing: "2px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
                href="/"
              >
                หน้าหลัก
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{
                  color: "#797979",
                  transition: "0.4s ease",
                  letterSpacing: "2px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
                href="/description"
              >
                ข้อมูลและกิจกรรม
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{
                  color: "#797979",
                  transition: "0.4s ease",
                  letterSpacing: "2px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
                href="/report"
              >
                ฟุตพริ้นท์ เมือง
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{
                  color: "#797979",
                  transition: "0.4s ease",
                  letterSpacing: "2px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
                href="/map"
              >
                Carbon Map
              </NavLink>
            </NavItem>
            <NavItem>
                  <NavLink
                    active
                    href="/reportMain"
                    style={{
                      color: "#797979",
                      transition: "0.4s ease",
                      letterSpacing: "2px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    พื้นฐานเมือง
                  </NavLink>
                </NavItem>
            {!state && (
              <NavItem>
                <NavLink
                  active
                  href="#"
                  onClick={() => {
                    setLog();
                  }}
                  style={{
                    color: "#797979",
                    transition: "0.4s ease",
                    letterSpacing: "2px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  เข้าสู่ระบบ
                </NavLink>
              </NavItem>
            )}
            {state && (
              <NavItem>
                <NavLink
                  active
                  href="#"
                  onClick={() => {
                    logoutAPI();
                  }}
                  style={{
                    color: "#797979",
                    transition: "0.4s ease",
                    letterSpacing: "2px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  ออกจากระบบ
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Example;
