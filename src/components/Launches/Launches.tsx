import { Box, Button } from '@mui/material';
import Info from './Info/Info';
import LaunchList from './LaunchList/LaunchList';
import Loading from '../UI/Loading/Loading';
import Error from '../UI/Error/Error';
import { Launch, useLaunchesQuery } from '../../generated/graphql';
import { selectedLaunchesVar } from '../../utils/cache/cache';
import { useReactiveVar } from '@apollo/client';

const Launches = () => {
  // SELECTED LAUNCHES STATE
  // state managment via apollo client & reactive variables (in src/utils/cache/cache.ts)
  const selectedLaunches = useReactiveVar(selectedLaunchesVar);

  // DATA FETCHING
  const limit = 100;
  const offset = 0; // TO DO: add pagination with offset
  const { data, loading, error } = useLaunchesQuery({
    variables: {
      limit: limit,
      offset: offset,
    },
  });

  // LOADING, ERROR
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  // CHECK LAUNCHES DATA
  // ensure type safety for launches array as type "Launch[]"
  // check if data and data.launches exist
  if (!data || !data.launches) return <Error message="No data" />;
  // filter out null launches and assert type "Launch"
  const launches = data.launches.filter(
    (launch) => launch !== null
  ) as Launch[];

  // RESET SELECTED LAUNCHES
  const resetSelectedLaunches = () => {
    selectedLaunchesVar([]);
  };

  return (
    <Box
      sx={{
        flexBasis: { xs: '40%', sm: '50%' },
        maxWidth: { xs: '100%', sm: 600 },
        overflow: 'scroll',
      }}
    >
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
        <Info />
        <Button
          variant="contained"
          color="primary"
          onClick={resetSelectedLaunches}
          sx={{ mt: 2 }}
          disabled={selectedLaunches.length === 0}
        >
          Reset
        </Button>
      </Box>
      <LaunchList launches={launches} />
    </Box>
  );
};

export default Launches;
