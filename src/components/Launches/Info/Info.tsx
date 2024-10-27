import { Box } from '@mui/material';
import InfoCard from '../../UI/InfoCard/InfoCard';
import ResetButton from './ResetButton/ResetButton';

const Info = () => {
  const title = 'SpaceX Launches';
  const subtitle =
    'This list shows SpaceX launches. Each launch is represented by its mission name. Scroll through the list to see different launches. Select up to 10 launches to compare energy consumption.';

  return (
    <Box
      sx={{
        position: { xs: 'static', sm: 'sticky' },
        top: 0,
        zIndex: 1,
        backgroundColor: 'background.paper',
        padding: 2,
        boxShadow: 1,
      }}
    >
      <InfoCard title={title} subtitle={subtitle} colorScheme="secondary" />
      <ResetButton />
    </Box>
  );
};

export default Info;
