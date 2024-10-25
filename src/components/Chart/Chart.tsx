import { Box } from '@mui/material';
import { selectedLaunchIdsVar } from '../../utils/cache/cache';
import { useReactiveVar } from '@apollo/client';
import InfoCard from '../UI/InfoCard/InfoCard';
import { LaunchListProps } from '../../utils/types/types';

const Chart: React.FC<LaunchListProps> = ({ launches }) => {
  const selectedLaunchIds = useReactiveVar(selectedLaunchIdsVar);

  // const displaySelectedIds = selectedLaunchIds.join(', ');
  return (
    <Box
      sx={{
        flexBasis: '50%',
        flexGrow: 1,
        overflow: 'scroll',
        bgcolor: 'secondary.light',
        borderTop: { xs: '2px solid', sm: 'none' },
        borderColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {selectedLaunchIds.length > 0 ? (
        'xxx'
      ) : (
        <InfoCard
          title="Select multiple launches to compare energy consumption"
          subtitle="You can select up to 5 launches"
          colorScheme="primary"
        />
      )}
    </Box>
  );
};

export default Chart;
