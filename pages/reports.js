import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";
import styler from '../styles/Navbar.module.scss'
import Image from 'next/image'
import Excels from '../public/excel.png'
import {
    Button
  } from 'reactstrap';
function App() {
  const [data, setData] = useState([]);
  const headers = [
    { label: "ชื่อโรงเรียน", key: "schoolname"},
    { label: "ชื่อ-สกุล", key: "fullname" },
    { label: "ชั้น", key: "class" },
    { label: "ที่เลข", key: "num" },
    { label: "อีเมล์", key: "email" },
    { label: "จำนวนสมาชิกในครัวเรือน", key: "member" },
    { label: "รายได้ต่อเดือน", key: "amount_month" },
    { label: "อาชีพผู้ปกครอง", key: "occupation" },
    { label: "หมายเลขผู้ใช้ไฟฟ้า", key: "billelec" },
    { label: "รหัสเครื่องวัด", key: "numbillelec" },
    { label: "ชื่อผู้ใช้น้ำ", key: "name_using_w" },
    { label: "เลขที่ผู้ใช้น้ำ", key: "num_using_w" },
    { label: "การใช้น้ำมันดีเซล(บาท/เดือน)", key: "using_pow" },
    { label: "การใช้น้ำมันดีเซล(ลิตร/เดือน)", key: "using_pow_amount" },
    { label: "การใช้น้ำมันเบนซิน(บาท/เดือน)", key: "using_powBenzin" },
    { label: "การใช้น้ำมันเบนซิน(ลิตร/เดือน)", key: "using_pow_amountBenzin" },
    { label: "จำนวนก๊าซหุงต้ม(ถัง/เดือน)", key: "guss_amount" },
    { label: "ขนาดถังก๊าซหุงต้ม(กิโลกรัม)", key: "guss_size" },
    // { label: "เบอร์ติดต่อ", key: "phone" },
    // { label: "Chg", key: "change_val" },
    // { label: "% Chg", key: "change_percent" }
    
  ];
  const prettyLink  = {
    backgroundColor: '#8dc63f',
    fontSize: 14,
    fontWeight: 500,
    height: 52,
    padding: '0 48px',
    borderRadius: 5,
    color: '#fff'
  };
  const [Overload, setOverload] = useState(false);
  const [datafecth, setDatafecth] = useState();


  const fetchDataLise = async () => {
    try {
        const result = await axios.get(
          "https://www.serverwebp-api.com/api/getlisr_roomer"
        )
        if(!result.error){
          console.log(result)
          setDatafecth(result.result)
        }else{
          return;
        }
      
    } catch (error) {
      console.log(error);
    } finally {
      setOverload(false);

      console.log("connecting");
    }
  };

  // /
  useEffect(() => {
    // console.log(fetchDataLise)
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.serverwebp-api.com/api/getlisr_roomer",
      );
      const responseData = await response.data.data;
      console.log(responseData);
      setData(responseData);
    };
    fetchData();
  }, []);
// console.log(datafecth)
  return (
    <div >
      {data && data.length > 0 && (
        <CSVLink headers={headers} data={data} filename="report.csv" >
          <Button className={styler.btnstyleReport}>
                      <Image
                        src={Excels}
                        alt="Picture of the author"
                        width={25}
                        height={25} />
                      {/* <div> */}
                      Download
                      {/* </div> */}
                    </Button>
        </CSVLink>
      )}
    </div>
  );
}
export default App
