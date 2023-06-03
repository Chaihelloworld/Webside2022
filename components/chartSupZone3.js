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
          `https://www.serverwebp-api.com/api/resource/report/zone?year=${years}&zone=${3}`
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
          if (rSelected == "3") {


            let labels = [
              'ปริมาณขยะ',
            ]
            let configs = {
              type: "bar",
              data: {
                labels: labels,
                datasets: [
                  {
                    label: 'kg CO2 -eq',
                    backgroundColor: "#4a5568",
                    borderColor: "#4a5568",
                    data: [0],
                    fill: false,
                    barThickness: 15,

                  },
                  {
                    label: "tonne CO2",
                    fill: false,
                    backgroundColor: "#3182ce",
                    borderColor: "#3182ce",
                    data: [0],
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
                      display: false,
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
            let ctx = document.getElementById("bar-chartsZone3").getContext("2d");
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

  const [rSelected, setRSelected] = useState(3);

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
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
        <h6
          className="uppercase text-blueGray-400 mb-1 text-xs font-semibold "
          style={{ textAlign: "center" }}
        >
          <br />
          ปริมาณก๊าซเรือนกระจก ปี 2564 ขอบเขตที่ 3
        </h6>

        <br />

        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            {loading ? (
              <>loading .. . </>
            ) : (
              <canvas id="bar-chartsZone3"></canvas>
            )}
            {/* <canvas id="bar-bar-chartsZone3"></canvas> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default CardBarChart;
