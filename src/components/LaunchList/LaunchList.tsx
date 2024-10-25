import { useGetLaunchesQuery } from '../../../graphql';
import Error from '../UI/Error/Error';
import Loading from '../UI/Loading/Loading';

const LaunchList: React.FC = () => {
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
