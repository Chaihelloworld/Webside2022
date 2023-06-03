import React from "react";
import Chart from "chart.js";

function TypeCard2() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "น้ำมันดีเซล",
          "น้ำมันเบนซิน",
          "แก๊สโซฮอล์ 91",
          "น้ำมันไบโอดีเซล",
        ],
        datasets: [
          {
            label: "ปริมาณพลังงาน(ลิตร)",
            backgroundColor: "#f1bd2b",
            borderColor: "#4a5568",
            data: [
              22015480.00, 1174840.00, 31056640.00, 153240.00
            ],
            fill: false,
            barThickness: 10,
            color:'#e2e392'
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
              ticks: {
                fontSize: 9, // Set the font size for x-axis labels
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
              min: 0, // Set the minimum value for the y-axis
              max: 500000, // Set the maximum value for the y-axis
              ticks: {
                callback: function (value, index, values) {
                  console.log(value)
                  return (value/1000000)+'m'; // For example, display with 2 decimal places
                },
                beginAtZero: true,
                autoSkip: true, // Enable automatic skipping of x-axis labels
                maxTicksLimit: 5, // Maximum number of visible ticks on the x-axis
                // beginAtZero: true,
                stepSize: 50000 
              
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-charts").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded" >
        {/* <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1"> */}
                <br />
        <h6 className=" " style={{ padding: "10px" ,textAlign: 'center'}}>
      
          ขนส่งทางถนน : ปริมาณพลังงาน ปี 2564
        </h6>
        {/* <h2 className="text-blueGray-700 text-xl font-semibold">
                Total orders
              </h2> */}
        {/* </div>
          </div>
        </div> */}
   <div className="p-4 flex-auto">
          <div className="relative h-150-px">
            <canvas  id="bar-charts"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
export default TypeCard2;
