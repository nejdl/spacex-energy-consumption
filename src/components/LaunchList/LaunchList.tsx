import { useLaunchListQuery } from '../../generated/graphql';

const LaunchList = () => {
  const { data, loading, error } = useLaunchListQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <ul>
      {data?.launches?.map((launch) => (
        <li key={launch?.id}>{launch?.mission_name}</li>
      ))}
    </ul>
  );
};

export default LaunchList;
