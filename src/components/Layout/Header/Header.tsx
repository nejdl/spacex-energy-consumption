import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  const title = 'SpaceX Energy Tracker';
  const subtitle = 'A tracker for SpaceX launch energy use';

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="h1">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="h2">
          {subtitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
