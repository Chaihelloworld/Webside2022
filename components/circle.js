import React from "react";
import Chart from "chart.js";

function Circle() {
  React.useEffect(() => {
    const data = {
      labels: [
        "น้ำมันดีเซล",
        "น้ำมันเบนซิน",
        "แก๊สโซฮอล์ 91",
        "น้ำมันไบโอดีเซล",
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [22015480.00, 1174840.00, 31056640.00, 153240.00],
        backgroundColor: [
          // 'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          '#4caf0f',
          '#41464b'
        ],
        hoverOffset: 4
      }]
    };
    const config = {
      type: 'doughnut',
      data: data,
    };
    let ctx = document.getElementById("bar-chartsCircle").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className=" ">
        {/* <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1"> */}
        {/* <h6 className=" " style={{ padding: "10px" }}> */}
          {/* <br /> */}
         {/* ขนส่งทางถนน : ปริมาณพลังงาน */}
        {/* </h6> */}
        {/* <h2 className="text-blueGray-700 text-xl font-semibold">
                Total orders
              </h2> */}
        {/* </div>
          </div>
        </div> */}
        <div className="p-4 ">
          {/* Chart */}
          <div className="">
            <canvas id="bar-chartsCircle"></canvas>
          </div>
        </div>
    
      </div>
    </>
  );
}
export default Circle;
