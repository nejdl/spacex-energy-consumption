import { Container } from '@mui/material';
import './App.css';
import Chart from './components/Chart/Chart';
import Header from './components/Header/Header';
import LaunchList from './components/LaunchList/LaunchList';

function App() {
  return (
    <>
      <Header />
      <Container component="main" maxWidth={false}>
        <LaunchList />
        <Chart />
      </Container>
    </>
  );
}

export default App;
