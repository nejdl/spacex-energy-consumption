import { Container } from '@mui/material';
import './App.css';
import Chart from './components/Chart/Chart';
import Header from './components/Header/Header';
import LaunchList from './components/LaunchList/LaunchList';

function App() {
  return (
    <Container component="main">
      <Header />
      <LaunchList />
      <Chart />
    </Container>
  );
}

export default App;
