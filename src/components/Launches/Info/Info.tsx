import InfoCard from '../../UI/InfoCard/InfoCard';

const Info = () => {
  const title = 'SpaceX Launches';
  const subtitle =
    'This list shows SpaceX launches. Each launch is represented by its mission name. Scroll through the list to see different launches. Select up to 10 launches to compare energy consumption.';

  return <InfoCard title={title} subtitle={subtitle} colorScheme="secondary" />;
};

export default Info;
