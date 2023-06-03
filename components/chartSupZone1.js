import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import { Form, Input, Row, Col, ButtonGroup, Button } from "reactstrap";
import axios from "axios";
import { object } from "yup";
import { RiContrastDropLine, RiH2 } from "react-icons/ri";
import { emit } from "process";
import { Card, CardBody } from "reactstrap";
function CardBarChart() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState([]);

  const [year, setYear] = useState(new Date().getFullYear());

  const fetchData = async (years) => {
    setLoading(true);
    let result;
    let KgCo2One;
    let KgCo2Two;
    let KgCo2Three;
    let tonneOne;
    let tonneTwo;
    let tonneThree;
    try {
      if (rSelected) {
        result = await axios.get(
          `https://www.serverwebp-api.com/api/resource/report/zone?year=${years}&zone=${1}`
        );
        let gas_h_kgCO2_eq = 0,
          gas_h_tonene_CO2 = 0,
          gas_hi_kgCO2_eq = 0,
          gas_hi_tonene_CO2 = 0,
          d_cell_kgCO2_eq = 0,
          d_cell_tonene_CO2 = 0,
          bensin_kgCO2_eq = 0,
          bensin_tonene_CO2 = 0,
          gusohal_91_kgCO2_eq = 0,
          gusohal_91_tonene_CO2 = 0,
          gusohal_95_kgCO2_eq = 0,
          gusohal_95_tonene_CO2 = 0,
          gusohal_e20_kgCO2_eq = 0,
          gusohal_e20_tonene_CO2 = 0,
          gusohal_e85_kgCO2_eq = 0,
          gusohal_e85_tonene_CO2 = 0,
          bio_dcell_kgCO2_eq = 0,
          bio_dcell_tonene_CO2 = 0,
          lpg_kgCO2_eq = 0,
          lpg_tonene_CO2 = 0,
          ngv_kgCO2_eq = 0,
          ngv_tonene_CO2 = 0,
          water_b_kgCO2_eq = 0,
          water_b_tonene_CO2 = 0,
          elec_kgCO2_eq = 0,
          elec_tonene_CO2 = 0,
          elecPublice_kgCO2_eq = 0,
          elecPublice_tonene_CO2 = 0,
          value_kgCO2_eq = 0,
          value_tonene_CO2 = 0;

        const dataPAI = result.data.data;
        if (result.data?.success) {
          let data = result.data.data;
          if (rSelected == "1") {
            (gas_h_kgCO2_eq = data[`zone_${rSelected}`].gas_h.kgCO2_eq),
              (gas_h_tonene_CO2 = data[`zone_${rSelected}`].gas_h.tonene_CO2),
              (gas_hi_kgCO2_eq = data[`zone_${rSelected}`].gas_hi.kgCO2_eq),
              (gas_hi_tonene_CO2 = data[`zone_${rSelected}`].gas_hi.tonene_CO2),
              (d_cell_kgCO2_eq = data[`zone_${rSelected}`].d_cell.kgCO2_eq),
              (d_cell_tonene_CO2 = data[`zone_${rSelected}`].d_cell.tonene_CO2),
              (bensin_kgCO2_eq = data[`zone_${rSelected}`].bensin.kgCO2_eq),
              (bensin_tonene_CO2 = data[`zone_${rSelected}`].bensin.tonene_CO2),
              (gusohal_91_kgCO2_eq =
                data[`zone_${rSelected}`].gusohal_91.kgCO2_eq),
              (gusohal_91_tonene_CO2 =
                data[`zone_${rSelected}`].gusohal_91.tonene_CO2),
              (gusohal_95_kgCO2_eq =
                data[`zone_${rSelected}`].gusohal_95.kgCO2_eq),
              (gusohal_95_tonene_CO2 =
                data[`zone_${rSelected}`].gusohal_95.tonene_CO2),
              (gusohal_e20_kgCO2_eq =
                data[`zone_${rSelected}`].gusohal_e20.kgCO2_eq),
              (gusohal_e20_tonene_CO2 =
                data[`zone_${rSelected}`].gusohal_e20.tonene_CO2),
              (gusohal_e85_kgCO2_eq =
                data[`zone_${rSelected}`].gusohal_e85.kgCO2_eq),
              (gusohal_e85_tonene_CO2 =
                data[`zone_${rSelected}`].gusohal_e85.tonene_CO2),
              (bio_dcell_kgCO2_eq =
                data[`zone_${rSelected}`].bio_dcell.kgCO2_eq),
              (bio_dcell_tonene_CO2 =
                data[`zone_${rSelected}`].bio_dcell.tonene_CO2),
              (lpg_kgCO2_eq = data[`zone_${rSelected}`].lpg.kgCO2_eq),
              (lpg_tonene_CO2 = data[`zone_${rSelected}`].lpg.tonene_CO2),
              (ngv_kgCO2_eq = data[`zone_${rSelected}`].ngv.kgCO2_eq),
              (ngv_tonene_CO2 = data[`zone_${rSelected}`].ngv.tonene_CO2),
              (water_b_kgCO2_eq = data[`zone_${rSelected}`].water_b.kgCO2_eq),
              (water_b_tonene_CO2 =
                data[`zone_${rSelected}`].water_b.tonene_CO2);
            let labels = [
              "ก๊าซหุงต้ม",
              "ถ่านหุงต้ม",
              "น้ำมันดีเซล",
              "น้ำมันเบนซิน",
              "แก๊สโซฮอล์ 91",
              "แก๊สโซฮอล์ 95",
              "แก๊สโซฮอล์ E20",
              "แก๊สโซฮอล์ E85",
              "น้ำมันไบโอดีเซล",
              "ก๊าซปีโตรเลียมเหลว(LPG)",
              "ก๊าซธรรมชาติ(NGV)",
              "ปริมาณน้ำเสีย	",
            ];
            let configs = {
              type: "line",
              data: {
                labels: labels,
                datasets: [
                  {
                    label: "kg CO2 -eq",
                    backgroundColor: "#4a5568",
                    borderColor: "#4a5568",
                    data: [
                      gas_h_kgCO2_eq,
                      gas_hi_kgCO2_eq,
                      d_cell_kgCO2_eq,
                      bensin_kgCO2_eq,
                      gusohal_91_kgCO2_eq,
                      gusohal_95_kgCO2_eq,
                      gusohal_e20_kgCO2_eq,
                      gusohal_e85_kgCO2_eq,
                      bio_dcell_kgCO2_eq,
                      lpg_kgCO2_eq,
                      ngv_kgCO2_eq,
                      water_b_kgCO2_eq,
                    ],
                    fill: false,
                    barThickness: 15,
                  },
                  {
                    label: "tonne CO2",
                    fill: false,
                    backgroundColor: "#3182ce",
                    borderColor: "#3182ce",
                    data: [
                      gas_h_tonene_CO2,
                      gas_hi_tonene_CO2,
                      d_cell_tonene_CO2,
                      bensin_tonene_CO2,
                      gusohal_91_tonene_CO2,
                      gusohal_95_tonene_CO2,
                      gusohal_e20_tonene_CO2,
                      gusohal_e85_tonene_CO2,
                      bio_dcell_tonene_CO2,
                      lpg_tonene_CO2,
                      ngv_tonene_CO2,
                      water_b_tonene_CO2,
                    ],
                    barThickness: 15,
                  },
                ],
              },

              options: {
                maintainAspectRatio: true,
                responsive: true,
                title: {
                  display: false,
                  text: "Orders Chart",
                },
                tooltips: {
                  mode: "index",
                  intersect: false,
                },
                hover: {
                  mode: "nearest",
                  intersect: false,
                },
                legend: {
                  labels: {
                    fontColor: "rgba(0,0,0,.4)",
                  },
                  align: "end",
                  position: "bottom",
                },
                scales: {
                  xAxes: [
                    {
                      display: false,
                      scaleLabel: {
                        display: false,
                        // labelString: "Month",
                      },
                      gridLines: {
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: "rgba(33, 37, 41, 0.3)",
                        zeroLineColor: "rgba(33, 37, 41, 0.3)",
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                      },
                    },
                  ],
                  yAxes: [
                    {
                      display: false,
                      scaleLabel: {
                        display: false,
                        // labelString: "Value",
                      },
                    },
                  ],
                },
              },
            };
            let ctx = document
              .getElementById("bar-chartsTextZone1")
              .getContext("2d");
            window.myBar = new Chart(ctx, configs);
          } else {
            console.log("err 500");
          }
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("connecting");
    }
  };

  const [rSelected, setRSelected] = useState(1);

  useEffect(() => {
    if (year) {
      fetchData(2022);
    }
  }, [year, rSelected]);
  useEffect(() => {
    // if(toggle){
    //   setToggle(false)

    // }
    console.log(loading);
    setLoading(false);
  }, [loading]);
  // const handleChange = (e) => {
  //   console.log('event.value', e.target.value)
  //   // if(e.target.value){
  //   //   fetchData(e.target.value);
  //   // }else{
  //   //   let date = new Date().getFullYear()
  //   //   fetchData(year);
  //   // }
  //   // setYear(e.target.value)
  //   console.log('loop2')

  //   // fetchData();
  // }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
        <h6
          className="uppercase text-blueGray-400 mb-1 text-xs font-semibold "
          style={{ textAlign: "center" }}
        >
          <br />
          ปริมาณก๊าซเรือนกระจก ปี 2564 ขอบเขตที่ 1
        </h6>
        {/*<div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold"> */}
        {/* 
      <Row style={{ display: 'flex', justifyContent: 'flex-end'}}>

        <Col xs="12" md={4}>
          <Form>

            <Input
              bsSize="sm"
              className="mb-12"
              type="select"
              style={{ borderColor: '#0d6efd', color: '#0d6efd' }}
              onChange={(e) => {
                setYear(e.target.value)
                setToggle(true)
              }}
            >
              <option defaultValue={true} value={"2023"} >
                ปริมาณก๊าซเรือนกระจก 2566
              </option>
              <option value={"2022"}>
                ปริมาณก๊าซเรือนกระจก 2565
              </option>
              <option value={"2021"}>
                ปริมาณก๊าซเรือนกระจก 2564
              </option>

            </Input>
          </Form>
        </Col>

      </Row> */}
        <br />
        {/* <div  style={{ display: 'flex', justifyContent: 'flex-end'}}>

        <ButtonGroup>
          <Button
            color="primary"
            outline
            size="sm"
            onClick={() => setRSelected(null)}
            active={rSelected === null}
          >
            ขอบเขตทั้งหมด
          </Button>
          <Button
            color="primary"
            outline
            className=".btn"
            size="sm"
            onClick={() => setRSelected('1')}
            active={rSelected === '1'}
          >
            ขอบเขตที่ 1
          </Button>
          <Button
            color="primary"
            outline
            size="sm"
            onClick={() => setRSelected('2')}
            active={rSelected === '2'}
          >
            ขอบเขตที่ 2
          </Button>
          <Button
            color="primary"
            outline
            size="sm"
            onClick={() => setRSelected('3')}
            active={rSelected === '3'}
          >
            ขอบเขตที่ 3
          </Button>
          <Button
            color="primary"
            outline
            size="sm"
            onClick={() => setRSelected('4')}
            active={rSelected === '4'}
          >
            ข้อมูลรายปี
          </Button>
        </ButtonGroup>
      </div> */}

        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            {loading ? (
              <>loading .. . </>
            ) : (
              <canvas id="bar-chartsTextZone1"></canvas>
            )}
            {/* <canvas id="bar-chartsTextZone1"></canvas> */}
          </div>
          {/* <Row style={{ display: "flex" }}>
            <Col xs="6" md={3}>
              <Card
                className="my-2"
                inverse
                style={{
                  width: "auto",
                  background:'#4caf0f',
                  padding: "5px",
                  border: "none",
                  height:'50px'
                }}
              >
                <CardBody style={{display:'flex'}}>
                  <p style={{fontSize:'10px',marginTop: '-12px',fontWeight:550,textAlign: 'center'}}>บ้านอยู่อาศัย <span>110,340,840.62</span></p>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6" md={3}>
              <Card
                className="my-2"
                inverse
                style={{
                  width: "auto",
                  background:'#4caf0f',
                  padding: "5px",
                  border: "none",
                  height:'50px'
                }}
              >
                <CardBody style={{display:'flex'}}>
                  <p style={{fontSize:'10px',marginTop: '-12px',fontWeight:550,textAlign: 'center'}}>กิจการขนาดเล็ก <span>85,455,737.13</span></p>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6" md={3}>
              <Card
                className="my-2"
                inverse
                style={{
                  width: "auto",
                  background:'#4caf0f',
                  padding: "5px",
                  border: "none",
                  height:'50px'
                }}
              >
                <CardBody style={{display:'flex'}}>
                  <p style={{fontSize:'10px',marginTop: '-12px',fontWeight:550,textAlign: 'center'}}>กิจการขนาดกลาง <span>85,455,737.13</span></p>
                </CardBody>
              </Card>
            </Col>

            <Col xs="6" md={3}>
              <Card
                className="my-2"
                inverse
                style={{
                  width: "auto",
                  background:'#4caf0f',
                  padding: "5px",
                  border: "none",
                  height:'50px'
                }}
              >
                <CardBody style={{display:'flex'}}>
                  <p style={{fontSize:'10px',marginTop: '-12px',fontWeight:550,textAlign: 'center'}}>กิจการเฉพาะอย่าง <span> 4,379,000.15</span></p>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6" md={3}>
              <Card
                className="my-2"
                inverse
                style={{
                  width: "auto",
                  background:'#4caf0f',
                  padding: "5px",
                  border: "none",
                  height:'50px'
                }}
              >
                <CardBody style={{display:'flex'}}>
                  <p style={{fontSize:'10px',marginTop: '-12px',fontWeight:550,textAlign: 'center'}}>ราชการ/องค์กร.. <span> 4,428,815.42</span></p>
                </CardBody>
              </Card>
            </Col>
         
            <Col xs="6" md={3}>
              <Card
                className="my-2"
                inverse
                style={{
                  width: "auto",
                  background:'#4caf0f',
                  padding: "5px",
                  border: "none",
                  height:'50px'
                }}
              >
                <CardBody style={{display:'flex'}}>
                  <p style={{fontSize:'10px',marginTop: '-12px',fontWeight:550,textAlign: 'center'}}>ไฟฟ้าสาธารณะ <span> 286,445,000</span></p>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default CardBarChart;
