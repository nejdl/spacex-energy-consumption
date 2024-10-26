import { Container } from '@mui/material';
import Launches from '../../Launches/Launches';
import Chart from '../../Chart/Chart';

const Dashboard = () => {
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
      <Launches />
      <Chart />
    </Container>
  );
};

export default Dashboard;
