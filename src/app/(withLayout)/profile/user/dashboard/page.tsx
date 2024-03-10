"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import order from "../../../../../../public/orders.png";
import pending from "../../../../../../public/pending.png";
import paid from "../../../../../../public/paid.png";
// import ApexCharts from 'apexcharts'
import dynamic from "next/dynamic"; // Import dynamic to load ApexCharts only on the client-side
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
// const ApexCharts1 = dynamic(() => import('react-apexcharts'), { ssr: false });

// var options = {
//     chart: {
//         type: 'line'
//     },
//     series: [{
//         name: 'sales',
//         data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//     }],
//     xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//     }
// }

interface ChartOptions {
  chart: {
    height: number;
    type:
      | "line"
      | "area"
      | "bar"
      | "pie"
      | "radialBar"
      | "scatter"
      | "bubble"
      | "heatmap"
      | "candlestick"
      | "radar"
      | "polarArea"
      | "rangeBar"
      | "rangeArea"
      | "treemap"
      | undefined;
  };
  dataLabels: {
    enabled: boolean;
  };
  series: {
    name: string;
    data: number[];
  }[];
  fill: {
    type: string;
    gradient: {
      shadeIntensity: number;
      opacityFrom: number;
      opacityTo: number;
      stops: number[];
    };
  };
  xaxis: {
    categories: string[];
  };
}

interface PieChartOptions {
  chart: {
    height: number;
    width: number;
    type: "pie";
  };
  series: number[];
  labels: string[];
  responsive: any;

  //   chartOptions: {labels: string[]; };
}

const Dashboard = () => {
  const [chartData, setChartData] = useState<ChartOptions | undefined>(
    undefined
  );
  const [pieData, setPieData] = useState<PieChartOptions | undefined>(
    undefined
  );

  useEffect(() => {
    var options: ChartOptions = {
      chart: {
        height: 280,
        type: "area",
      },
      dataLabels: {
        enabled: true,
      },
      series: [
        {
          name: "Win matches",
          data: [8, 12, 15, 8, 9, 23, 2, 11, 16, 13],
        },
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    };

    var option1: PieChartOptions = {
      chart: {
        height: 1000,
        width: 1000,
        type: "pie",
      },
      series: [3, 5, 2, 8],
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      //   chartOptions: { labels: ["Week 1", "Week 2", "Week 3", "Week 4"], },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    setChartData(options);
    setPieData(option1);

    // if (typeof window !== undefined) {

    //     const chart = new ApexCharts(document.querySelector("#chart"), options);
    //     const chart1 = new ApexCharts(document.querySelector("#pie"), option1);
    //     chart.render();
    //     chart1.render();
    // }
  }, []); // Run this effect only once on component mount

  return (
    <div
      className="min-h-96 flex flex-col gap-10"
      style={{ backgroundColor: "#F4F6F9" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-3 gap-2 w-full">
        <div className=" shadow-xl bg-white rounded-sm py-8 px-3 flex flex-row gap-2">
          <div className="w-1/3">
            <Image src={order} alt="" width={400} height={400} />
          </div>
          <div className="flex flex-col gap-y-3  w-full">
            <div className="w-full flex flex-row justify-between items-center ">
              <p className="md:text-lg lg:text-xl xl:text-2xl text-gray-400">
                Total Oder{" "}
              </p>
              <p className="text-2xl text-gray-700">{10}</p>
            </div>
            <div className="w-full h-2 bg-blue-200 rounded-full">
              <div className="w-12/12 h-full text-center text-xs text-white bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="card shadow-xl bg-white rounded-sm py-8 px-3 flex flex-row gap-2">
          <div className="w-1/3">
            <Image src={pending} alt="" width={400} height={400} />
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <div className="w-full flex flex-row justify-between items-center ">
              <p className="md:text-lg lg:text-xl xl:text-2xl text-gray-400">
                Pending status{" "}
              </p>
              <p className="text-2xl text-gray-700">{6}</p>
            </div>
            <div className="w-full h-2 bg-blue-200 rounded-full">
              <div className="w-7/12 h-full text-center text-xs text-white bg-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="card shadow-xl bg-white rounded-sm py-8 px-3 flex flex-row gap-2">
          <div className="w-1/3">
            <Image src={paid} alt="" width={400} height={400} />
          </div>
          <div className="flex flex-col gap-y-3  w-full">
            <div className="w-full flex flex-row justify-between items-center ">
              <p className="md:text-lg lg:text-xl xl:text-2xl text-gray-400">
                Paid status{" "}
              </p>
              <p className="text-2xl text-gray-700">{4}</p>
            </div>
            <div className="w-full h-2 bg-blue-200 rounded-full">
              <div className="w-5/12 h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
              {/* <div className="w-full px-4 ">
                <div className="mb-8">
                  <div className="bg-gray-300 relative h-4 w-full rounded-2xl">
                    <div className="bg-primary absolute top-0 left-0 flex h-full w-1/2 items-center justify-center rounded-2xl text-xs font-semibold text-white">
                      50%
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="bg-stroke dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                    <div className="bg-primary absolute top-0 left-0 flex h-full w-[75%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                      75%
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="bg-stroke dark:bg-dark-3 relative h-4 w-full rounded-2xl">
                    <div className="bg-primary absolute top-0 left-0 flex h-full w-[90%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                      90%
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {chartData && (
          <div className="flex flex-col shadow-xl p-1 bg-white">
            <ApexCharts
              options={chartData}
              series={chartData.series}
              type="line"
              height={350}
              id="chart"
            />
            <p className="text-center text-xl text-gray-500 font-bold">
              Monthly Match Win status
            </p>
          </div>
        )}
        {pieData && (
          <div className="flex flex-col shadow-xl p-1 bg-white justify-center h-full">
            <ApexCharts
              options={pieData}
              series={pieData.series}
              type="pie"
              height={350}
              id="pie"
            />
            <p className="text-center text-xl text-gray-500 font-bold">
              Weekly Match Win status
            </p>
          </div>
        )}

        {/* <div className="flex flex-col gap-3 flex-1">
                    <div id="chart"></div>
                    <p className="text-center">Monthly Match winning status</p>
                </div>
                <div className="flex-1">
                    <div id="pie"></div>
                </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
