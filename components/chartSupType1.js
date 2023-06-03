import React, { useEffect } from "react";
import Chart from "chart.js";
import {
  Button,
  Col,
  Row,
  Modal,
  ModalBody,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  Label,
  Input,
  FormGroup,
  Form,
  Container,
} from "reactstrap";
function ChartSupType1() {
  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "บ้านอยู่อาศัย",
          "กิจการขนาดเล็ก",
          "กิจการขนาดกลาง",
          "กิจการขนาดใหญ่",
          "กิจการเฉพาะอย่าง",
          "ราชการและองค์กรไม่แสวงกำไร",
          "กิจการสูบน้ำเพื่อการเกษตร",
          "ไฟฟ้าชั่วคราว",
          "ปริมาณการใช้ไฟฟ้าสาธารณะ",
        ],
        datasets: [
          {
            label: "ปริมาณการใช้ไฟฟ้า (kWh/ปี)",
            backgroundColor: "#4caf0f",
            borderColor: "#4a5568",
            data: [
              110340840.62, 85455737.13, 85455737.13, 0, 4379000.15, 4428815.42,
              0, 0, 286445000.0,
            ],
            fill: false,
            barThickness: 10,
          },

          // ,
          // {
          //   label: new Date().getFullYear() - 1,
          //   fill: false,
          //   backgroundColor: "#3182ce",
          //   borderColor: "#3182ce",
          //   data: [27, 68, 86, 74, 10, 4, 87, 56, 34, 100, 45, 13],
          //   barThickness: 8,
          // },
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
          intersect: true,
        },
        legend: {
          labels: {
            // fontColor: "rgba(0,0,0,.4)",
          },
          // align: "end",
          // position: "bottom",
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
              display: true,
              scaleLabel: {
                display: false,
                // labelString: "Value",
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chartBAR").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
        <h6
          className="uppercase text-blueGray-400 mb-1 text-xs font-semibold "
          style={{ padding: "10px", textAlign: "center" }}
        >
          <br />
          การไฟฟ้าและเชื้อเพลิงในครัวเรือน ปี 2564
        </h6>
        <div className="p-4 flex-auto    " style={{height:"590px"}}>
          <div className="relative h-450-px">
            <canvas id="bar-chartBAR"></canvas>
          </div>
          <Row style={{ display: "flex" }}>
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
          </Row>
        </div>
      </div>
    </>
  );
}
export default ChartSupType1;
