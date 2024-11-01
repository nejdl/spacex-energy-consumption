import { Box } from '@mui/material';
import { selectedLaunchesVar } from '../../utils/cache/cache';
import { useReactiveVar } from '@apollo/client';
import InfoCard from '../UI/InfoCard/InfoCard';
import BarChart from './BarChart/BarChart';

const Chart = () => {
  // SELECTED LAUNCHES STATE
  const selectedLaunches = useReactiveVar(selectedLaunchesVar);

  return (
    <Box
      sx={{
        flexBasis: { xs: '60%', sm: '50%' },
        flexGrow: 1,
        overflow: 'scroll',
        bgcolor: 'secondary.light',
        borderTop: { xs: '2px solid', sm: 'none' },
        borderColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      {selectedLaunches.length > 0 ? ( // show chart only if launches are selected, otherwise show info
        <BarChart launches={selectedLaunches} />
      ) : (
        <InfoCard
          title="Select multiple launches to compare energy consumption"
          subtitle="You can select up to 10 launches"
          colorScheme="primary"
        />
      )}
    </Box>
  );
};

export default Chart;
