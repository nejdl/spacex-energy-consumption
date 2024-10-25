import { CircularProgress } from '@mui/material';
import { useGetLaunchesQuery } from '../../generated/graphql';
import Error from '../UI/Error/Error';
import { gql, useQuery } from '@apollo/client';

const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int, $offset: Int, $sort: String, $order: String) {
    launches(limit: $limit, offset: $offset, sort: $sort, order: $order) {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
    }
  }
`;

const LaunchList: React.FC = () => {
  const limit = 10;
  //   const sortByField = 'launch_date_utc';
  // const sortByField = 'mission.name';
  //   const sortByField = 'Launch.mission_name';
  const sortByField = 'mission_name';
  //   const sortByField = 'launch_date_utc';
  const direction = 'desc';
  //   const sort = sortByField + ':' + direction;
  //   const { data, loading, error } = useGetLaunchesQuery({
  //     variables: { limit: limit, offset: 0, order: direction, sort: sortByField },
  //   });
  const { data, loading, error } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: limit,
      offset: 0,
      sort: sortByField,
      order: direction,
    },
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
