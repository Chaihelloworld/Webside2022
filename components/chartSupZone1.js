import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import { Form, Input, Row, Col, ButtonGroup, Button } from "reactstrap";
import axios from "axios";
import { object } from "yup";
import { RiContrastDropLine, RiH2 } from "react-icons/ri";
import { emit } from "process";
import { Card, CardBody } from "reactstrap";
import style from '../styles/CardBarChart.module.scss'
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
              type: "bar",
              data: {
                labels: labels,
                datasets: [
                  {
                    label: "kg CO2 -eq",
                    backgroundColor: "#f2a14d",
                    borderColor: "#f2a14d",
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
                    fill: true,
                    barThickness: 8,
                  },
                  {
                    label: "tonne CO2",
                    fill: true,
                    backgroundColor: "#4a5568",
                    borderColor: "#4a5568",
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
                    barThickness: 5,
                  },
                ],
              },

              options: {
                maintainAspectRatio: true,
                responsive: true,
       
                tooltips: {
                  mode: "index",
                  intersect: true,
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
                      display: true,
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
                      ticks: {
                        fontSize: 10, // Set the font size for x-axis labels
                      },
                    },
                  ],
                  yAxes: [
                    {
                      display: true,
                      scaleLabel: {
                        display: false,
                        // labelString: "Value",
                      },
                      min: 0, // Set the minimum value for the y-axis
                      max: 70000000,// Set the maximum value for the y-axis
                      ticks: {
                        callback: function (value, index, values) {
                          console.log(value)
                          return (value/1000000)+'m'; // For example, display with 2 decimal places
                        },
                        autoSkip: true, // Enable automatic skipping of x-axis labels
                        maxTicksLimit: 5, // Maximum number of visible ticks on the x-axis
                        stepSize: 30000000 

                      
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
    // <>
    //   <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
    //     <h6
    //       className="uppercase text-blueGray-400 mb-1 text-xs font-semibold "
    //       style={{ textAlign: "center" }}
    //     >
    //       <br />
    //       ปริมาณก๊าซเรือนกระจก ปี 2564 ขอบเขตที่ 1
    //     </h6>
    //     <br />
    //     <div className="p-4 flex-auto">
    //       <div className="relative h-350-px">
    //         {loading ? (
    //           <>loading .. . </>
    //         ) : (
    //           <canvas id="bar-chartsTextZone1"></canvas>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </>

<>
<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
<h6
          className="uppercase text-blueGray-400 mb-1 text-xs font-semibold "
          style={{ textAlign: "center" }}
        >
          <br />
          ปริมาณก๊าซเรือนกระจก ปี 2564 ขอบเขตที่ 1
        </h6>
  {/* ...your existing code... */}
  <div className={"p-4 flex-auto " + style.chartContainer}>
    <div className="relative h-350-px">
      {loading ? (
        <>loading .. . </>
      ) : (
        <canvas id="bar-chartsTextZone1"></canvas>
      )}
    </div>
  </div>
</div>
</>
  );
}
export default CardBarChart;
