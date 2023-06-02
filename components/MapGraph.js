import React from "react";
import Chart from "chart.js";

function MapGraph() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "2551",
          "2552",
          "2553",
          "2554",
          "2555",
          "2556",
          "2557",
          "2558",
          "2559",
          "2560",
          "2561",
          "2562",
          "2563",
          "2564",
          // "2565",
        ],
        datasets: [
          {
            label: "ปริมาณขยะ (ตัน/ปี)",
            backgroundColor: "#6c757d",
            borderColor: "#4a5568",
            data: [
              30029.08, 29575.25, 28772.96, 30006.37, 30504.12, 34456.56,
              34892.85, 34799.85, 17035.21, 36400.94, 37710.37, 39054.76,
              38954.29, 41260.73,
            ],
            fill: false,
            barThickness: 20,
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
                display: true,
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
                labelString: "Value",
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
    let ctx = document.getElementById("bar-chartBARslit").getContext("2d");
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
          ปริมาณขยะมูลฝอยที่ถูกกำจัดด้วยวิธีการฝังกลบ ปี 2551-2564
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
            <canvas id="bar-chartBARslit"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
export default MapGraph;
