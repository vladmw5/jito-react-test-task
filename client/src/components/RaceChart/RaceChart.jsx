import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartJS from "chart.js/auto";
import PropTypes from "prop-types";
import { colors } from "../../utils/colors";

ChartJS.register(ChartDataLabels);

const MAX_DATA = 1000;

const RaceChart = ({ labels, data }) => {
  const barChartData = {
    labels: labels,

    datasets: [
      {
        data: data,

        borderColor: "transparent",
        backgroundColor: colors.slice(0, data.length),
        borderRadius: "6",
        fill: true,
        borderJoinStyle: "bevel",
        borderWidth: "none",
        showLine: false,

        barPercentage: 1,
        barThickness: 25,

        datalabels: {
          layout: {
            padding: {
              top: 0,
              right: 100,
              bottom: 100,
              left: 8,
            },
          },

          font: {
            size: "12",
          },
          color: "#52555f",
          labels: {
            title: {
              align: "top",
            },
          },
          anchor: "end",
          offset: 10,
          barPercentage: 0.5,
          categoryPercentage: 1,

          formatter: (value) => {
            return `${value}m`;
          },
        },
      },
    ],
  };
  return (
    <Bar
      type="bar"
      width={100}
      height={100}
      options={{
        layout: {
          padding: { left: 30, right: 30 },
        },
        indexAxis: "y",
        plugins: {
          legend: {
            display: false,
          },
        },

        scales: {
          x: {
            min: 0,
            max: MAX_DATA,
            stacked: true,
            offset: true,
            grid: { offset: true, lineWidth: 0, borderColor: "transparent" },
            ticks: {
              display: true,
            },
          },
          y: {
            offset: true,
            grid: { offset: true, lineWidth: 0, borderColor: "transparent" },
            stacked: true,
            ticks: {
              display: true,
            },
          },
        },
      }}
      data={barChartData}
    />
  );
};

RaceChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RaceChart;
