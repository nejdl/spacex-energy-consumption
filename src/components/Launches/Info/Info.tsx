import { Paper, Typography } from '@mui/material';

const Info: React.FC = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: 2,
        marginBottom: 2,
        bgcolor: 'primary.light',
        color: 'primary.contrastText',
        borderRadius: 1,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Select multiple launches to compare energy consumption
      </Typography>
      <Typography variant="body1">
        This list shows SpaceX launches. Each launch is represented by its
        mission name. Scroll through the list to see different launches. Select
        multiple launches to compare energy consumption.
      </Typography>
    </Paper>
  );
};

export default Info;
