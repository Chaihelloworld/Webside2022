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
    { label: "Security Code", key: "scrip_cd" },
    { label: "Security Name", key: "scripname" },
    { label: "Group", key: "scrip_grp" },
    { label: "LTP", key: "highrate" },
    { label: "Chg", key: "change_val" },
    { label: "% Chg", key: "change_percent" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all"
      );
      const responseData = await response.data.Table;
      console.log(responseData);
      setData(responseData);
    };
    fetchData();
  }, []);

  return (
    <div >
      {data && data.length > 0 && (
        <CSVLink headers={headers} data={data} filename="bsedata.csv">
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
