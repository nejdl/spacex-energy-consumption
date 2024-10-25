import InfoCard from '../../UI/InfoCard/InfoCard';

const Info: React.FC = () => {
  const title = 'SpaceX Launches';
  const subtitle =
    'This list shows SpaceX launches. Each launch is represented by its mission name. Scroll through the list to see different launches. Select multiple launches to compare energy consumption.';

  return <InfoCard title={title} subtitle={subtitle} colorScheme="primary" />;
};

export default Info;
