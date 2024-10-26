import { LaunchListProps } from '../../../utils/types/types';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { calculateEnergyConsumption } from '../../../utils/calculations/calculateEnergyConsumption';

const BarChart: React.FC<LaunchListProps> = ({ launches }) => {
  // process data for chart
  const chartData = launches
    .map((launch) => ({
      missionName: launch.mission_name,
      rocketName: launch.rocket?.rocket_name,
      energyConsumption: calculateEnergyConsumption(
        launch.rocket?.rocket?.mass?.kg ?? 0
      ),
    }))
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
      height: 500,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: chartData.map(
        (data) => `${data.missionName} (${data.rocketName})`
      ),
      title: {
        text: 'Mission (Rocket)',
      },
    },
    yaxis: {
      title: {
        text: 'Energy Consumption (J)',
      },
    },
    title: {
      text: 'Launch Energy Consumption',
      align: 'center',
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={500}
      />
    </div>
  );
};

export default BarChart;
