import { Box } from '@mui/material';
import { selectedLaunchIdsVar } from '../../cache';
import { useReactiveVar } from '@apollo/client';

const Chart: React.FC = () => {
  const selectedLaunchIds = useReactiveVar(selectedLaunchIdsVar);
  const displaySelectedIds = selectedLaunchIds.join(', ');

  return (
    <Box
      sx={{
        flexBasis: '50%',
        flexGrow: 1,
        overflow: 'scroll',
        bgcolor: 'secondary.light',
        borderTop: { xs: '2px solid', sm: 'none' },
        borderColor: 'primary.main',
      }}
    >
      {displaySelectedIds}
    </Box>
  );
};

export default Chart;
