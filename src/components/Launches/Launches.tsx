import { Box, Button } from '@mui/material';
import Info from './Info/Info';
import LaunchList from './LaunchList/LaunchList';
import Loading from '../UI/Loading/Loading';
import Error from '../UI/Error/Error';
import { Launch, useLaunchesQuery } from '../../generated/graphql';

const Launches: React.FC = () => {
  const limit = 100;
  const offset = 0;
  const { data, loading, error } = useLaunchesQuery({
    variables: {
      limit: limit,
      offset: offset,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  // TO DO: check how to write type safety correctly
  const launches = data?.launches as Launch[];

  return (
    <Box
      sx={{
        flexBasis: '50%',
        maxWidth: { xs: '100%', sm: 600 },
        overflow: 'scroll',
      }}
    >
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: 'background.paper',
          padding: 2,
          boxShadow: 1,
        }}
      >
        <Info />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            /* TO DO: Implement reset function */
          }}
          sx={{ mt: 2 }}
        >
          Reset Selected Launches
        </Button>
      </Box>
      <LaunchList launches={launches} />
    </Box>
  );
};

export default Launches;
