import { Box } from '@mui/material';
import { Launch, useGetLaunchesQuery } from '../../generated/graphql';
import Error from '../UI/Error/Error';
import Loading from '../UI/Loading/Loading';
import Info from './Info/Info';
import LaunchList from './LaunchList/LaunchList';

const Launches: React.FC = () => {
  const limit = 100;
  const offset = 0;
  const { data, loading, error } = useGetLaunchesQuery({
    variables: {
      limit: limit,
      offset: offset,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  console.log(data?.launches);

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
      <LaunchList
        launches={
          data?.launches?.filter(
            (launch): launch is Launch => launch !== null
          ) || []
        }
      />
    </Box>
  );
};

export default Launches;
