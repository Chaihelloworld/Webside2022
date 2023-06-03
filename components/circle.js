import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

function Circle() {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: [
        "น้ำมันดีเซล",
        "น้ำมันเบนซิน",
        "แก๊สโซฮอล์ 91",
        "น้ำมันไบโอดีเซล",
      ],
      datasets: [
        {
          label: 'My First Dataset',
          data: [22015480.00, 1174840.00, 31056640.00, 153240.00],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            '#4caf0f',
            '#41464b'
          ],
          hoverOffset: 4,
        },
      ],
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true, // Enable responsiveness
        maintainAspectRatio: false, // Disable aspect ratio preservation
        plugins: {
          legend: {
            align: 'start', // Align legend text to the left
            labels: {
              display: false, // Hide the direct labels data
            },
            
          },
        },
      },
    };

    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, config);
  }, []);

  return (
    <div className="container">
      <div className="bg-white ">
        <div className="p-4">
          <div>
            <canvas id="bar-chartsCircle" ref={chartRef} style={{ height: '200px' ,marginLeft:'1px'}}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Circle;
