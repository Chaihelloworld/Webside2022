import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import {
  Form,
  Input,
  Row, Col

} from 'reactstrap';
import axios from 'axios';
import { object } from "yup";
import { RiH2 } from "react-icons/ri";

function CardBarChart() {
  const [sumCO2rqs, setSumCO2rq] = useState([])
  const [sumtonne, setSumtonne] = useState([])

  const [value_2, setValue_2] = useState([])
  const formatDate = (data) => {
    const date = new Date(data);
    const formattedDate = date.toLocaleDateString('en-US', {
      // day: '2-digit',
      // month: '2-digit',
      year: 'numeric'
    });
    return formattedDate
  }
  const [toggle, setToggle] = useState(false)
  const [loading, setLoading] = useState(false)

  const [value, setValue] = useState([])

  const [year, setYear] = useState(new Date().getFullYear())

  const fetchData = async (years) => {
    setLoading(true)

    try {
      const result = await axios.get(
        // `https://serverwebp-api.com/api/resource?year=${years}`
        `https://serverwebp-api.com/api/resource/report?year=${years}`
      );

      if (result) {

        // Finally, call the update method to apply the changes
        // console.log('ควรล้างอาเรย์ !!')
        let data = result.data.data
        console.log(data.KgCO2)
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
                data: data.KgCO2,
                fill: false,
                barThickness: 40,

              },
              {
                label: "tonne CO2",
                fill: false,
                backgroundColor: "#3182ce",
                borderColor: "#3182ce",
                data: data.tonene,
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
              intersect: false,
            },
            // tooltips: {
            //   enabled: true,
            //   mode: 'single',
            //   callbacks: {
            //     label: function (tooltipItems, data) {
            //       return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel;
            //     }
            //   }
            // },
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
        console.log(window.myBar.data.datasets[0].data)

      } else {
        console.log("err 500");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("connecting");

    }

  }
  // useEffect(() => {
  //   // let date = new Date().getFullYear()
  //   // fetchData(date);
  // }, [])
  useEffect(() => {
    if (year) {
      fetchData(year);

    }

  }, [year]);
  useEffect(() => {
    // if(toggle){
    //   setToggle(false)

    // }
    console.log(loading)
    setLoading(false)

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
      {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold"> */}
      <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>

        <Col xs="12" md={6}>
          <Form>

            <Input
              bsSize="sm"
              className="mb-12"
              type="select"
              onChange={(e) => {
                // handleChange(e);
                setYear(e.target.value)
                setToggle(true)
              }}
            // disabled={true}
            >
              {/* <option >
                         เลือก
                        </option> */}
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
            {value}
          </Form>
        </Col>

      </Row>

      {/* </h6>
            </div>
          </div>
        </div> */}
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative h-350-px">
          {loading ? <>loading .. . </>:<canvas id="bar-charts"></canvas>}
          {/* <canvas id="bar-charts"></canvas> */}

        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default CardBarChart