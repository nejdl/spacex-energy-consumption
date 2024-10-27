import { Box } from '@mui/material';
import Info from './Info/Info';
import LaunchList from './LaunchList/LaunchList';
import Loading from '../UI/Loading/Loading';
import Error from '../UI/Error/Error';
import { Launch, useLaunchesQuery } from '../../generated/graphql';

const Launches = () => {
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

  return (
    <Box
      sx={{
        flexBasis: { xs: '40%', sm: '50%' },
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
