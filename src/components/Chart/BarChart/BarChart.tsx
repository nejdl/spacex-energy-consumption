import { LaunchListProps } from '../../../utils/types/types';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { calculateEnergyConsumption } from '../../../utils/calculations/calculateEnergyConsumption';
import { Box, useMediaQuery } from '@mui/material';

const BarChart = ({ launches }: LaunchListProps) => {
  // CHECK IF MOBILE
  const isMobile = useMediaQuery('(max-width:600px)');

  // CHART DATA & OPTIONS
  // process data for chart
  const chartData = launches
    .map((launch) => {
      const missionName = launch.mission_name;
      const rocketName = launch.rocket?.rocket_name;
      const mass = launch.rocket?.rocket?.mass?.kg ?? 0;
      const energyConsumption = calculateEnergyConsumption(mass);

      return {
        missionName: missionName,
        rocketName: rocketName,
        energyConsumption: energyConsumption,
      };
    })
    .filter((data) => data.energyConsumption > 0);

  // series data
  const series = [
    {
      name: 'Energy Consumption',
      data: chartData.map((data) => data.energyConsumption),
    },
  ];

  // chart options
  const options: ApexOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: chartData.map(
        (data) => `${data.rocketName} | ${data.missionName}`
      ),
      title: {
        text: 'Mission (Rocket)',
      },
      labels: {
        trim: true,
        maxHeight: isMobile ? 100 : 175, // helps with responsive styling, as it affects height
      },
    },
    yaxis: {
      title: {
        text: 'Energy Consumption (J)',
      },
      labels: {
        formatter: (value) => {
          return value.toExponential(2); // shorten notation of numbers with many zeros
        },
      },
    },
    title: {
      text: 'Launch Energy Consumption',
      align: 'center',
    },
    tooltip: {
      y: {
        formatter: (value) => {
          return value.toExponential(2) + ' J'; // shorten notation of numbers with many zeros
        },
      },
    },
  };

  return (
    <Box sx={{ width: '100%' }}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={isMobile ? 300 : 500}
      />
    </Box>
  );
};

export default BarChart;
