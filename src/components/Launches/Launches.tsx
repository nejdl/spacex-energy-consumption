import { Box } from '@mui/material';
import { Launch, useGetLaunchesQuery } from '../../../graphql';
import Info from './Info/Info';
import LaunchList from './LaunchList/LaunchList';
import { LaunchListProps } from '../../utils/types/types';

const Launches: React.FC<LaunchListProps> = ({ launches }) => {
  // TO DO: check how to write type safety correctly for launches map
  return (
    <Box
      sx={{
        flexBasis: '50%',
        maxWidth: { xs: '100%', sm: 600 },
        overflow: 'scroll',
      }}
    >
      <Info />
      <LaunchList launches={launches} />
    </Box>
  );
};

export default Launches;
