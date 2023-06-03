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
          if (rSelected == 4) {
            result = await axios.get(
              `https://www.serverwebp-api.com/api/resource/report/summary?year=3`
            );
            if (result) {
              let data = result.data.data
              console.log('result ===+++', data)
    
              let y = new Date().getFullYear()
              let y1 = new Date().getFullYear() - 1
              let y2 = new Date().getFullYear() - 2
              // console.log(y)
              // console.log('result ===+++', data[y])
    
              KgCo2One = data[y] ? data[y]?.KgCO2 : 0
              KgCo2Two = data[y1] ? data[y1]?.KgCO2 : 0
              KgCo2Three = data[y2] ? data[y2]?.KgCO2 : 0
              tonneOne = data[y] ? data[y]?.tonene : 0
              tonneTwo = data[y1] ? data[y1]?.tonene : 0
              tonneThree = data[y2] ? data[y2]?.tonene : 0
              // console.log('KgCo2Two', tonneTwo)
              let labels = [
                y2,
                y1,
                y
              ]
              let configs = {
                type: "bar",
                data: {
                  labels: labels,
                  datasets: [
                    {
                      label: "kg CO2 -eq",
                      backgroundColor: "#bf97ff",
                      borderColor: "#bf97ff",
                      data: [KgCo2Three, KgCo2Two, KgCo2One],
                      fill: false,
                      barThickness: 25,
    
                    },
                    {
                      label: "tonne CO2",
                      fill: false,
                      backgroundColor: "#4a5568",
                      borderColor: "#4a5568",
                      data: [tonneThree, tonneTwo, tonneOne],
                      barThickness: 25,
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
                        scaleLabel: {
                          display: false,
                          labelString: "kg",
                        },
                       
                        ticks: {
                          callback: function (value, index, values) {
                            console.log(value)
                            return (value/1000000)+'m'; // For example, display with 2 decimal places
                          },
                          autoSkip: true, // Enable automatic skipping of x-axis labels
                          maxTicksLimit: 5, // Maximum number of visible ticks on the x-axis
                          min: 0, // Set the minimum value for the y-axis
                          // max: 450000000,// Set the maximum value for the y-axis
                          // stepSize: 30000000 
  
                        
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
              let ctx = document.getElementById("bar-chartsTextYear").getContext("2d");
              window.myBar = new Chart(ctx, configs);
              console.log(window.myBar.data.datasets[0].data)
    
            }
    
          }else {
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

  const [rSelected, setRSelected] = useState(4);

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
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
        <h6
          className="uppercase text-blueGray-400 mb-1 text-xs font-semibold "
          style={{ textAlign: "center" }}
        >
          ปริมาณก๊าซเรือนกระจกย้อนหลัง 3ปี
        </h6>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            {loading ? (
              <>loading .. . </>
            ) : (
              <canvas id="bar-chartsTextYear" style={{ height: '200px' ,marginLeft:'1px'}}></canvas>

            )}
          </div>
          
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default CardBarChart;
