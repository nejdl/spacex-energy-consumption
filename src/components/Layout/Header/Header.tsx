import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  const title = 'SpaceX Energy Tracker';
  const subtitle = 'A tracker for SpaceX launch energy use';

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Typography variant="h6" component="h1" sx={{ textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{ textAlign: 'center' }}
        >
          {subtitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
