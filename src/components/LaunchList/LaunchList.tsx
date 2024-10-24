import { CircularProgress } from '@mui/material';
import { useLaunchListQuery } from '../../generated/graphql';
import Error from '../UI/Error/Error';
import { Launch } from '../../generated/graphql';

const LaunchList: React.FC = () => {
  const { data, loading, error } = useLaunchListQuery();

  if (loading) return <CircularProgress />;
  if (error) return <Error message={error.message} />;

  console.log(data);

  return (
    <ul>
      {data?.launches?.map(
        (launch) => launch && <li key={launch.id}>{launch.mission_name}</li>
      )}
    </ul>
  );
};

export default LaunchList;
