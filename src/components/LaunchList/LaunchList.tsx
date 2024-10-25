import { CircularProgress } from '@mui/material';
import { useGetLaunchesQuery } from '../../generated/graphql';
import Error from '../UI/Error/Error';

const LaunchList: React.FC = () => {
  const limit = 10;
  const sortByField = 'mission_name';
  const direction = 'desc';
  const { data, loading, error } = useGetLaunchesQuery({
    variables: { limit: limit, offset: 0, order: direction, sort: sortByField },
  });

  if (loading) return <CircularProgress />;
  if (error) return <Error message={error.message} />;

  console.log(data);

  return (
    <ul>
      {data?.launches?.map(
        (launch: any) =>
          launch && <li key={launch.id}>{launch.mission_name}</li>
      )}
    </ul>
  );
};

export default LaunchList;
