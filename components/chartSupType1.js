import React,{useEffect} from "react";
import Chart from "chart.js";

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
            barThickness: 15,
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
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                // labelString: "Value",
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
    let ctx = document.getElementById("bar-chartBAR").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        {/* <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1"> */}
        <h6
          className="uppercase text-blueGray-400 mb-1 text-xs font-semibold "
          style={{ padding: "10px", textAlign: "center" }}
        >
          <br />
          การไฟฟ้าและเชื้อเพลิงในครัวเรือน ปี 2564
        </h6>
        {/* <h2 className="text-blueGray-700 text-xl font-semibold">
                Total orders
              </h2> */}
        {/* </div>
          </div>
        </div> */}
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chartBAR"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChartSupType1;
