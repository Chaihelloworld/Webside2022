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
          `https://www.serverwebp-api.com/api/resource/report/zone?year=${years}&zone=${2}`
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
          elecType2_kgCO2_eq = 0,
          elecType2_tonene_CO2 = 0,
          elecType3_kgCO2_eq = 0,
          elecType3_tonene_CO2 = 0,
          value_kgCO2_eq = 0,
          value_tonene_CO2 = 0;

        const dataPAI = result.data.data;
        if (result.data?.success) {
          let data = result.data.data;
          console.log('----------------------------------------------------',data.zone_2)
          if (rSelected == "2") {
            
            elec_kgCO2_eq = data.zone_2.gas.kgCO2_eq,
            elec_tonene_CO2 = data.zone_2.gas.tonene_CO2,
            elecPublice_kgCO2_eq = data.zone_2.gas_1.kgCO2_eq,
            elecPublice_tonene_CO2 = data.zone_2.gas_1.tonene_CO2,

            elecType2_kgCO2_eq = data.zone_2.gas_2.kgCO2_eq?data.zone_2.gas_2.kgCO2_eq:0,
            elecType2_tonene_CO2 = data.zone_2.gas_2.tonene_CO2? data.zone_2.gas_2.tonene_CO2:0,
            elecType3_kgCO2_eq = data.zone_2.gas_3.kgCO2_eq ?data.zone_2.gas_3.kgCO2_eq:0,
            elecType3_tonene_CO2 = data.zone_2.gas_3.tonene_CO2 ?  data.zone_2.gas_3.tonene_CO2 :0
            let labels = [
              'พลังงานไฟฟ้า',
              'ไฟสาธารณะ',
              'ธุรกิจการค้าและหน่วยงาน',
              'พลังงานไฟฟ้าอุตสาหกรรม',
            ]
            let configs = {
              type: "bar",
              data: {
                labels: labels,
                datasets: [
                  {
                    label: 'kg CO2 -eq',
                    backgroundColor: "#efdd03",
                    borderColor: "#efdd03",
                    data: [elec_kgCO2_eq, elecPublice_kgCO2_eq,elecType2_kgCO2_eq,elecType3_kgCO2_eq],
                    fill: false,
                    barThickness: 15,

                  },
                  {
                    label: "tonne CO2",
                    fill: false,
                    backgroundColor: "#4a5568",
                    borderColor: "#4a5568",
                    data: [elec_tonene_CO2, elecPublice_tonene_CO2,elecType2_tonene_CO2,elecType3_tonene_CO2],
                    barThickness: 15,
                  }
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
                      ticks: {
                        fontColor: "#4a5568",
                      },
                      display: true,
                      scaleLabel: {
                        display: false,
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
                      ticks: {
                        fontColor: "#4a5568",
                      },
                      display: true,
                      min: 0,
                      min: 0, // Set the minimum value for the y-axis
                      max: 200000000, // Set the maximum value for the y-axis
                      ticks: {
                        callback: function (value, index, values) {
                          console.log(value)
                          return (value/1000000)+'m'; // For example, display with 2 decimal places
                        },
                        beginAtZero: true,
                        autoSkip: true, // Enable automatic skipping of x-axis labels
                        maxTicksLimit: 5, // Maximum number of visible ticks on the x-axis
                        // beginAtZero: true,
                        stepSize: 20000000 
                      
                      },
                      scaleLabel: {
                        display: false,
                        labelString: "kg",
                      },
                      gridLines: {
                        borderDash: [2],
                        drawBorder: false,
                        borderDashOffset: [2],
                        color: "rgba(33, 37, 41, 0.2)",
                        zeroLineColor: "rgba(33, 37, 41, 0.15)",
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                      },
                    },
                  ],
                },
              },
            };
            let ctx = document
              .getElementById("chartsTextZone2")
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

  const [rSelected, setRSelected] = useState(2);

  useEffect(() => {
    if (year) {
      fetchData(2022);
    }
  }, [year, rSelected]);
  useEffect(() => {
    console.log(loading);
    setLoading(false);
  }, [loading]);


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
        <h6
          className="uppercase text-blueGray-400 mb-1 text-xs font-semibold "
          style={{ textAlign: "center" }}
        >
          <br />
          ปริมาณก๊าซเรือนกระจก ปี 2564 ขอบเขตที่ 2
        </h6>

        <br />

        <div className="p-4 flex-auto" >
          {/* Chart */}
          <div className="relative h-350-px" style={{marginTop: '-30px'}}>
            {loading ? (
              <>loading .. . </>
            ) : (
              <canvas id="chartsTextZone2"></canvas>
            )}
            {/* <canvas id="bar-chartsTextZone2"></canvas> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default CardBarChart;
