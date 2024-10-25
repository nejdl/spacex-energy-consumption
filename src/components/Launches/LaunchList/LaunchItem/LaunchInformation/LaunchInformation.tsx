import { Box, ListItemText, Typography } from '@mui/material';
import { Launch } from '../../../../../../graphql';

interface LaunchInformationProps {
  launch: Launch;
}

const LaunchInformation: React.FC<LaunchInformationProps> = ({ launch }) => {
  const primaryText = launch.mission_name;

  const secondaryText = (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="body2">{launch.rocket?.rocket_name}</Typography>
      <Typography variant="body2">{launch.launch_year}</Typography>
    </Box>
  );
  return (
    <>
      <ListItemText
        primary={primaryText}
        secondary={secondaryText}
        primaryTypographyProps={{ variant: 'h6' }}
        secondaryTypographyProps={{ component: 'div' }}
      />
    </>
  );
};

export default LaunchInformation;
