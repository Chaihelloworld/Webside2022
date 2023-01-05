import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import {
  Form,
  Input,
  Row, Col

} from 'reactstrap';
import axios from 'axios';
import { object } from "yup";

function CardBarChart() {
  const [sumCO2rqs, setSumCO2rq] = useState([])
  const [sumtonne, setSumtonne] = useState([])

  const [value, setValue] = useState([])
  const [value_2, setValue_2] = useState([])

  const fetchData = async () => {
    try {
      const result = await axios.get(
        "https://www.serverwebp-api.com/api/resource"
      );
      if (result) {
        // console.log(result.data.data);
        let data = result.data.data
        let sumEnergy = [0, 0, 0],
          sumCO2rq = [0, 0, 0],
          tonneCO2 = [0, 0, 0]
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          for (const [key1, value1] of Object.entries(element.raw)) {
            for (const [key2, value2] of Object.entries(element.raw[key1])) {
              let index = null;
              switch (key1) {
                case 'zone_1':
                  index = 0;
                  break;
                case 'zone_2':
                  index = 1;
                  break;
                case 'zone_3':
                  index = 2;
                  break;
                default:
                  break;
              }

              if (index == null) continue;
              console.log(index)

              if (value2.amount_of_energy) {
                sumEnergy[index] += Number(value2.amount_of_energy)
              }
              if (value2.kgCO2_eq) {
                sumCO2rq[index] += Number(value2.kgCO2_eq)
              }
              if (value2.tonene_CO2) {
                tonneCO2[index] += Number(value2.tonene_CO2)
              }
            }
          }
        }
        let labels = [
          'ขอบเขตที่ 1',
          'ขอบเขตที่ 2',
          'ขอบเขตที่ 3'
        ]
        let configs = {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "kg CO2 -eq",
                backgroundColor: "#4a5568",
                borderColor: "#4a5568",
                data: sumCO2rq,
                fill: false,
                barThickness: 40,
              },
              {
                label: "tonne CO2",
                fill: false,
                backgroundColor: "#3182ce",
                borderColor: "#3182ce",
                data: tonneCO2,
                barThickness: 40,
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
              intersect: true,
            },
            hover: {
              mode: "nearest",
              intersect: true,
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
                  ticks: {
                    fontColor: "#4a5568",
                  },
                  display: true,
                  scaleLabel: {
                    display: true,
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
        let ctx = document.getElementById("bar-charts").getContext("2d");
        window.myBar = new Chart(ctx, configs);
      } else {
        console.log("err 500");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("connecting");
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  // useEffect(()=> 

  // }, []);
  const handleChange = (e) => {
    console.log('event.value', e.target.value)
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>

                  <Col xs="12" md={6}>
                    <Form>

                      <Input
                        bsSize="sm"
                        className="mb-12"
                        type="select"
                        onChange={(e) => {
                          handleChange(e)
                        }}
                      // disabled={true}
                      >
                        <option value={"2022"}>
                          ปริมาณก๊าซเรือนกระจก 2565
                        </option>
                        <option value={"2023 "}>
                          ปริมาณก๊าซเรือนกระจก 2566
                        </option>
                        <option value={"2024"}>
                          ปริมาณก๊าซเรือนกระจก 2567
                        </option>

                      </Input>

                    </Form>
                  </Col>

                </Row>

              </h6>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-charts"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardBarChart