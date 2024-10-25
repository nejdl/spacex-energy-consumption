import { Container } from '@mui/material';
import Launches from '../../Launches/Launches';
import Chart from '../../Chart/Chart';
import Loading from '../../UI/Loading/Loading';
import Error from '../../UI/Error/Error';
import { Launch, useLaunchesQuery } from '../../../generated/graphql';

const Dashboard: React.FC = () => {
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

  console.log(data?.launches);

  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* TO DO: correct type saftey? */}
      <Launches launches={data?.launches as Launch[]} />
      <Chart launches={data?.launches as Launch[]} />
    </Container>
  );
};

export default Dashboard;
